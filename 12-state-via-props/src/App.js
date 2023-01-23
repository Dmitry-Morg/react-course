import './App.css';
import {useState} from 'react';
import Counter from './components/Counter';
import Button from './components/Button';
function App() {
  const [count,setCount] = useState(0)
  const incrementCounter = () => {
    setCount(count + 1)
  }
  return (
    <div className="App">
      <Counter count={count} />
      <Button onClick={incrementCounter} />
      <Button onClick={incrementCounter} />
      <Button onClick={incrementCounter} />
      <Button onClick={incrementCounter} />
    </div>
  )
}

export default App;
