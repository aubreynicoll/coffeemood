import React from 'react'

const App = () => {
  return (
    <div className="App-root">
      <div className="App-audio-container">
        <audio controls>
          <source src="/api/audio/cafe.m4a" type="audio/mpeg" />
          <track kind="captions" />
        </audio>
      </div>
      <header>
        <h1>Coffee Mood&trade;</h1>
        <p>
          Café Sounds for Focus &amp; Study
        </p>
      </header>
    </div>
  )
}

export default App
