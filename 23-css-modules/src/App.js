import './App.css';
import Info from './components/Info';
function App() {
  return (
    <div className="App">
      <Info />
      <div className="info">
        {/* CSS rule fron the info CSS module doesn't work here! */}
        <h1>App component Heading</h1>
        <button className="my-button">App component button</button>
      </div>
    </div>
  )
}
 
export default App;
