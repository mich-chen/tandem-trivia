import React from "react";
import Button from 'react-bootstrap/Button';

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
      Correct Answer is: {props.answer}
    </div>
    );
}


function QuestionsContainer(props) {
  const { questions, results, setResults, setStartGame, setEndGame } = props;
  const [currentQ, setCurrentQ] = React.useState(questions[0]);
  const [currentNum, setCurrentNum] = React.useState(1);
  const [selected, setSelected] = React.useState('');
  const [showAnswer, setShowAnswer] = React.useState(false);
  const [showColor, setShowColor] = React.useState(false);

  const submitAnswer = () => {
    currentQ.submitted = selected;
    currentQ.correctResult = false;
    if (selected === currentQ.correct) {
      setResults(results + 1);
      currentQ.correctResult = true
    };
    setShowAnswer(true);
    setShowColor(true)
  };

  const handlePrev = () => {
    console.log('prev')
    let idx = currentNum - 1; // previous question number
    setCurrentNum(idx);
    setCurrentQ(questions[idx - 1]) // zero-indexing in arrays, - 1 to idx
  };

  const handleNext = () => {
    // hide correct answer, reset colors, increase current Number
    setShowAnswer(false);
    setShowColor(false);
    let idx = currentNum;
    setCurrentNum(currentNum + 1);
    // move idx for array of questions
    console.log(idx);
    setCurrentQ(questions[idx]);
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

      {currentQ.submitted ? <MultipleChoices current={currentQ}
                       selected={currentQ.submitted}
                       setSelected={setSelected}
                       showColor={true} />
       : <MultipleChoices current={currentQ}
                       selected={selected}
                       setSelected={setSelected}
                       showColor={showColor} />
         }

      <br />
      
      <Button variant='primary'
              onClick={submitAnswer}
              disabled={showAnswer || currentQ.submitted}>
        Submit
      </Button>

      <br />

      {showAnswer || currentQ.submitted ? <CorrectAnswer answer={currentQ.correct}/> : null}

      <br />

      {currentNum !== 1 
        ? <Button onClick={handlePrev}> Previous Question </Button>
        : null}
      
      {currentNum === 10
        ? null
        : <Button onClick={handleNext}> Next Question </Button>}

      <br />
      
      {currentNum === 10 && (showAnswer || currentQ.submitted)
        ? <Button onClick={handleFinish}> See Score! </Button>
        : null }
    </div>
  );
}

export default QuestionsContainer;