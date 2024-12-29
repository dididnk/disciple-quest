import { useEffect, useMemo, useState } from "react";
import "./styles/app.css";
import Trivia from "./components/Trivia";
import { randomQuizQuestions, levels } from "./db/data-base";
import Timer from "./components/Timer";
import Start from "./components/Start";

function App() {
  const data = randomQuizQuestions;
  const [username, setUsername] = useState("");
  const [questionNumber, setQuestionNumber] = useState(1);
  const [stop, setStop] = useState(false);
  const [yourLevel, setYourLevel] = useState(0);

  const levelList = useMemo(() => levels, []);

  useEffect(() => {
    questionNumber > 1 &&
      setYourLevel(levelList.find((l) => l.id === questionNumber - 1).content);
  }, [levelList, questionNumber]);

  return (
    <div className="app">
      {username ? (
        <>
          <div className="main">
          <h1>Bienvenue, {username}!</h1>
            {stop ? (
              <h1 className="endText">Ton niveau actuel est {yourLevel}</h1>
            ) : (
              <>
                <div className="top">
                  <div className="timer">
                    <Timer setStop={setStop} questionNumber={questionNumber} />
                  </div>
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
        </>
      ) : (
        <Start setUsername={setUsername} />
      )}
    </div>
  );
}

export default App;
