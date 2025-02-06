import "./App.css"
import Navbar from "./components/Navbar"
import Maindiv from "./components/Maindiv"

function App() {
  return (
    <div className="bg-gray-200 min-h-screen w-full">
      <Navbar></Navbar>
      <Maindiv></Maindiv>
    </div>
  )
}

export default App
