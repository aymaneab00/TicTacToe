import { useState } from "react";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Board />
    </div>
  );
}
function Header() {
  return (
    <div className="Header">
      <h1>Tic Tac Toe </h1>
      <p>Play with your friend 1v1😚 </p>
    </div>
  );
}

export default App;
function Carre({ value, click }) {
  return (
    <button className="carre" onClick={click}>
      {value}
    </button>
  );
}
function Board() {
  const [carees, setcarees] = useState(Array(9).fill(null));
  const [isX, setisX] = useState(true);
  function handleclick(i) {
    if (calculerWinner(carees) || carees[i]) {
      return;
    }
    carees[i] = isX ? "X" : "O";
    setcarees(carees);
    setisX(!isX);
  }
  const winner = calculerWinner(carees);
  let status;
  if (winner) {
    status = `Winner on the game : ${winner}`;
  } else {
    if(carees.every(c=>c)) {
      status = 'draw'
        }
      
    else  status = `next player turn : ${isX ? "X" : "O"}`;
  };
  
  // if (!winner && isFull(carees)) {
  //   status = "draw😀";
  // } 

  // function isFull(Array) {
  //   for (let i = 0; i < Array.length; i++) {
  //     if (Array[i] === null || Array[i] === undefined) {
  //       return false;
  //     }
  //     return true;
  //   }
  // }
  function restart() {
    setcarees(Array(9).fill(null));
    setisX(true);
  }
  return (
    <div className="board">
      <div className="row">
        <Carre value={carees[0]} click={() => handleclick(0)} />
        <Carre value={carees[1]} click={() => handleclick(1)} />
        <Carre value={carees[2]} click={() => handleclick(2)} />
      </div>
      <div className="row">
        <Carre value={carees[3]} click={() => handleclick(3)} />
        <Carre value={carees[4]} click={() => handleclick(4)} />
        <Carre value={carees[5]} click={() => handleclick(5)} />
      </div>
      <div className="row">
        <Carre value={carees[6]} click={() => handleclick(6)} />
        <Carre value={carees[7]} click={() => handleclick(7)} />
        <Carre value={carees[8]} click={() => handleclick(8)} />
      </div>

      <p>{status}</p>
      <button onClick={restart} className={status==='draw' ? "btn-hover color-9" :"button-8"}>
        Restart the game
      </button>
    </div>
  );
}
function calculerWinner(carees) {
  const winningpatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
 
 for (let i=0;i<winningpatterns.length;i++){
  const [a,b,c]=winningpatterns[i];
  if (carees && carees[a]===carees[b]&&carees[a]===carees[c]){
    return carees[a]
  }
 
 }
 return null
}

 
 