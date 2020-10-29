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
  const [asked, setAsked] = React.useState(0);
  const [showAnswer, setShowAnswer] = React.useState(false);
  const [showColor, setShowColor] = React.useState(false);

  // reset states at each question
  React.useEffect(() => {
    console.log('in use effect');
    setShowAnswer(false);
    setShowColor(false);
    setSelected('');
  },[currentQ]);

  const submitAnswer = () => {
    // new property to track whether submitted and selected choice
    currentQ.submitted = selected;
    // increment results if selected correct answer
    if (selected === currentQ.correct) {
      setResults(results + 1);
    };
    // reveal answer and color indication
    setShowAnswer(true);
    setShowColor(true);
    setAsked(asked + 1)
  };

  const handlePrev = () => {
    // set states to be previous question
    let idx = currentNum - 1; 
    setCurrentNum(idx);
    // zero-indexing in arrays, - 1 to index into questions array
    setCurrentQ(questions[idx - 1]); 
    // if previous question was answered, then update state
    questions[idx-1].submitted ? setSelected(questions[idx-1].submitted) : setSelected('');
  };

  const handleNext = () => {
    // because zero-indexing, next question's is current number
    setCurrentQ(questions[currentNum]);
    setCurrentNum(currentNum + 1);
  };

  const handleFinish = () => {
    if (asked !== 10) {
      alert('You must answer all questions to see score!')
    } else {
      setStartGame(false);
      setEndGame(true)
    }
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
              disabled={(showAnswer || currentQ.submitted) || !selected}>
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
      
      {currentNum === 10 
        ? <Button onClick={handleFinish}> See Score! </Button>
        : null }
    </div>
  );
}

export default QuestionsContainer;