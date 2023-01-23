import './App.css';
import {useState} from 'react';
import Counter from './components/Counter';
import Button from './components/Button';
import Reset from './components/Reset';
function App() {
  const [count,setCount] = useState(0)
  console.log(count)
  const incrementCounter = () => {
    setCount(count + 1)
  }
  const resetCounter = () => {
    setCount(0)
  }

  return (
    <div className="App">
      <Counter count={count} />
      <Button onClick={incrementCounter} />
      <Button onClick={incrementCounter} />
      <Button onClick={incrementCounter} />
      <Button onClick={incrementCounter} />
      {count > 0 && (
        <Reset
        onClick={resetCounter}
        />
      )
    }
    </div>
  )
}

export default App;
