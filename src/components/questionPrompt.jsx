import React from "react";

function Question(props) {
  const { question } = props.current;
  return (
    <div className="question">
      {props.number}. {question}
    </div>
    );
}

export default Question;