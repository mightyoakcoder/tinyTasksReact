import React, { useEffect, useRef, useContext } from 'react';
import { CalcContext } from '../context/CalcContext'; // Adjust the import path as needed
import '../index';

const ProgressBar = () => {
  const context = useContext(CalcContext);
  const circleRef = useRef(null);
  const numberRef = useRef(null);
  const { totalPoints, maxPoints } = useContext(CalcContext) ?? {};

  useEffect(() => {
    console.log('totalPoints:', totalPoints);
    console.log('maxPoints:', maxPoints);

    const updateProgressBar = () => {
      if (typeof totalPoints !== 'number' || typeof maxPoints !== 'number' || maxPoints === 0) {
        return 0; // or some default value
      }
      let progressValue = (totalPoints / maxPoints) * 100;
      return Math.min(progressValue, 100);
    };

    const updateCircle = (percentage) => {
      if (numberRef.current) {
        numberRef.current.innerHTML = Math.round(percentage) + "%";
      }
      if (circleRef.current) {
        let offset = 439.8 - (439.8 * percentage) / 100;
        circleRef.current.style.strokeDashoffset = offset;
      }
    };

    const updateProgress = () => {
      let progressValue = updateProgressBar();
      updateCircle(progressValue);
    };

    // Initial update
    updateProgress();

    // Update progress every second
    const interval = setInterval(updateProgress, 1000);

    // Cleanup function
    return () => clearInterval(interval);
  }, [totalPoints, maxPoints]);

  return (
    <div className="progress-container">
      <div className="skill">
        <div className="outer">
          <div className="inner">
            <div id="number" ref={numberRef}></div>
          </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
          <defs>
            <linearGradient id="GradientColor">
              <stop offset="0%" stopColor="#e0e34d" />
              <stop offset="100%" stopColor="#e82121" />
            </linearGradient>
          </defs>
          <circle ref={circleRef} cx="80" cy="80" r="70" strokeLinecap="round" />
        </svg>
      </div>
    </div>
  );
};

export default ProgressBar;