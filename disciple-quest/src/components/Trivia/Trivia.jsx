import { useEffect, useState } from "react";
import "./trivia.css";
import useSound from "use-sound";
import correct from "../../assets/sounds/correct.mp3";
import wrong from "../../assets/sounds/wrong.mp3";
import React from "react";
import Timer from "../Timer/Timer";

export default function Trivia({
  questions,
  setStop,
  questionNumber,
  setQuestionNumber,
  setNbGoodAnswer,
}) {
  const [question, setQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [resetTrigger, setResetTrigger] = useState(0);
  const [correctAnswer] = useSound(correct);
  const [wrongAnswer] = useSound(wrong);
  const [shuffledAnswers, setShuffledAnswers] = useState([]);

  // Fonction pour mélanger les réponses
  function shuffleArray(array) {
    const shuffled = [...array]; // Crée une copie pour éviter de modifier les données originales
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }

  // Mélange les réponses à chaque fois que la question change
  useEffect(() => {
    if (question?.answers) {
      setShuffledAnswers(shuffleArray(question.answers));
    }
  }, [question]);

  useEffect(() => {
    setQuestion(questions[questionNumber - 1]);
    setResetTrigger((prev) => prev + 1);
    setSelectedAnswer(null);
  }, [questions, questionNumber]);

  const handleAnswerClick = (answer) => {
    setSelectedAnswer(answer);
    // setClassName("answer active");
    // setClassName(answer.isCorrect ? "answer correct" : "answer wrong");

    // Change la classe pour indiquer si la réponse est correcte ou incorrecte
    setTimeout(() => {
      // Joue le son approprié en fonction de la réponse
      if (answer.isCorrect) {
        correctAnswer(); // Joue le son pour une bonne réponse
      } else {
        wrongAnswer(); // Joue le son pour une mauvaise réponse
      }
    }, 100);

    // Passe à la question suivante après un délai total de 1,3 seconde
    setTimeout(() => {
      if (answer.isCorrect) {
        setNbGoodAnswer((prev) => prev + 1); // Incrémente les bonnes réponses
      }
      goToNextQuestion(); // Passe à la question suivante
    }, 2000);
  };

  const handleTimeOut = () => {
    goToNextQuestion();
  };

  const goToNextQuestion = () => {
    if (questionNumber < questions.length) {
      setQuestionNumber((prev) => prev + 1);
    } else {
      setStop(true);
    }
  };

  return (
    <div className="trivia-container">
      <div className="trivia-content">
        <div className="question">{question?.title}</div>
        <div className="timer-question">
          <div className="timer">
            <span>Temps restant : </span>
            <Timer onTimeOut={handleTimeOut} resetTrigger={resetTrigger} />
            <span>s</span>
          </div>
          <div className="nb-question">
            <span>Question {questionNumber}</span> sur {questions.length}
          </div>
        </div>
        <div className="answers">
          {shuffledAnswers.map((a) => (
            <button
              key={a.text}
              className={`answer ${
                selectedAnswer === a ? (a.isCorrect ? "correct" : "wrong") : ""
              }`}
              onClick={() => handleAnswerClick(a)}
              disabled={!!selectedAnswer}
            >
              {a.text}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
