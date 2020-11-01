import React from "react";
import Button from 'react-bootstrap/Button';

function Results(props) {
  const { results, setResults, setQuestions, setEndGame } = props;
  const handleClick = () => {
    setQuestions([]);
    setEndGame(false);
    setResults(0)
  }

  return (
    <div className="results">
      <h2> Congratulations! </h2>
      <h3> You got {results} out of 10 correct! </h3>

      <br />

      <Button className="play-again" 
              data-testid="play-again"
              onClick={handleClick}>
        Click here to play again!
      </Button>
    </div>
  );
}

export default Results;