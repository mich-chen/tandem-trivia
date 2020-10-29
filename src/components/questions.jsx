import React from "react";
import { Button, ButtonGroup } from 'react-bootstrap';
import ToggleButton from 'react-bootstrap/ToggleButton';

function Question(props) {
  const { question } = props.current;
  return (
    <div>
      {props.number}. {question}
    </div>
    );
}


function MultipleChoices(props) {
  const { choices } = props.current;
  console.log('choices', choices);
  let { selected, setSelected } = props;
  const [shuffled, setShuffled] = React.useState([]);

  // shuffle multiple choice answers
  React.useEffect(() => {
    let new_shuffled = choices.slice(0);
    // start at len(choices)
    for (let i = 3; i > 0; i--) {
      let idx = Math.floor(Math.random() * (i + 1));
      [new_shuffled[i], new_shuffled[idx]] = [new_shuffled[idx], new_shuffled[i]];
    };
    setShuffled(new_shuffled)
  },[choices]);

  return (
    <ButtonGroup toggle>
      {shuffled.map((answer) => 
        <ToggleButton key={shuffled.indexOf(answer)}
                      type='radio'
                      name='radio'
                      value={answer}
                      checked={selected === answer}
                      onChange={(e) => {setSelected(e.target.value)}}
                      >
          {answer}
        </ToggleButton>
    )}
    </ButtonGroup>
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

  const submitAnswer = () => {
    if (selected === currentQ.correct) {
      alert('correct answer!');
      // increment total correct answers
      setResults(results + 1);
    } else {
      alert('wrong!')
    };
    setShowAnswer(true)
  };

  const handlePrev = () => {
    console.log('prev')
  };

  const handleNext = () => {
    // hide correct answer for next question
    setShowAnswer(false);
    // increase current number
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
                       setSelected={setSelected} />

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