'use client';

import { useParams } from 'next/navigation';

export default function ProfilePage() {
  const params = useParams();
  const profileId = params.id;
  
  return (
    <div className="profile-container">
      <h1 className="text-2xl font-bold mb-4">Profile Page</h1>
      <p className="text-gray-600">Profile ID: {profileId}</p>
    </div>
  );
}
