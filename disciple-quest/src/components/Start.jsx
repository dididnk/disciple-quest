import { useRef, useState, useEffect } from "react";
import "../styles/start.css";
import useSound from "use-sound";
import theme from "../assets/sounds/theme.mp3";

export default function Start({ setUsername }) {
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
      setErrorMessage("Veuillez entrer un prénom d'au moins 3 caractères svp");
    } else {
      setUsername(trimmedValue);
      setErrorMessage("");
    }
  };

  return (
    <div className="start-container">
      <div className="start-content">
        <span className="title">Quel est votre prénom ?</span>
        <input
          placeholder="Entrez votre prénom"
          className="input-name"
          ref={inputRef}
        />
        <button className="btn-start" onClick={handlerClick}>
          Commencer
        </button>
        {errorMessage && <p className="error">{errorMessage}</p>}
      </div>
    </div>
  );
}
