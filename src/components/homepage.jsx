import React from "react";
import Button from 'react-bootstrap/Button';

function Homepage(props) {
  // update state to start trivia game
  const handleClick = () => {
    props.setStartGame(true);
  };

  return (
    <div>
      <h1>Welcome to Tandem Trivia For 400!</h1>
      <Button onClick={handleClick}> Start Trivia! 
      </Button>
    </div>
      );
}

export default Homepage;