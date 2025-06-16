import questions from "../questions";
import { useState } from "react";
const QuizCard = ({ key, question, answer, category }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };
  return (
    <div className="flip-card" onClick={handleCardClick}>
      <div className={`flip-card-inner ${isFlipped ? "flipped" : ""}`}>
        <div className="flip-card-front">
          Category: {category}
          <br /> {question}
        </div>
        <div className="flip-card-back">{answer}</div>
      </div>
    </div>
  );
};

export default QuizCard;
