import React from "react";
import { useMemo, useState, useEffect } from "react";
import { getQuiz } from "../../api/quizApi";
import { getGameLevels } from "../../api/gameLevelApi";
import Trivia from "../../components/Trivia/Trivia";
import "./home.css";
import ResultBox from "../../components/ResultBox/ResultBox";

export default function Login({ username }) {
  const MAX_LEVEL = 12
  const [questions, setQuestions] = useState(getQuiz(1));
  const gameLevels = useMemo(() => getGameLevels(), []);

  const [questionNumber, setQuestionNumber] = useState(1);
  const [nbGoodAnswer, setNbGoodAnswer] = useState(0);
  const [stop, setStop] = useState(false);
  const [yourLevel, setYourLevel] = useState(
    gameLevels.find((l) => l.id === MAX_LEVEL)
  );

  useEffect(() => {
    nbGoodAnswer >= 0 &&
      setYourLevel(gameLevels.find((l) => l.id === MAX_LEVEL - nbGoodAnswer));
  }, [gameLevels, nbGoodAnswer]);

  const restartGame = () => {
    setYourLevel(gameLevels.find((l) => l.id === MAX_LEVEL));
    setQuestionNumber(1);
    setQuestions(getQuiz(1));
    setStop(true);
  };

  function quizIsFinished() {
    if (stop === false && questionNumber === questions.length) {
      return true;
    }
  }

  return (
    <div className="home-container">
      {quizIsFinished() ? (
        <ResultBox
          username={username}
          nbGoodAnswer={nbGoodAnswer}
          numberQuestions={questions.length}
          yourLevel={yourLevel}
          restartGame={restartGame}
        />
      ) : (
        <div className="home-content">
          <Trivia
            questions={questions}
            nbGoodAnswer={nbGoodAnswer}
            setStop={setStop}
            questionNumber={questionNumber}
            setQuestionNumber={setQuestionNumber}
            setNbGoodAnswer={setNbGoodAnswer}
          />
          <div className="sidebar">
            <h2>Bonjour, {username}</h2>
            <p>
              <strong>Niveau du jeux : </strong>
              <span>1</span>
            </p>
            <p>
              <strong>Badge : </strong>
              <span>{(gameLevels.find((l) => l.id === MAX_LEVEL)).badge}</span>
            </p>
            <p>
              <strong>Description : </strong>
              <span>{(gameLevels.find((l) => l.id === MAX_LEVEL)).content}</span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
