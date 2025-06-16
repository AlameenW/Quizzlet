import { useState } from "react";
import "./App.css";
import questions from "./questions";
function App() {
  const [isFlipped, setIsFlipped] = useState(false)
  const handleCardClick = () => {
    setIsFlipped(!isFlipped)
  }
  return (
    <div>
      <h1>The React Quiz</h1>
      <p>How proficient are you with React? Test your knowledge here!</p>
      <p>Number of cards: {questions.length}</p>

      <div className="flip-card" onClick={handleCardClick}>
        <div className={`flip-card-inner ${isFlipped? 'flipped': ''}`}>
          <div className="flip-card-front">{questions[0].question}</div>
          <div className="flip-card-back">{questions[0].answer}</div>
        </div>
      </div>

      <div className="button-container">
        <button className="forward-button">Back</button>
        <button className="back-button">Next</button>
      </div>
    </div>
  );
}

export default App;
