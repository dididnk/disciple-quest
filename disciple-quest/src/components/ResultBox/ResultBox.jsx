import React from "react";
import "./result-box.css";

export default function ResultBox({
  username,
  nbGoodAnswer,
  numberQuestions,
  yourLevel,
  restartGame,
}) {
  return (
    <div className="result-box-container">
      <div className="result-box-content">
        <div className="title">
          <h1>Résultat</h1>
        </div>
        <div className="details">
          <p>
            Bonjour, <b>{username}</b>
          </p>
          <p>
            Votre niveau actuel est de <b>{nbGoodAnswer}/{numberQuestions}</b> soit un total de <b>({Math.floor((nbGoodAnswer / numberQuestions) * 100)}%)</b>
          </p>
          <p>
            Cela correspond à {" "}
            <b>
              {yourLevel.title} {yourLevel.badge}
            </b>
          </p>
          <blockquote>{yourLevel.content}</blockquote>
        </div>
        <div className="action">
          <button
           onClick={() => restartGame()}>
            Recommencer une partie
          </button>
        </div>
      </div>
    </div>
  );
}
