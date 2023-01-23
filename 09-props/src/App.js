import './App.css';
import Petinfo from './components/Petinfo';
function App() {
  return (
    <div className="App">
      <Petinfo
       animal = {"dog"}
       h = {"3"}
       />
       <Petinfo
       animal = {"cat"}
       age = {"12"}
       />
    </div>
  )
}

export default App;
