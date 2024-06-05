import React from 'react';

const UserProfile = ({ user }) => {
  return (
    <div className="user-profile">
      <p>{user.name}</p>
    </div>
  );
};

export default UserProfile;
