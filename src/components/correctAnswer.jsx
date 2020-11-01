import React from "react";

function CorrectAnswer(props) {
  return (
    <div data-testid="correct-answer" className="correct-answer">
      Correct Answer is: {props.answer}
    </div>
    );
}

export default CorrectAnswer;