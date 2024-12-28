import { useRef, useState } from "react";

export default function Start({ setUsername }) {
  const inputRef = useRef();
  const [errorMessage, setErrorMessage] = useState("");

  const handlerClick = () => {
    const trimmedValue = inputRef.current.value.trim();
    if (trimmedValue.length < 3) {
      setErrorMessage("Le pseudo/pseudo doit contenir au moins 3 caractères.");
    } else {
      setUsername(trimmedValue);
      setErrorMessage("");
    }
  };

  return (
    <>
      <div className="start">
      <h3>Veuillez entrer votre pseudo</h3>
        <input
          placeholder="Entrez votre psudo/prénom"
          className="startInput"
          ref={inputRef}
        />
        <button className="startButton" onClick={handlerClick}>Commencer</button>
        {errorMessage && <p className="error">{errorMessage}</p>}
      </div>
    </>
  );
}
