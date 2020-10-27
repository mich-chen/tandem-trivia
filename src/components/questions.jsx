import React from "react";
import jsonData from '../Apprentice_TandemFor400_Data.json';

function QuestionsContainer() {
  const data = JSON.parse(JSON.stringify(jsonData));
  console.log(data);
  return (
    <div>
      hello
    </div>
      );
}

// function Question() {
//   return (
//     );
// }

// function Choice() {

// }

// function MultipleChoices() {

// }

export default QuestionsContainer;