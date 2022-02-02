import React from 'react';
import './Profile.css';

function Profile() {
  return (
   <div className="profile-container">
       <div className="profile-parent">
           <div className="profile-details">
               <div className="colz">
                   <div className='colz-icon'>


                   <a href="#">
                       <i className="fa fa-facebook-square"></i>
                   </a>
                   <a href="#">
                       <i className="fa fa-google-plus-square"></i>
                   </a>
                   <a href="#">
                       <i class-className='bi bi-instagram'></i>
                   </a>
                   <a href="#">
                       <i className="fa fa-youtube-square"></i>
                   </a>
                   <a href="#">
                       <i className="fa fa-twitter-square"></i>
                   </a>
                   </div>
               </div>
           
                <div className="profile-details-name">
                    <span className="primary-text">
                        {" "}
                        Hello I am <span className="highlighted-text"> Aniket </span>
                    </span>
                </div>
                <div className="profile-details-role">
                    <span className="primary-text">
                        {" "}
                        <h1>
                            I think I am Full Stack Developer.
                        </h1>
                        <span className='profile-role-tagline'>Knack of building applications with front and end operations </span>
                    </span>
                </div>
                <div className='profile-options'>
                    <button className='btn btn-primary'>
                        {" "}
                        Hire Me{" "}
                    </button>
                    <a href="Aniket_resume.pdf" download='Aniket_resume.pdf'>
                        <button className='btn highlighted-btn'>Get Resume</button>
                    </a>
                </div>
           </div>
           <div className='profile-picture'>
               <div className='profile-picture-background'></div>
           </div>
       </div>
  </div>
  )
}
export default Profile;