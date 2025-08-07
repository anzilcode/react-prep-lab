import { useState } from "react"


const Test = () => {

  const [grid,setGrid] = useState(Array(9).fill(null))
  const [role,setRole] = useState(true)
  const [winner,setWinner] = useState(null)
  

  const winningPattern = (newgrid) => {
    const patterns =[
      [0,1,2],[3,4,5],[6,7,8],
      [0,3,6],[1,4,7],[2,5,8],
      [0,4,8],[2,4,6]
    ]

    for(let pattern of patterns){
      let [a,b,c] = pattern
      if(newgrid[a] && newgrid[a] === newgrid[b]  && newgrid[a] === newgrid[c]){
        return newgrid[a]
      }
      if(!newgrid.includes(null)){
        return 'Draw'
      }
    }
    return null
  }


  

  function handleGrid(id){
    if(grid[id]!==null || winner) return 
      let newGrid = [...grid]
      newGrid[id] = role ? 'X' : 'O'
      setGrid(newGrid)
      let result = winningPattern(newGrid)
      if(result){
        setWinner(result)
      }
      setRole(!role)

  }

  const resetGame = () => {
    setGrid(Array(9).fill(null))
    setRole(true)
    setWinner(null)
  }


  return (
    <div className="flex flex-col space-y-3 justify-center items-center min-h-screen">
    <h1 className="text-2xl font-extrabold">Tic tac Toe</h1>
    <h2 className="text-xl">
       {winner ? (winner === 'Draw' ? 'It\'s a Draw!' : `Winner: ${winner}`) : `Turn: ${role ? 'X' : 'O'}`}
    </h2>
    <button onClick={resetGame} className="bg-red-500 text-xl font-bold px-4 py-3 text-white">Reset</button>
      <div className="grid grid-cols-3">
        {
          grid.map((box,index)=>{
            return <div key={index} onClick={()=>handleGrid(index)} className="h-20 w-20 bg-gray-300 border flex justify-center items-center">
              <p>{box}</p>
            </div>
          })
        }
      </div>
    </div>
  )
}

export default Test
