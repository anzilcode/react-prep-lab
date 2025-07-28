import { useState } from "react"

const Counter = () => {
  const [history, setHistory] = useState([0])
  const [position, setPosition] = useState(0)
  const currentValue = history[position]

  const addValueToHistory = (newValue) => {
    const newHistory = history.slice(0, position + 1)
    setHistory([...newHistory, newValue])
    setPosition(position + 1)
  }

  const handleIncrement = () => {
    addValueToHistory(currentValue + 1)
  }

  const handleDecrement = () => {
    addValueToHistory(currentValue - 1)
  }

  const handleUndo = () => {
    if (position > 0) {
      setPosition(position - 1)
    }
  }

  const handleRedo = () => {
    if (position < history.length - 1) {
      setPosition(position + 1)
    }
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-white">
      <div className="flex flex-col items-center gap-5 p-8 rounded-2xl shadow-xl
      bg-gradient-to-bl from-[#ffe4e6] to-[#ccfbf1]">
        <div className="text-7xl font-bold">
          <h1>{currentValue}</h1>
        </div>

        <div className="flex gap-4 text-white">
          <button 
            onClick={handleDecrement} 
            className="bg-red-500 hover:bg-red-600 rounded-lg px-4 py-2 font-bold">
            Decrement -
          </button>
          <button 
            onClick={handleIncrement} 
            className="bg-red-500 hover:bg-red-600 rounded-lg px-4 py-2 font-bold">
            Increment +
          </button>
        </div>

        <div className="flex gap-4 items-center text-white">
          <button 
            onClick={handleUndo} 
            className="bg-red-500 hover:bg-red-600 rounded-lg px-4 py-2 font-bold">
            Undo
          </button>
          <h1 className="text-2xl text-black">{position + 1} / {history.length}</h1>
          <button 
            onClick={handleRedo} 
            className="bg-red-500 hover:bg-red-600 rounded-lg px-4 py-2 font-bold">
            Redo
          </button>
        </div>
      </div>
    </div>
  )
}

export default Counter
