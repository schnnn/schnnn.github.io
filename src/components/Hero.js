import React from 'react';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-content">
        <div className="hero-emoji">👟🏀</div>
        <h1>AIR JORDAN</h1>
        <h2>The Greatest Legend in Basketball History</h2>
        <p>바스켓볼의 역사를 바꾼 마이클 조던의 아이콘 신발들을 만나보세요</p>
        <div className="hero-stats">
          <div className="stat">
            <span className="stat-number">6</span>
            <span className="stat-label">NBA Champions</span>
          </div>
          <div className="stat">
            <span className="stat-number">5</span>
            <span className="stat-label">MVP Awards</span>
          </div>
          <div className="stat">
            <span className="stat-number">∞</span>
            <span className="stat-label">Legacy</span>
          </div>
        </div>
      </div>
      <div className="hero-background"></div>
    </div>
  );
};

export default Hero;
