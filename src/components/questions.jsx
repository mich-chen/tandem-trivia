import React from "react";
import { Button, ToggleButton } from 'react-bootstrap';
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
  const { choices } = props.current;
  let { selected, setSelected } = props;
  console.log('check if rerender');

  const handleClick = (e, ans) => {
    setSelected(ans)
  };

  return (
    <ul>
      {choices.map((answer) => 
        <ToggleButton key={choices.indexOf(answer)}
                      type='radio'
                      name='radio'
                      value={answer}
                      checked={selected === answer}
                      onClick={(e) => {handleClick(e, answer)}}
                      >
          {answer}
        </ToggleButton>)
      }
    </ul>
    );
}


function QuestionsContainer(props) {
  // const data = JSON.parse(JSON.stringify(jsonData));
  const { questions } = props;
  const [currentQ, setCurrentQ] = React.useState({});
  const [asked, setAsked] = React.useState([]);
  const [selected, setSelected] = React.useState('');
  console.log('current', currentQ);
  console.log('asked', asked);

  const submitAnswer = () => {
    if (selected === currentQ.correct) {
      alert('correct answer!')
    } else {
      alert('wrong!')
    };
  };

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
      <MultipleChoices current={currentQ}
                       selected={selected}
                       setSelected={setSelected} />
      <Button onClick={submitAnswer}>
        Submit
      </Button>
    </div>
      );
}

export default QuestionsContainer;