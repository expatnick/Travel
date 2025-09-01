'use client';

import { useEffect, useState, useCallback } from 'react';
import { usePathname } from 'next/navigation';

const LeftNavbar = () => {
  const pathname = usePathname();
  const [activeDropdowns, setActiveDropdowns] = useState<string[]>([]);
  
  // Create a toggleDropdown function that will be used for both click events and React state
  const toggleDropdown = useCallback((id: string) => {
    setActiveDropdowns(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
    
    // Also manually toggle the class for immediate visual feedback
    const dropdown = document.querySelector(`[data-dropdown-id="${id}"]`);
    if (dropdown) {
      dropdown.classList.toggle('active');
    }
  }, []);
  
  // Reset dropdowns when pathname changes
  useEffect(() => {
    // Setup dropdown functionality
    const dropdowns = document.querySelectorAll('.dropdown');
    const cleanupFunctions: Array<() => void> = [];
    
    dropdowns.forEach((dropdown, index) => {
      const dropdownId = `dropdown-${index}`;
      dropdown.setAttribute('data-dropdown-id', dropdownId);
      
      const toggle = dropdown.querySelector('.dropdown-toggle');
      if (toggle) {
        const handleClick = (e: Event) => {
          e.preventDefault();
          toggleDropdown(dropdownId);
        };
        
        toggle.addEventListener('click', handleClick);
        cleanupFunctions.push(() => toggle.removeEventListener('click', handleClick));
      }
    });
    
    // Return cleanup function
    return () => {
      cleanupFunctions.forEach(cleanup => cleanup());
    };
  }, [pathname, toggleDropdown]);

  return (
    <div className="sidebar">
      <div className="logo">
        <i className="fas fa-palm-tree"></i>
        <span>Oasis Abroad</span>
      </div>
      
      {/* Premium Upgrade Section */}
      <div className="premium-section">
        <p className="premium-description">
          Unlock exclusive content, off site RSS feeds, advanced planning tools, and more with a Premium subscription.
        </p>
        <a href="#" className="premium-button">
          <i className="fas fa-crown"></i> Go Premium
        </a>
      </div>
      
      <div className="divider"></div>
      
      <div className="nav-section">
        <div className="nav-title">Main Content</div>
        <ul className="nav-links">
          <li><a href="#" className="active"><i className="fas fa-home"></i> <span>Home</span></a></li>
          <li><a href="#"><i className="fas fa-video"></i> <span>Vlogs</span></a></li>
          <li><a href="#"><i className="fas fa-pen-fancy"></i> <span>Blogs</span></a></li>
        </ul>
      </div>
      
      <div className="divider"></div>
      
      <div className="nav-section">
        <div className="nav-title">Planning & Guides</div>
        <ul className="nav-links">
          <li className={`dropdown ${activeDropdowns.includes('dropdown-0') ? 'active' : ''}`} data-dropdown-id="dropdown-0">
            <a href="#" className="dropdown-toggle">
              <i className="fas fa-book-open"></i> 
              <span>Guides</span>
            </a>
            <div className="dropdown-content">
              <ul className="nav-links">
                <li><a href="#"><i className="fas fa-map-marked-alt"></i> <span>Destination Guides</span></a></li>
                <li><a href="#"><i className="fas fa-utensils"></i> <span>Food & Drink</span></a></li>
                <li><a href="#"><i className="fas fa-route"></i> <span>Itineraries</span></a></li>
              </ul>
            </div>
          </li>
          <li><a href="#"><i className="fas fa-map-pin"></i> <span>Places</span></a></li>
          <li><a href="#"><i className="fas fa-hotel"></i> <span>Stays</span></a></li>
          <li><a href="#"><i className="fas fa-camera"></i> <span>Photo Spots</span></a></li>
        </ul>
      </div>
      
      <div className="divider"></div>
      
      <div className="nav-section">
        <div className="nav-title">Community & Interaction</div>
        <ul className="nav-links">
          <li className={`dropdown ${activeDropdowns.includes('dropdown-1') ? 'active' : ''}`} data-dropdown-id="dropdown-1">
            <a href="#" className="dropdown-toggle">
              <i className="fas fa-users"></i> 
              <span>Community</span>
            </a>
            <div className="dropdown-content">
              <ul className="nav-links">
                <li><a href="#"><i className="fas fa-comments"></i> <span>Forums</span></a></li>
                <li><a href="#"><i className="fas fa-handshake"></i> <span>Meetups</span></a></li>
                <li><a href="#"><i className="fas fa-star"></i> <span>Reviews</span></a></li>
              </ul>
            </div>
          </li>
          <li><a href="#"><i className="fas fa-percentage"></i> <span>Deals</span></a></li>
          <li><a href="#"><i className="fas fa-satellite-dish"></i> <span>Live</span></a></li>
        </ul>
      </div>
      
      <div className="divider"></div>
      
      <div className="nav-section">
        <div className="nav-title">Travel Safety</div>
        <ul className="nav-links">
          <li><a href="#"><i className="fa-solid fa-triangle-exclamation"></i> <span>Travel Advisories</span></a></li>
        </ul>
      </div>
      
      <div className="divider"></div>
      
      <div className="nav-section">
        <div className="nav-title">Account</div>
        <ul className="nav-links">
          <li><a href="#"><i className="fas fa-user"></i> <span>Profile</span></a></li>
          <li><a href="#"><i className="fas fa-cog"></i> <span>Settings</span></a></li>
          <li>
            <a href="#" className="flex items-center">
              <i className="fas fa-user-circle"></i>
              <span>Your Account</span>
            </a>
          </li>
          {/* Account options can go here if needed */}
        </ul>
      </div>
    </div>
  );
};

export default LeftNavbar;