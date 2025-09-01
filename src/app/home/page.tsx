'use client';
import React from 'react';
import Stories from '../components/TravelUpdates';
import AddPost from '../components/Addpost';
import Feed from '../components/Feed';

export default function HomePage() {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="content-container w-full md:w-[80%] lg:w-[70%] xl:w-[50%] mx-auto">
        {/* Travel Updates Card */}
        <div className="card" style={{ height: '450px', borderRadius: '16px' }}>
          <div className="live-header">
            <div className="section-title">
              <i className="fas fa-globe"></i>
              <span>Travel Updates</span>
            </div>
          </div>
          <div className="card-content">
            <div className="trending-container" style={{ maxHeight: '380px' }}>
              <Stories />
            </div>
          </div>
        </div>

        {/* AddPost and Feed Card */}
        <div className="card" style={{ minHeight: 'calc(100vh - 550px)', height: 'auto', flexGrow: 1 }}>
          <div className="live-header">
            <div className="section-title">
              <i className="fas fa-newspaper"></i>
              <span>Your Feed</span>
            </div>
          </div>
          <div className="card-content" style={{ height: 'calc(100% - 40px)' }}>
            <div className='flex flex-col gap-6 h-full'>
              <AddPost />
              <Feed />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
