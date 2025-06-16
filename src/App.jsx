import { useState } from "react";
import "./App.css";
import questions from "./questions";
import QuizCard from "./components/QuizCard";
function App() {
  const [activeCard, setActiveCard] = useState(0);
  const handleNext = () => {
    let nextCard;
    if (activeCard == questions.length - 1)
      setActiveCard(0);
    else{
      nextCard = activeCard + 1;
      setActiveCard(nextCard);
    }
  }
  const handleBack = () => {
    let prevCard;
    if (activeCard == 0)
      setActiveCard(questions.length-1);
    else{
      prevCard = activeCard - 1;
      setActiveCard(prevCard);
    }
  }
  return (
    <div>
      <h1>The React Quiz</h1>
      <p>How proficient are you with React? Test your knowledge here!</p>
      <p>Number of cards: {questions.length}</p>
      
      <QuizCard question={questions[activeCard].question} answer={questions[activeCard].answer}></QuizCard>

      <div className="button-container">
        <button className="forward-button" onClick={handleBack}>Back</button>
        <button className="back-button" onClick={handleNext}>Next</button>
      </div>
    </div>
  );
}

export default App;
