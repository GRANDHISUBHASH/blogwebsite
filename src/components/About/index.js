import React from 'react';
import './index.css'; // Import CSS file

export default function About() {
  return (
    <div className="about-container">
      <div className="about-content">
        <h2 className="about-title">About Me</h2>
        <p className="about-description">
          My name is Grandhis Subhas. I am a React.js developer with the following details:
        </p>
        <ul className="about-details">
          <li>Phone Number: 93479512</li>
          <li>Email: subhashchi2002@gmail.com</li>
          <li>React.js Developer</li>
          <li>Data handling expertise</li>
          <li>Passionate about web development</li>
          <li>Quick learner and dedicated worker</li>
          <li>Open to new challenges and opportunities</li>
        </ul>
        <p className="about-contact">Feel free to contact me for any React.js related projects or collaborations.</p>
      </div>
    </div>
  );
}
