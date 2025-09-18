import React, { useContext } from 'react';
import { CalcContext } from '../context/CalcContext';

function ResetButton() {
  const { resetPoints } = useContext(CalcContext);

  const handleReset = () => {
    resetPoints();
  }
  return (
    <div className='center-button'>
    <button className='btn btn-primary' onClick={handleReset}>
      Reset
    </button>
    </div>
  );
}

export default ResetButton