import { useState } from "react";
import "./App.css";
import questions from "./questions";
import QuizCard from "./components/QuizCard";
function App() {
  const [activeCard, setActiveCard] = useState(0);
  const handleNext = () => {
    let nextCard;
    if (activeCard == questions.length - 1) return;
    else {
      nextCard = activeCard + 1;
      setActiveCard(nextCard);
    }
  };
  const handleBack = () => {
    let prevCard;
    if (activeCard == 0) return;
    else {
      prevCard = activeCard - 1;
      setActiveCard(prevCard);
    }
  };
  return (
    <div>
      <h1>The React Quiz</h1>
      <p>How proficient are you with React? Test your knowledge here!</p>
      <p>Number of cards: {questions.length}</p>

      <QuizCard
        key={activeCard}
        question={questions[activeCard].question}
        answer={questions[activeCard].answer}
        category={questions[activeCard].category}
      ></QuizCard>

      <div className="button-container">
        <button
          className="back-button"
          onClick={handleBack}
          disabled={activeCard == 0? true: false}
        >
          Back
        </button>
        <button
          className="forward-button"
          onClick={handleNext}
          disabled={activeCard == questions.length-1? true: false}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
