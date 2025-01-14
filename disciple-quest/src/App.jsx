import { useState } from "react";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import "./app.css";

function App() {
  const [username, setUsername] = useState("Emmanuel");

  return (
    <div className="app">
      {username ? (
        <Home username={username} />
      ) : (
        <Login setUsername={setUsername} />
      )}
    </div>
  );
}

export default App;
