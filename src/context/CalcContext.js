import React, { createContext, useState } from 'react';

export const CalcContext = createContext();

export const CalcProvider = ({ children }) => {
  const [totalPoints, setTotalPoints] = useState(0);
  const maxPoints = 100; // Or whatever your max points should be

  const addPoints = (points) => {
    setTotalPoints(prevPoints => prevPoints + points);
  };

  const resetPoints = () => {
    setTotalPoints(0);
  }

  return (
    <CalcContext.Provider value={{ totalPoints, addPoints, maxPoints, resetPoints }}>
      {children}
    </CalcContext.Provider>
  );
};

export default CalcProvider