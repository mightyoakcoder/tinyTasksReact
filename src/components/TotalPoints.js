import { useContext } from 'react'
import { CalcContext } from '../context/CalcContext';

const Screen = () => {
  const { totalPoints } = useContext(CalcContext);

  return (
    <div className="screen">
      Total Points: {totalPoints}
    </div>
  );
};

export default Screen