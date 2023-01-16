import { useState } from "react"
import './App.css'

function App() {
  const [counter, setCounter] = useState(0)
  const incrementCounter = (increment) => setCounter(counter+increment)

  return (
    <div className="App">
      <Button handleClick={incrementCounter} increment={1} />
      <Button handleClick={incrementCounter} increment={5} />
      <Button handleClick={incrementCounter} increment={10} />
      <Button handleClick={incrementCounter} increment={100} />
      <Display counter={counter} />
    </div>
  )
}

function Button(props){
  // must pass function reference
  const onClickFunction = () => {props.handleClick(props.increment)} 
  return (
    <button onClick={onClickFunction}>
      +{props.increment}
    </button>
  )
}

function Display(props){
  return (
    <div>
      {props.counter}
    </div>
  )
}

export default App
