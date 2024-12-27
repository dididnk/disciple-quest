import { useEffect, useState } from "react";
import React from "react";

export default function Trivia({
  data,
  setStop,
  questionNumber,
  setQuestionNumber,
}) {
  const [question, setQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [className, setClassName] = useState("answer");

  const delay = (duration, callback) => {
    setTimeout(() => {
      callback();
    }, duration);
  };

  useEffect(() => {
    setQuestion(data[questionNumber - 1]);
  }, [data, questionNumber]);

  const handlerClick = (a) => {
    setSelectedAnswer(a);
    setClassName("answer active");

    delay(300, () =>
      setClassName(a.correct ? "answer correct" : "answer wrong")
    );

    delay(600, () => {
      if (a.correct) {
        if (questionNumber < data.length) {
          setQuestionNumber((prev) => prev + 1);
          setSelectedAnswer(null);
        } else {
          setStop(true);
        }
      } else {
        if (questionNumber < data.length) {
          setQuestionNumber((prev) => prev + 1);
          setSelectedAnswer(null);
        } else {
          setStop(true);
        }
      }
    });
  };

  return (
    <div className="trivia">
      <div className="question">{question?.question}</div>
      <div className="answers">
        {question?.answers?.map((a) => (
          <div
            key={a.text}
            className={selectedAnswer === a ? className : "answer"}
            onClick={() => handlerClick(a)}
          >
            {a.text}
          </div>
        ))}
      </div>
    </div>
  );
}
