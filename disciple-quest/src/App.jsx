import { useEffect, useState } from "react";
import "./app.css";
import Trivia from "./components/Trivia";
import { randomQuizQuestions, levels } from "./db/data-base";

function App() {
  const data = randomQuizQuestions;
  const [questionNumber, setQuestionNumber] = useState(1);
  const [stop, setStop] = useState(false);
  const [yourLevel, setYourLevel] = useState(0);

  const levelList = levels;

  useEffect(() => {
    questionNumber > 1 && setYourLevel(levelList.find((l) => l.id === questionNumber - 1).content);
  }, [levelList, questionNumber]);

  return (
    <div className="app">
      <div className="main">
        {stop ? (
          <h1 className="endText">Ton niveau actuel est {yourLevel}</h1>
        ) : (
          <>
            <div className="top">
              <div className="timer">30</div>
            </div>
            <div className="bottom">
              <Trivia
                data={data}
                setStop={setStop}
                questionNumber={questionNumber}
                setQuestionNumber={setQuestionNumber}
              />
            </div>
          </>
        )}
      </div>
      <div className="pyramid">
        <ul className="levelList">
          {levelList.map((level) => (
            <li
              className={
                questionNumber === level.id
                  ? "levelListItem active"
                  : "levelListItem"
              }
            >
              <span className="levelListItemNumber">{level.id}</span>
              <span className="levelListItemContent">{level.content}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
