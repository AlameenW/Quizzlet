import { useState } from "react";
import "./App.css";
import questions from "./questions";
import QuizCard from "./components/QuizCard";
function App() {
  const [activeCard, setActiveCard] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [answerStyle, setanswerStyle] = useState("");
  const [currentStreak, setCurrentStreak] = useState(0);
  const [longestStreak, setLongestStreak] = useState(0);
  const [answeredCorrectly, setAnsweredCorrectly] = useState(false);
  const handleNext = () => {
    let nextCard;
    setUserAnswer("");
    setanswerStyle("");
    setAnsweredCorrectly(false);
    if (activeCard == questions.length - 1) return;
    else {
      nextCard = activeCard + 1;
      setActiveCard(nextCard);
    }
  };
  const handleBack = () => {
    let prevCard;
    setUserAnswer("");
    setanswerStyle("");
    setAnsweredCorrectly(false);
    if (activeCard == 0) return;
    else {
      prevCard = activeCard - 1;
      setActiveCard(prevCard);
    }
  };
  const normalize = (str) => {
    const normalized = str
      .trim()
      .toLowerCase()
      .replace(/[^\w\s]/gi, "");
    return normalized;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let updatedStreak = currentStreak;
    const isCorrect =
      normalize(userAnswer) ==
      normalize(questions[activeCard].answer.toLowerCase());
    if (isCorrect) {
      setanswerStyle("correct");
      if (!answeredCorrectly) {
        updatedStreak += 1;
        setAnsweredCorrectly(true);
        setCurrentStreak(updatedStreak);
        if (updatedStreak > longestStreak) setLongestStreak(updatedStreak);
      }
    } else {
      setanswerStyle("wrong");
      setCurrentStreak(0);
    }
  };
  return (
    <div>
      <h1>The React Quiz</h1>
      <p>How proficient are you with React? Test your knowledge here!</p>
      <p>Number of cards: {questions.length}</p>

      <div className="streak-div">
        <span>Current streak: {currentStreak} {currentStreak>0?'🔥':''}</span>
        <span>Longest streak: {longestStreak} </span>
      </div>
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
          <button onClick={handleSubmit}>Submit Guess</button>
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
