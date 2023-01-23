import './App.css';
import {useState} from 'react';
import Counter from './components/Counter';
import Button from './components/Button';

const texts = [
  "Click me",
  "Click me please",
  "Hit me",
  "Press me",
  "123",
  "421"
]

function App() {
  const [count,setCount] = useState(0)
  const incrementCounter = () => {
    setCount(count + 1)
  }
  return (
    <div className="App">
      <Counter count={count} />
      {texts.map((item) => { 
        return (
        <Button
          key={item}
          text={item}
          onClick={incrementCounter} /> )
              }
            )
          }
      {/* <Button text="Click me" onClick={incrementCounter} />
      <Button text="Click me please" onClick={incrementCounter} />
      <Button text="Hit me" onClick={incrementCounter} />
      <Button text="Press me" onClick={incrementCounter} /> */}
    </div>
  )
}

export default App;
