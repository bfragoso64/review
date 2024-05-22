// App.js
import "./App.css";
import React from "react";
import VideoPlayer from "./VideoPlayer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={require("./unnamed.png")} className="App-logo" alt="logo" />
        <p className="title">CCRN & PCCN Review</p>
        <a
          className="App-link"
          href="https://www.dropbox.com/scl/fo/slp5qzush6kk8rwxmd50n/h?rlkey=d5wn5kf1utt0rk3r75602aenj&e=2&dl=0"
          target="_blank"
          rel="noopener noreferrer"
        >
          An electronic copy of the PDF handouts (2 slides & 6 slides per page)
          and AACN’s latest exam handbooks.
        </a>
      </header>
      <div className="div2">
  
        <VideoPlayer  />
       
      </div>
    </div>
  );
}

export default App;
