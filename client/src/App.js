import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react'

function App() {
  const [message, setMessage] = useState("Loading...")
  useEffect(() => {
    fetch("http://localhost:8080/api/home")
    .then(result => result.json())
    .then(data => setMessage(data.message))
  })
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {message}
        </p>
      </header>
    </div>
  );
}

export default App
