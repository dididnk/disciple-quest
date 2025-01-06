import React from "react";
import { useRef, useState, useEffect } from "react";
import useSound from "use-sound";
import theme from "../../assets/sounds/theme.mp3";
import "./login.css";

export default function Login({ setUsername }) {
  const inputRef = useRef();
  const [errorMessage, setErrorMessage] = useState("");
  const [playTheme, { stop }] = useSound(theme, { volume: 0.5 });

  useEffect(() => {
    playTheme();
    return () => {
      stop();
    };
  }, [playTheme, stop]);

  const handlerClick = () => {
    const trimmedValue = inputRef.current.value.trim();
    if (trimmedValue.length < 3) {
      setErrorMessage("Veuillez entrer un prénom d'au moins 3 caractères svp.");
    } else {
      setUsername(trimmedValue);
      setErrorMessage("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handlerClick();
    }
  };
  return (
    <>
      <div className="login-container">
        <div className="login-content">
          <span className="title">Quel est votre prénom ❓</span>
          <input
            placeholder="Entrez votre prénom"
            className="input-name"
            ref={inputRef}
            onKeyDown={handleKeyDown}
          />
          <button className="btn-start" onClick={handlerClick}>
            Commencer
          </button>
          {errorMessage && <p className="error">{errorMessage}</p>}
        </div>
      </div>
    </>
  );
}
