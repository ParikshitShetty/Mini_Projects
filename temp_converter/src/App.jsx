import { useState } from 'react'
import './App.css'

function App() {
  const [celsius, setCelsius] = useState(0);
  const [fahrenheit,setFahrenheit] = useState(32);

  const handleCelsiusChange = (event) =>{
    setCelsius(event.target.value);
    setFahrenheit(event.target.value * (9/5) +32);
  }

  const handleFahrenheitChange = (event) =>{
    setFahrenheit(event.target.value);
    setCelsius((event.target.value - 32) * (5/9));
  }

  return (
    <>
      <div>
        <span>
          <input type='text' value={celsius} onChange={handleCelsiusChange}/>
          <label htmlFor=""> Celsius = </label>
        </span>
        <span>
          <input type='text' value={fahrenheit} onChange={handleFahrenheitChange}/>
          <label htmlFor=""> Fahrenheit</label>
        </span>
      </div>
    </>
  )
}
export default App