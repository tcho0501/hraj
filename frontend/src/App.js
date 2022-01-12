import logo from "./logo.svg";
import "./App.css";
import io from "socket.io-client";
import { useState } from "react";

function App() {
  const [socket, setSocket] = useState(null);

  const handleClick = () => {
    console.log("handling click");
    const socket = io("http://localhost:3000", {
      withCredentials: true,
    });
    setSocket(socket);
  };

  const handleEmit = () => {
    console.log(socket);
    socket.emit("hello", {});
  };

  if (socket) {
    socket.on("connect", () => {
      console.log(socket.connected); // true
    });
  }

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={handleClick}>connect</button>
        {socket ? (
          <>
            <button onClick={handleEmit}>Emit</button>
          </>
        ) : null}
      </header>
    </div>
  );
}

export default App;
