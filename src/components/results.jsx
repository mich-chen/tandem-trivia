import React from "react";
import Button from 'react-bootstrap/Button';

function Results(props) {
  const { results, setResults, setStartGame, setEndGame } = props;
  const handleClick = () => {
    setEndGame(false);
    setStartGame(true);
    setResults(0)
  }

  return (
    <div>
      <h2> Congratulations! </h2>
      <h3> You got {results} out of 10 correct! </h3>

      <br />

      <Button onClick={handleClick}>
        Click here to play again!
      </Button>
    </div>
  );
}

export default Results;