import { useContext } from 'react'
import { CalcContext } from '../context/CalcContext'

const Button = ({ value }) => {
  const { addPoints } = useContext(CalcContext);

  const handleClick = () => {
    addPoints(value.points);
  };

  return (
    <button onClick={handleClick} className="button">
      <img src={value.img} alt={value.label} />  
      <span>{value.label}</span>  
    </button>
  );
};

export default Button