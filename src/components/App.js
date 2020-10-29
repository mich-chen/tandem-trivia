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
  console.log('questions', questions);
  console.log('results', results);

  return (
    <div className="App">
      {!startGame && !endGame ? <Homepage setStartGame={setStartGame}
                                          setQuestions={setQuestions} /> 
       : !startGame && endGame ? <Results results={results}
                                          setStartGame={setStartGame}
                                          setEndGame={setEndGame}
                                          setResults={setResults} /> 
       : questions.length !==0 ? <QuestionsContainer questions={questions}
                             results={results}
                             setResults={setResults}
                             setStartGame={setStartGame}
                             setEndGame={setEndGame} />
                    : 'Loading...'
              }

    </div>
  );
}

export default App;
