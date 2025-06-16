import { useState } from 'react'
import './App.css'

function App() {

  return (
    <div>
      <h1>The React Quiz</h1>
      <p>How proficient are you with React? Test your knowledge here!</p>
      <p>Number of cards: </p>

      <div>
        Cards displayed here!
        {/* Card displayed here */}
      </div>

      <div className='button-container'>
        <button className="forward-button">Back</button>
        <button className="back-button">Next</button>
      </div>
    </div> 
  )
}

export default App
