import Rules from "./Rules"
export default function GameHeader({score,bestScore,reset}){
    return (<>
      <div className="
    max-w-4xl
    mt-4
   mx-auto
    px-4
    py-4
">
    <div className="
        flex
        flex-col
        sm:flex-row
        items-center
        justify-between
        gap-4
        sm:gap-48
        w-full
    "><div>
        <h1 className="text-5xl sm:text-6xl font-bold text-[#776e65]">
            2048
        </h1>
        <Rules/>
        </div>
        <div className="flex gap-3">
            <div className="bg-[#bbada0] text-[#643407] px-5 py-3 rounded-lg text-center min-w-22.5">
               
                <p className="text-xs font-bold ">SCORE</p>
                <p className="text-2xl 
                font-bold
                 ">{score}</p>
            </div>

            <div className="bg-[#bbada0] text-[#643407] px-5 py-3 rounded-lg text-center">
                <p className="text-xs font-bold  ">BEST</p>
                <p className="text-2xl font-bold  ">{bestScore}</p>
            </div>
        </div>

        <button
            onClick={reset}
            className="
                shrink-0
                bg-[#8f7a66]
                text-white
                font-bold
                px-6
                py-3
                rounded-lg
                hover:bg-[#7d6a58]
                hover:scale-105
                active:scale-95
                transition-all
            "
        >
            New Game
        </button>

    </div>

    <p className="text-center text-gray-500 mt-3">
        Join the numbers and get to the 2048 tile! 🚀
    </p>

</div>
         
    </>)
}