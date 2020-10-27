import React from "react";
import Button from 'react-bootstrap/Button';
import QuestionsContainer from './questions.jsx';

function Homepage() {
  // fetch questions from json to start trivia
  const handleClick = () => {
    alert('hello, button successfully clicked!');
    
  };

  return (
    <div>
      <h1>Welcome to Tandem Trivia For 400!</h1>
      <Button onClick={handleClick}> Start Trivia! 
      </Button>
      <QuestionsContainer />
    </div>
      );
}

export default Homepage;