import React from "react"
import GameStatus from "./Components/GameStatus"
import GameHeader from "./Components/GameHeader"
import Tile from "./Components/Tile"
import Powers from "./Components/Powers"
import Footer from "./Components/Footer"
 const colors = {
  0: "bg-[#edd8bdbf]",
  2: "bg-[#eee4da]",
  4: "bg-[#ede0c8]",
  8: "bg-[#e6c75fce]",
  16: "bg-[#f59563]",
  32: "bg-[#f67c5f]",
  64: "bg-[#f65e3b]",
  128: "bg-[#edcf72]",
  256: "bg-[#edcc61]",
  512: "bg-[#edc850]",
  1024: "bg-[#edc53f]",
2048: "bg-[#edc22e]",
4096: "bg-purple-500",
8192: "bg-pink-500",
16384: "bg-red-500",
    };
import useFunction from "./Components/Functions"
export default function Board(){
  const game = useFunction()
    return (
        <>
         <div className="min-h-screen flex flex-col bg-amber-50">
          
      <GameHeader score={game.score} bestScore={game.bestScore} reset={game.reset}/>
       <main className="flex-1">
        <div className=" flex flex-col gap-4 font-bold items-center justify-center ">
           <div className=" rounded-2xl p-3"   
            style={{ backgroundColor: "rgba(114, 84, 65, 0.75)" }}
            onTouchStart={game.handleTouchStart}
            onTouchEnd={game.handleTouchEnd}>
        <div className="grid grid-cols-4 gap-3" >
          {game.board.flat().map((cell,index)=>(
              <Tile
                key={index}
                cell={cell}
                index={index}
                colors={colors}
                firstTile={game.firstTile}
                onClick={() => game.handleTileClick(index, cell)}
            />
          ))}
                </div>
            </div>
        </div>

        <GameStatus
            isOver={game.isOver}
            isWon={game.isWon}
            reset={game.reset}
            continueGame={() => game.setWon(false)}
            className="w-[90%] max-w-md mx-auto"
        />
         <Powers
            undo={game.undo}
            prevBoard={game.prevBoard}
            undoUsed={game.undoUsed}
            eraseUsed={game.eraseUsed}
            swapUsed={game.swapUsed}
            setEraseMode={game.setEraseMode}
            setSwapMode={game.setSwapMode}
            setFirstTile={game.setFirstTile}
            />
        </main>
        <Footer/>
        </div>
</>
    )
}