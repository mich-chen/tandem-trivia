import React from "react";
// import Button from 'react-bootstrap/Button';
// import jsonData from '../Apprentice_TandemFor400_Data.json';

function Question(props) {
  const { question } = props.current;
  return (
    <div>
      {question}
    </div>
    );
}


function MultipleChoices(props) {
  const { choices, correct } = props.current;
  // console.log(typeof(correct));


  const handleClick = (e, ans) => {
    console.log((ans));
    // correct answer turns green (change color)
    if (ans === correct) {
      alert('correct answer!');
       e.target.style.color = 'green'
    } else {
      alert('wrong answer!')
    };
  };

  return (
    <ul>
      {choices.map((answer) => 
        <div key={choices.indexOf(answer)}
             value={answer}
             onClick={(e) => {handleClick(e, answer)}}>
        {answer}
        </div>)
      }
    </ul>
    );
}


function QuestionsContainer(props) {
  // const data = JSON.parse(JSON.stringify(jsonData));
  const { questions } = props;
  const [currentQ, setCurrentQ] = React.useState({});
  const [asked, setAsked] = React.useState([]);
  console.log('current', currentQ);
  console.log('asked', asked);

  // 10 questions for each round of trivia
  for (let i = 0; i < 10; i++) {
    // logic to randomly select a question using index
    let random = questions[Math.floor(Math.random() * questions.length)];
    if (!asked.includes(random)) {
        setCurrentQ(random);
        let new_asked = asked;
        setAsked(new_asked.concat(random))
    };
  };

  return (
    <div>
      <Question current={currentQ} />
      <MultipleChoices current={currentQ} />
    </div>
      );
}

export default QuestionsContainer;