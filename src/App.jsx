import { useState } from "react";
import "./App.css";
import questions from "./questions";
import QuizCard from "./components/QuizCard";
function App() {

  return (
    <div>
      <h1>The React Quiz</h1>
      <p>How proficient are you with React? Test your knowledge here!</p>
      <p>Number of cards: {questions.length}</p>
      
      <QuizCard question={questions[0].question} answer={questions[0].answer}></QuizCard>
      
      <div className="button-container">
        <button className="forward-button">Back</button>
        <button className="back-button">Next</button>
      </div>
    </div>
  );
}

export default App;
