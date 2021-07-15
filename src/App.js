import React, { useState } from "react";
import Icon from "./Components/Icon";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Button } from 'reactstrap';
import "./style.css";

function App() {

  const ticTacArray = new Array[9].fill("");

  let [isCross, setIsCross] = useState(true);
  let [winMessage, setWinMessage] = useState("");


  const playAgain = () => {
    setIsCross(true);
    ticTacArray.fill("");
    setWinMessage("");
  }

  let check = (isCross) ? "cross" : "circle"
  const winningMessage = () => {
    if(ticTacArray[0] === ticTacArray[1] === ticTacArray[2] === check) {
      setWinMessage("You win")
    } else if(ticTacArray[3]=== ticTacArray[4]=== ticTacArray[5] === check) {
      setWinMessage("You win")
    } else if(ticTacArray[6] === ticTacArray[7] === ticTacArray[8] === check) {
      setWinMessage("You win")
    } else if(ticTacArray[0] === ticTacArray[3] === ticTacArray[6] === check) {
      setWinMessage("You win")
    } else if(ticTacArray[1] === ticTacArray[4] === ticTacArray[7]) {
      setWinMessage("You win")
    } else if(ticTacArray[2] === ticTacArray[5] === ticTacArray[8]) {
      setWinMessage("You win")
    } else if(ticTacArray[0] === ticTacArray[4] === ticTacArray[8]) {
      setWinMessage("You win")
    } else if(ticTacArray[2] === ticTacArray[4] === ticTacArray[6]) {
      setWinMessage("You win")
    } 
    else {
      setWinMessage("You lose")
    }
  }


  return (
    <div className="App">
      <h1>Welcome to TicTacToe.</h1>
      <Icon choice="circle"/>
    </div>
  );
}

export default App;
