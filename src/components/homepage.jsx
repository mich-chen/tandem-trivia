import React from "react";
import Button from 'react-bootstrap/Button';

function Homepage(props) {
  // update state to start trivia game
  const handleClick = () => {
    fetch('/api/questions')
    .then(res => res.json())
    .then(data => props.setQuestions(data))
    .then(props.setStartGame(true));
  };

  return (
    <div className="homepage">
      <h1>Welcome to Tandem Trivia For 400!</h1>
      <Button className="start-game"
              data-testid="start-btn"
              onClick={handleClick}> 
        Start Trivia! 
      </Button>
    </div>
      );
}

export default Homepage;