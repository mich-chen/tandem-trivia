import React from "react";

function Question(props) {
  const { question } = props.current;
  return (
    <div className="question" data-testid="question">
      {props.number}. {question}
    </div>
    );
}

export default Question;