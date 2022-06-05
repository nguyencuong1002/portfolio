import React from 'react';
import { BsInstagram, BsLinkedin } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href = "https://www.linkedin.com/in/c%C6%B0%E1%BB%9Dng-nguy%E1%BB%85n-a03223234/">
        <BsLinkedin/>
      </a>
    </div>
    <div>
      <a href = "https://www.facebook.com/people/C%C6%B0%E1%BB%9Dng-Nguy%E1%BB%85n/100008312715057/">
        <FaFacebookF />
      </a>
    </div>
    <div>
      <a href="https://www.instagram.com/cuongng1002/">
        <BsInstagram />
      </a>
    </div>
  </div>
);

export default SocialMedia;
