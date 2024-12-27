import { useState } from "react";
import "./app.css";
import Trivia from "./components/Trivia";
import { randomQuizQuestions } from "./db/data-base";

function App() {
  const data = randomQuizQuestions;
  const [questionNumber, setQuestionNumber] = useState(1);
  const [stop, setStop] = useState(false);

  const levelList = [
    { id: 1, content: "✟ Niveau 1" },
    { id: 2, content: "✟ Niveau 2" },
    { id: 3, content: "✟ Niveau 3" },
    { id: 4, content: "✟ Niveau 4" },
    { id: 5, content: "✟ Niveau 5" },
    { id: 6, content: "✟ Niveau 6" },
    { id: 7, content: "✟ Niveau 7" },
    { id: 8, content: "✟ Niveau 8" },
    { id: 9, content: "✟ Niveau 9" },
    { id: 10, content: "✟ Niveau 10" },
    { id: 11, content: "✟ Niveau 11" },
    { id: 12, content: "✟ Niveau 12" },
  ].reverse();

  return (
    <div className="app">
      <div className="main">
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
