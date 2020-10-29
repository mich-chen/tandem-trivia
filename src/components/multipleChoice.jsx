import React from "react";
import {Button, ButtonGroup} from 'react-bootstrap';
import ToggleButton from 'react-bootstrap/ToggleButton';

import './questions.jsx';

function MultipleChoices(props) {
  const { choices, correct, incorrect } = props.current;
  let { selected, setSelected, showColor } = props;
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

  const COLOR = {
    true: 'green',
    false: 'grey'
  }
  const getColor = (option) => {
    // reveal correct option as green
    if (option === correct) {
        return ('green')
    }
    // if selected correct option return green
    if (option === selected && selected === correct) {
        return ('green')
    // if selected option is wrong then return red
    } else if (option === selected && selected !== correct) {
        return ('red')
    // unselected and incorrect choices are grey
    } else { 
        return ('grey')
    }
  }

  return (
    <ButtonGroup toggle>
      {shuffled.map((answer) => 
        <ToggleButton key={shuffled.indexOf(answer)}
                      type='radio'
                      name='radio'
                      value={answer}
                      style={showColor ? {backgroundColor: getColor(answer)} : null}
                      checked={selected === answer}
                      onChange={(e) => {setSelected(e.target.value)}}
                      >
          {answer}
        </ToggleButton>
    )}
    </ButtonGroup>
    );
}

export default MultipleChoices;