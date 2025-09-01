'use client';

import { useEffect } from 'react';

const RightAlertNavbar = () => {
  // Define the openOasisUpdatesPopup function at component level so it can be used in JSX
  const handleOasisUpdatesClick = () => {
    const oasisPopup = document.createElement('div');
    oasisPopup.id = 'oasisUpdatesPopup';
    oasisPopup.className = 'popup-overlay active';
    oasisPopup.innerHTML = `
      <div class="popup-content">
        <div class="popup-header">
          <h3 class="popup-title">Oasis Updates</h3>
          <button class="close-popup" onclick="this.closest('.popup-overlay').remove()">
            <i class="fas fa-times"></i>
          </button>
        </div>
        <div class="popup-updates-container">
          <p style="color: var(--gray); text-align: center; padding: 40px;">No updates available</p>
        </div>
      </div>
    `;
    document.body.appendChild(oasisPopup);
    
    // Close popup when clicking outside
    oasisPopup.addEventListener('click', function(e) {
      if (e.target === oasisPopup) {
        oasisPopup.remove();
      }
    });
  };

  useEffect(() => {
    // Alerts Popup Logic
    const viewAllAlertsBtn = document.getElementById('viewAllAlerts');
    const clearAlertsBtn = document.getElementById('clearAlertsBtn');
    const alertsContainer = document.querySelector('.alerts-container');

    // Open Alerts Popup
    function openAlertsPopup(e: Event) {
      if (e) e.preventDefault();
      // Create and show alerts popup
      const alertsPopup = document.createElement('div');
      alertsPopup.id = 'alertsPopup';
      alertsPopup.className = 'popup-overlay active';
      alertsPopup.innerHTML = `
        <div class="popup-content">
          <div class="popup-header">
            <h3 class="popup-title">All Alerts</h3>
            <button class="close-popup" onclick="this.closest('.popup-overlay').remove()">
              <i class="fas fa-times"></i>
            </button>
          </div>
          <div class="popup-alerts-container">
            <p style="color: var(--gray); text-align: center; padding: 40px;">No alerts available</p>
          </div>
        </div>
      `;
      document.body.appendChild(alertsPopup);
      
      // Close popup when clicking outside
      alertsPopup.addEventListener('click', function(e) {
        if (e.target === alertsPopup) {
          alertsPopup.remove();
        }
      });
    }

    // Clear Alerts
    function clearAlerts(e: Event) {
      e.preventDefault();
      if (alertsContainer) {
        alertsContainer.innerHTML = '<p style="color: var(--gray); text-align: center; padding: 20px;">All alerts cleared</p>';
      }
      // Minimize the alerts section
      const alertsCard = clearAlertsBtn?.closest('.card');
      if (alertsCard) {
        const cardContent = alertsCard.querySelector('.card-content');
        if (cardContent) {
          (cardContent as HTMLElement).classList.add('minimized');
          (cardContent as HTMLElement).style.display = 'none';
        }
        // Add a minimize indicator/button
        let minimizeBtn = alertsCard.querySelector('.minimize-btn');
        if (!minimizeBtn) {
          minimizeBtn = document.createElement('button');
          minimizeBtn.className = 'minimize-btn';
          (minimizeBtn as HTMLElement).title = 'Show Alerts';
          minimizeBtn.innerHTML = '<i class="fas fa-chevron-down"></i>';
          alertsCard.querySelector('.live-header')?.appendChild(minimizeBtn);
          minimizeBtn.addEventListener('click', function() {
            if (cardContent) {
              (cardContent as HTMLElement).classList.remove('minimized');
              (cardContent as HTMLElement).style.display = '';
              minimizeBtn?.remove();
            }
          });
        }
      }
    }

    // Trending Posts Logic
    const viewAllTrendingBtn = document.getElementById('viewAllTrending');
    const clearTrendingBtn = document.getElementById('clearTrendingBtn');
    const trendingContainer = document.querySelector('.trending-container');

    // Open Trending Popup
    function openTrendingPopup(e: Event) {
      if (e) e.preventDefault();
      const trendingPopup = document.createElement('div');
      trendingPopup.id = 'trendingPopup';
      trendingPopup.className = 'popup-overlay active';
      trendingPopup.innerHTML = `
        <div class="popup-content">
          <div class="popup-header">
            <h3 class="popup-title">All Trending Posts</h3>
            <button class="close-popup" onclick="this.closest('.popup-overlay').remove()">
              <i class="fas fa-times"></i>
            </button>
          </div>
          <div class="popup-trending-container">
            <p style="color: var(--gray); text-align: center; padding: 40px;">No trending posts available</p>
          </div>
        </div>
      `;
      document.body.appendChild(trendingPopup);
      
      // Close popup when clicking outside
      trendingPopup.addEventListener('click', function(e) {
        if (e.target === trendingPopup) {
          trendingPopup.remove();
        }
      });
    }

    // Clear Trending Posts
    function clearTrending(e: Event) {
      e.preventDefault();
      if (trendingContainer) {
        trendingContainer.innerHTML = '<p style="color: var(--gray); text-align: center; padding: 20px;">All trending posts cleared</p>';
      }
      
      // Minimize the trending section
      const trendingCard = clearTrendingBtn?.closest('.card');
      if (trendingCard) {
        const cardContent = trendingCard.querySelector('.card-content');
        if (cardContent) {
          (cardContent as HTMLElement).classList.add('minimized');
          (cardContent as HTMLElement).style.display = 'none';
        }
        
        // Add a minimize indicator/button
        let minimizeBtn = trendingCard.querySelector('.minimize-btn');
        if (!minimizeBtn) {
          minimizeBtn = document.createElement('button');
          minimizeBtn.className = 'minimize-btn';
          (minimizeBtn as HTMLElement).title = 'Show Trending Posts';
          minimizeBtn.innerHTML = '<i class="fas fa-chevron-down"></i>';
          trendingCard.querySelector('.live-header')?.appendChild(minimizeBtn);
          
          minimizeBtn.addEventListener('click', function() {
            if (cardContent) {
              (cardContent as HTMLElement).classList.remove('minimized');
              (cardContent as HTMLElement).style.display = '';
              minimizeBtn?.remove();
            }
          });
        }
      }
    }

    // Note: Oasis Updates popup logic is now moved to component level

    // Add event listeners
    if (viewAllAlertsBtn) {
      viewAllAlertsBtn.addEventListener('click', openAlertsPopup);
    }
    if (clearAlertsBtn) {
      clearAlertsBtn.addEventListener('click', clearAlerts);
    }
    if (viewAllTrendingBtn) {
      viewAllTrendingBtn.addEventListener('click', openTrendingPopup);
    }
    if (clearTrendingBtn) {
      clearTrendingBtn.addEventListener('click', clearTrending);
    }
    // Oasis Updates now handled with React onClick handler

    // Cleanup function
    return () => {
      if (viewAllAlertsBtn) {
        viewAllAlertsBtn.removeEventListener('click', openAlertsPopup);
      }
      if (clearAlertsBtn) {
        clearAlertsBtn.removeEventListener('click', clearAlerts);
      }
      if (viewAllTrendingBtn) {
        viewAllTrendingBtn.removeEventListener('click', openTrendingPopup);
      }
      if (clearTrendingBtn) {
        clearTrendingBtn.removeEventListener('click', clearTrending);
      }
      // Oasis Updates cleanup not needed - now handled with React onClick
    };
  }, []);

  return (
    <div className="right-navbar-container">
      <div className="right-alert-navbar">
        <div className="card">
          <div className="live-header">
            <div className="section-title">
              <i className="fas fa-bell"></i>
              <span>Your Alerts</span>
            </div>
          </div>
          <div className="card-content">
          <div className="alerts-container">
            <p style={{color: 'var(--gray)', textAlign: 'center', padding: '20px'}}>No new alerts</p>
          </div>
          <div className="view-all">
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%'}}>
              <div style={{flex: 1, textAlign: 'left'}}>
                <a href="#" id="viewAllAlerts">View All Alerts</a>
              </div>
              <div style={{flex: 1, textAlign: 'right'}}>
                <a href="#" id="clearAlertsBtn">Clear Alerts</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="card">
        <div className="live-header">
          <div className="section-title">
            <i className="fas fa-fire"></i>
            <span>Trending Travel Posts</span>
          </div>
        </div>
        <div className="card-content">
          <div className="trending-container">
            <p style={{color: 'var(--gray)', textAlign: 'center', padding: '20px'}}>No trending posts</p>
          </div>
          <div className="view-all">
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%'}}>
              <div style={{flex: 1, textAlign: 'left'}}>
                <a href="#" id="viewAllTrending">View All </a>
              </div>
              <div style={{flex: 1, textAlign: 'right'}}>
                <a href="#" id="clearTrendingBtn">Clear All</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div 
        className="card updates-section" 
        onClick={handleOasisUpdatesClick}
        style={{cursor: 'pointer'}}
      >
        <div className="live-header">
          <div className="section-title">
            <i className="fas fa-bullhorn"></i>
            <span>Oasis Updates</span>
          </div>
          <div style={{marginLeft: 'auto', fontSize: '14px', color: 'var(--primary)'}}>
            <i className="fas fa-chevron-right"></i>
          </div>
        </div>
        <div className="card-content">
          <div className="updates-container">
            <p style={{color: 'var(--gray)', textAlign: 'center', padding: '20px'}}>No updates available</p>
            <div style={{textAlign: 'center', marginTop: '10px', color: 'var(--primary)', fontWeight: 500}}>
              Click to view all updates
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default RightAlertNavbar;
