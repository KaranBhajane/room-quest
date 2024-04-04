import React from 'react'

export const Insta = () => {
  return (
    <div>
         <div className="container">
      <div className="profile-header">
        <img src="instagram_logo.png" alt="Instagram" className="logo" />
        <h1>Instagram</h1>
      </div>
      <div className="profile-info">
        <img src="profile_picture.jpg" alt="Profile" className="profile-picture" />
        <div className="profile-details">
          <h2>Username</h2>
          <p>Followers: 1M | Following: 100 | Posts: 500</p>
          <p>Bio: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
      <div className="gallery">
        <img src="post1.jpg" alt="Post 1" className="post" />
        <img src="post2.jpg" alt="Post 2" className="post" />
        <img src="post3.jpg" alt="Post 3" className="post" />
      </div>
    </div>
    </div>
  )
}
