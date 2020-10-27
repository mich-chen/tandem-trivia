import React from "react";
import './App.css';

import Homepage from './homepage.jsx';
import QuestionsContainer from './questions.jsx';

function App() {
  const [startGame, setStartGame] = React.useState(false);

  return (
    <div className="App">
      {!startGame ? <Homepage setStartGame={setStartGame}/>
                  : <QuestionsContainer />
              }
    </div>
  );
}

export default App;
