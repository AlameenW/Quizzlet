import { useState } from "react";
import "./App.css";
import questions from "./questions";
import QuizCard from "./components/QuizCard";
function App() {
  const [activeCard, setActiveCard] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [answerStyle, setanswerStyle] = useState('')
  const handleNext = () => {
    let nextCard;
    setUserAnswer('');
    setanswerStyle('');
    if (activeCard == questions.length - 1) return;
    else {
      nextCard = activeCard + 1;
      setActiveCard(nextCard);
    }
  };
  const handleBack = () => {
    let prevCard;
    setUserAnswer('');
    setanswerStyle('');
    if (activeCard == 0) return;
    else {
      prevCard = activeCard - 1;
      setActiveCard(prevCard);
    }
  };
  const normalize = (str) => {
    const normalized = str.trim().toLowerCase().replace(/[^\w\s]/gi, '');
    return normalized;
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if (normalize(userAnswer) == normalize(questions[activeCard].answer.toLowerCase()))
      setanswerStyle('correct');
    else setanswerStyle('wrong');
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

      <div className="form-container">
        <form>
          <label htmlFor="uer-answer">Guess the answer: </label>
          <input
            className={answerStyle}
            type="text"
            id="user-answer"
            name="user-answer"
            value={userAnswer}
            onChange={(e) => {
              setUserAnswer(e.target.value);
            }}
            placeholder="Place your answer here"
          />
          <button
            onClick={handleSubmit}
          >
            Submit Guess
          </button>
        </form>
      </div>

      <div className="button-container">
        <button
          className="back-button"
          onClick={handleBack}
          disabled={activeCard == 0 ? true : false}
        >
          Back
        </button>
        <button
          className="forward-button"
          onClick={handleNext}
          disabled={activeCard == questions.length - 1 ? true : false}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
