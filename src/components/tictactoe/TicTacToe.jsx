import useTicTacToe from './use-tic-tac-toe'

function TicTacToe() {
  const { board, handleClick, resetGame, getStatusMessage } = useTicTacToe()

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="flex flex-col items-center gap-4 mb-6">
        <h1 className="text-2xl font-bold text-gray-800">{getStatusMessage()}</h1>
        <button
          className="px-4 py-2 bg-red-500 text-white font-semibold rounded-lg shadow hover:bg-red-600 transition"
          onClick={resetGame}
        >
          Reset Game
        </button>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {board.map((b, index) => {
          return (
            <button
              key={index}
              onClick={() => handleClick(index)}
              disabled={b !== null}
              className={`w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 
                flex items-center justify-center text-4xl font-bold rounded-lg border-2 shadow transition
                ${b === 'X' ? 'text-blue-600 border-blue-400' : ''}
                ${b === 'O' ? 'text-red-600 border-red-400' : ''}
                ${b === null ? 'bg-white hover:bg-gray-200 border-gray-400' : 'bg-gray-100'}
              `}
            >
              {b}
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default TicTacToe
