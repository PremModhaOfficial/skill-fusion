import { useState } from 'react'
import './App.css'



function App() {
  const [count, setCount] = useState(0)

  fetch('http://localhost:8000')
    // .then(data => data.json())
    .then(data => console.log(data))
    .catch(e => console.log(e))

  return (
    <div className='card'>
      <h1>FrontEnd</h1>

      <button onClick={() => setCount(count + 1)} >
        {`count: ${count}`}
      </button>

    </div>
  )
}

export default App
