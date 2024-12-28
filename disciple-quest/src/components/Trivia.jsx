/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import useSound from "use-sound";
import play from "../assets/sounds/play.mp3";
import correct from "../assets/sounds/correct.mp3";
import wrong from "../assets/sounds/wrong.mp3";
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
  const [letsPlay] = useSound(play);
  const [correctAnswer] = useSound(correct);
  const [wrongAnswer] = useSound(wrong);

  useEffect(() => {
    letsPlay();
  }, [letsPlay]);

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

    delay(2000, () =>
      setClassName(a.correct ? "answer correct" : "answer wrong")
    );

    delay(5000, () => {
      if (a.correct) {
        if (questionNumber < data.length) {
          correctAnswer();
          delay(1000, () =>{
            setQuestionNumber((prev) => prev + 1)
            setSelectedAnswer(null)
          });
        } else {
          delay(1000, () =>{
            setStop(true);
          });
        }
      } else {
        wrongAnswer();
        delay(1000, () =>{
          setStop(true);
        });
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
