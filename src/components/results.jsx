import React from "react";

function Results(props) {
  return (
    <div>
      <h2> Congratulations! </h2>
      <h3> You got {props.results} out of 10 correct! </h3>
    </div>
  );
}

export default Results;