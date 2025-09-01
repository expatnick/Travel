'use client';

import { useState, useEffect } from 'react';

const FAB = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [activePostType, setActivePostType] = useState('vlog');

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  useEffect(() => {
    // This effect will run when the modal is opened
    if (modalOpen) {
      const handlePostTypeClick = (e: Event) => {
        const target = e.target as HTMLElement;
        const postType = target.closest('.post-type');
        
        if (postType) {
          // Remove active class from all post types
          document.querySelectorAll('.post-type').forEach(el => {
            el.classList.remove('active');
          });
          
          // Add active class to clicked post type
          postType.classList.add('active');
          
          // Update state with the selected post type
          const type = postType.getAttribute('data-type') || 'vlog';
          setActivePostType(type);
        }
      };

      // Add click event listeners to post type selectors
      const postTypes = document.querySelectorAll('.post-type');
      postTypes.forEach(element => {
        element.addEventListener('click', handlePostTypeClick);
      });

      // Cleanup event listeners when component unmounts or modal closes
      return () => {
        postTypes.forEach(element => {
          element.removeEventListener('click', handlePostTypeClick);
        });
      };
    }
  }, [modalOpen]);

  return (
    <>
      <div className="fab-container">
        <button className="fab-button" id="fabButton" onClick={openModal}>
          <i className="fas fa-plus"></i>
        </button>
      </div>
      
      {/* Modal for creating a post */}
      {modalOpen && (
        <div className="modal-overlay" id="modalOverlay" onClick={(e) => {
          // Close the modal when clicking outside the content
          if ((e.target as HTMLElement).className === 'modal-overlay') {
            closeModal();
          }
        }}>
          <div className="create-post-modal oasis-updates-popup-content">
            <div className="popup-header">
              <h3 className="popup-title">Create New Post</h3>
              <button className="close-popup" id="closeModal" onClick={closeModal}>
                <i className="fas fa-times"></i>
              </button>
            </div>
            
            <form id="postForm" onSubmit={(e) => {
              e.preventDefault();
              alert('Post created successfully!');
              closeModal();
            }}>
              <div className="form-group">
                <label htmlFor="postTitle">Post Title</label>
                <input type="text" className="form-control" id="postTitle" placeholder="Enter a title for your post" required />
              </div>
              <div className="form-group">
                <label>Post Type</label>
                <div className="post-type-selector">
                  <div className="post-type vlog active" data-type="vlog">
                    <i className="fas fa-video"></i>
                    <span>Vlog</span>
                  </div>
                  <div className="post-type blog" data-type="blog">
                    <i className="fas fa-blog"></i>
                    <span>Blog</span>
                  </div>
                  <div className="post-type guide" data-type="guide">
                    <i className="fas fa-map-marked-alt"></i>
                    <span>Travel Guide</span>
                  </div>
                  <div className="post-type food" data-type="food">
                    <i className="fas fa-utensils"></i>
                    <span>Food Guide</span>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="postContent">Content</label>
                <textarea className="form-control" id="postContent" placeholder="Share your travel experience..." required></textarea>
              </div>
              
              <div className="form-group">
                <label htmlFor="postTags">Tags</label>
                <input type="text" className="form-control" id="postTags" placeholder="Add tags (separated by commas)" />
              </div>
              
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" id="cancelButton" onClick={closeModal}>Cancel</button>
                <button type="submit" className="btn btn-primary">Create Post</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default FAB;
