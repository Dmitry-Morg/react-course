import './App.css';
import Wrapper from './components/Wrapper';
function App() {
  return (
    <div className="App">
      <Wrapper color="green">
        <h2>Text inside of the Wrapper</h2>
        <button>Click me</button>
      </Wrapper>
      <Wrapper color="lightgreen">
        <h2>Another text</h2>
        <p>som description</p>
        <input type="text" placeholder="Enter value" />
      </Wrapper>
    </div>
  )
}
 
export default App;
