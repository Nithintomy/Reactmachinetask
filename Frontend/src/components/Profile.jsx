import React from 'react';
import FacebookIcon from '../assets/facebook.png';
import InstagramIcon from '../assets/instagram.png';
import TwitterIcon from '../assets/twitter.png';
import profilepic from '../assets/media.png';

function Profile() {
  return (
    <div className="sm:rounded-lg bg-white shadow-lg rounded-md w-full md:w-1/4 mt-4 md:ml-4">
       <div className="flex flex-col items-center justify-center">
        <img
          src={profilepic}
          alt="Profile"
          className="w-52 h-56 md:w-64 md:h-60 "
        />
        <div className="mt-4 text-center p-4">
          <p className="text-md font-bold mb-2">John Doe</p>
          <p className="text-md font-semibold mb-2">CEO</p>
          <div className="flex items-center justify-center">
            <img src={FacebookIcon} alt="Facebook" className="w-4 h-4 mr-2" />
            <img src={InstagramIcon} alt="Instagram" className="w-4 h-4 mr-2" />
            <img src={TwitterIcon} alt="Twitter" className="w-4 h-4" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
