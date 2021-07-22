import { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import io from "socket.io-client";

const socket = io.connect("/");
console.log(socket);

function App() {
  const userName = "Tommy";
  const room = "Chat";
  const handelClick = () => {
    socket.emit("test", {
      userName,
      room,
    });
  };

  useEffect(() => {
    socket.on("message", (message) => {
      console.log(message);
    });
  }, []);
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
        <button onClick={handelClick}>Connect</button>
      </header>
    </div>
  );
}

export default App;
