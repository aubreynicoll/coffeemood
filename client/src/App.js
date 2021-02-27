import React from 'react'

const App = () => {
  return (
    <div className="App-root">
      <div className="App-audio-container">
        <audio controls>
          <source src="./audio_sample.mp3" type="audio/mpeg" />
          <track kind="captions" />
        </audio>

      </div>
    </div>
  )
}

export default App
