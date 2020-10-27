import React from "react";
// import jsonData from '../Apprentice_TandemFor400_Data.json';

// function Question() {
//   return (
//     );
// }

// function Choice() {

// }

// function MultipleChoices() {

// }

function QuestionsContainer(props) {
  // const data = JSON.parse(JSON.stringify(jsonData));
  const { questions } = props;
  console.log(questions);

  // logic to randomly select a question using index
  let current = questions[Math.floor(Math.random() * questions.length)];
  console.log(current);

  return (
    <div>
      hello
    </div>
      );
}

export default QuestionsContainer;