import React from "react";
import Button from 'react-bootstrap/Button';

function Homepage() {
  const handleClick = () => {
    alert('hello, button successfully clicked!');
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