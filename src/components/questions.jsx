import React from "react";
import { Button, ButtonGroup } from 'react-bootstrap';
import ToggleButton from 'react-bootstrap/ToggleButton';

import MultipleChoices from './multipleChoice.jsx';

function Question(props) {
  const { question } = props.current;
  return (
    <div>
      {props.number}. {question}
    </div>
    );
}


function CorrectAnswer(props) {
  return (
    <div>
      {props.answer}
    </div>
    );
}


function QuestionsContainer(props) {
  const { questions, results, setResults, setStartGame, setEndGame } = props;
  const [currentQ, setCurrentQ] = React.useState(questions[0]);
  const [currentNum, setCurrentNum] = React.useState(1);
  const [asked, setAsked] = React.useState([0]);
  const [selected, setSelected] = React.useState('');
  const [showAnswer, setShowAnswer] = React.useState(false);
  const [showColor, setShowColor] = React.useState(false);

  const submitAnswer = () => {
    if (selected === currentQ.correct) {
      alert('correct answer!');
      // increment total correct answers
      setResults(results + 1);
    } else {
      alert('wrong!')
    };
    setShowAnswer(true);
    setShowColor(true)
  };

  const handlePrev = () => {
    console.log('prev')
  };

  const handleNext = () => {
    // hide correct answer, reset colors, increase current Number
    setShowAnswer(false);
    setShowColor(false);
    setCurrentNum(currentNum + 1);
    // move idx for array of questions
    let idx = currentNum;
    setCurrentQ(questions[idx]);
    let new_asked = asked;
    setAsked(new_asked.concat(idx))
  };

  const handleFinish = () => {
    setStartGame(false);
    setEndGame(true)
  };

  return (
    <div>
      <Question current={currentQ}
                number={currentNum} />

      <br />

      <MultipleChoices current={currentQ}
                       selected={selected}
                       setSelected={setSelected}
                       showColor={showColor} />

      <br />
      
      <Button variant='primary'
              onClick={submitAnswer}
              disabled={asked.length === 11}>
        Submit
      </Button>

      <br />

      {showAnswer ? <CorrectAnswer answer={currentQ.correct}/> : null}

      <br />

      {currentNum !== 1 
        ? <Button onClick={handlePrev}> Previous Question </Button>
        : null}
      
      {currentNum === 10
        ? null
        : <Button onClick={handleNext}> Next Question </Button>}

      <br />
      
      {currentNum === 10 && showAnswer 
        ? <Button onClick={handleFinish}> See Score! </Button>
        : null }
    </div>
  );
}

export default QuestionsContainer;