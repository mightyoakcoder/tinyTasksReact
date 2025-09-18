import React from 'react';
import { CalcProvider } from './context/CalcContext';
import Wrapper from "./components/Wrapper";
import TotalPoints from "./components/TotalPoints";
import ButtonBox from "./components/ButtonBox";
import Button from "./components/Button";
import ResetButton from "./components/ResetButton";
import "./index.css";
import ProgressBar from "./components/ProgressBar";
import 'bootstrap/dist/css/bootstrap.min.css';

const btnValues = [
  [{ img: './images/brushingTeeth.jpeg', points: 10, label: 'Brush Teeth - 10 pts' }],
  [{ img: './images/pickingUp.jpeg', points: 20, label: 'Pick Up Toys - 20 pts' }],
  [{ img: './images/sweeping.jpeg', points: 15, label: 'Sweep - 15 pts' }],
  [{ img: './images/vacuuming.jpeg', points: 30, label: 'Vacuum - 30 pts' }],
  [{ img: './images/takingOutTrash.jpeg', points: 30, label: 'Take Out Trash - 30 pts' }],
];

function App() {
  return (
    <div className="App">
      <CalcProvider>
        <ProgressBar />
        <TotalPoints />
          <Wrapper>
          <ButtonBox>
            {btnValues.flat().map((btn, i) => (
              <Button value={btn} key={i} />
            ))}
          </ButtonBox>
        </Wrapper>
        <ResetButton />
      </CalcProvider>
    </div>
  );
}

export default App;
