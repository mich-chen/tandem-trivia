import React from "react";
import './App.css';

import Homepage from './homepage.jsx';
import QuestionsContainer from './questions.jsx';

function App() {
  const [startGame, setStartGame] = React.useState(false);
  const [questions, setQuestions] = React.useState([]);

  // retrieve questions data and cache as state
  React.useEffect(() => {
    console.log('in App useEffect');
    fetch('/api/questions')
    .then(res => res.json())
    .then(data => setQuestions(data))
  }, []);

  return (
    <div className="App">
      {!startGame ? <Homepage setStartGame={setStartGame}/>
                  : <QuestionsContainer questions={questions}/>
              }
    </div>
  );
}

export default App;
