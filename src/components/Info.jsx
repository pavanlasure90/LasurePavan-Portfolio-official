import React, { useState } from 'react';
import './Info.css';

const Info = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleOptionSelect = (action) => {
    setShowDropdown(false);
    switch (action) {
      case 'email':
        window.location.href = 'mailto:pavanlasure90@gmail.com';
        break;
      case 'phone':
        window.location.href = 'tel:9492936588';
        break;
      case 'birthday':
        break;
      case 'location':
        window.open('https://www.google.com/maps?q=Echoda,Adilabad,Telangana,504307', '_blank');
        break;
      default:
        break;
    }
  };

  const linkedInProfile = 'https://www.linkedin.com/in/lasure-pavan-500276226/';
  const githubProfile = 'https://github.com/pavanlasure90';

  const dropdownOptions = [
    { text: 'Email: pavanlasure90@gmail.com', action: 'email' },
    { text: 'Phone: +91 9492936588', action: 'phone' },
    { text: 'Birthday: 5 June, 2000', action: '' },
    { text: 'Location: Echoda, Adilabad, Telangana, 504307', action: 'location' }
  ];

  return (
    <div className="container" onClick={toggleDropdown}>
      <div className='boxflex'>
      <div className='container-left'>
        <img src="./assets/my-avatar.png" alt="" />
      </div>
      <div className='container-right'>
        <h1>Lasure Pavan</h1>
        <h4 >Web developer</h4>
      </div>
      </div>
      
      <hr />

      <div className="dropdown">
        <ul className={`options ${showDropdown ? 'open' : ''}`}>
          {dropdownOptions.map((option, index) => (
            <li key={index} onClick={() => handleOptionSelect(option.action)}>
              {option.text}
            </li>
          ))}
        </ul>
        {showDropdown && (
          <div>
            <hr />
          </div>
        )}
        <div className='icons'>
          <a href={linkedInProfile} target="_blank" rel="noopener noreferrer">
            <img src="./assets/linkedIn.png" alt="LinkedIn" />
          </a>
          <a href={githubProfile} target="_blank" rel="noopener noreferrer">
            <img src="./assets/github.png" alt="GitHub" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Info;
