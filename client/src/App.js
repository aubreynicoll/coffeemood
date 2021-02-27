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
    </div>
  )
}

export default App
