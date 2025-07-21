//import { useState } from 'react'

//const Display = props => <div>{props.value}</div>

//const Button = (props) => (
//  <button onClick={props.onClick}>
//    {props.text}
//  </button>
//)
//
//const App = () => {
//  const [value, setValue] = useState(10)

//  const setToValue = newValue => {
//    console.log('value now', newValue)
//    setValue(newValue)
//  }

//  return (
//    <div>
//      <Display value={value} />
//      <Button onClick={() => setToValue(1000)} text="thousand" />
//      <Button onClick={() => setToValue(0)} text="reset" />
//      <Button onClick={() => setToValue(value + 1)} text="increment" />
//    </div>
//  )
//}

//export default App 


import { useState } from 'react'

const Button = (props) => (
  <button onClick={props.onClick}>
    {props.text}
  </button>
)

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1> GIVE FEEDBACK </h1>
      <Button onClick={() => setGood(good + 1)} text="Good" />
      <Button onClick={() => setNeutral(neutral + 1)} text="Neutral" />
      <Button onClick={() => setBad(bad + 1)} text="Bad"/>
      <h1> Stats </h1>
      <p>Good {good}</p>
      <p>Neutral {neutral}</p>
      <p>Bad {bad}</p>
    </div>
  )
}

export default App