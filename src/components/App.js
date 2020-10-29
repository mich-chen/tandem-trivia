import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Homepage from './homepage.jsx';
import QuestionsContainer from './questions.jsx';
import Results from './results.jsx';

function App() {
  const [startGame, setStartGame] = React.useState(false);
  const [questions, setQuestions] = React.useState([]);
  const [endGame, setEndGame] = React.useState(false);
  const [results, setResults] = React.useState(0);
  console.log('results', results);

  // retrieve questions data and cache as state
  React.useEffect(() => {
    console.log('in App useEffect');
    fetch('/api/questions')
    .then(res => res.json())
    .then(data => setQuestions(data))
  }, []);

  return (
    <div className="App">
      {!startGame && !endGame ? <Homepage setStartGame={setStartGame} /> 
       : !startGame && endGame ? <Results results={results}/> 
       : <QuestionsContainer questions={questions}
                             results={results}
                             setResults={setResults}
                             setStartGame={setStartGame}
                             setEndGame={setEndGame} />
              }

    </div>
  );
}

export default App;
