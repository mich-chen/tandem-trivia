import React from "react";

function CorrectAnswer(props) {
  return (
    <div className="correct-answer">
      Correct Answer is: {props.answer}
    </div>
    );
}

export default CorrectAnswer;