
const App = ({initialButtonText, initialColor}) => {

  const [buttonText, setButtonText] = React.useState(initialButtonText)
  console.log(buttonText)
  const [color, setColor] = React.useState(initialColor)

  const changeButtonText = () => {
      setButtonText("Hello from React")
      setColor("green-btn")
  }
  
  return (
    <div className="app">
      <button className={color} id="my-button" onClick={changeButtonText}>
        {buttonText}
      </button>
    </div> 
  )
}


const container = document.getElementById("app")
const root = ReactDOM.createRoot(container)
root.render(<App 
  initialButtonText = "Click me"
  initialColor = ""
  />)