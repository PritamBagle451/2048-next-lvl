export default function GameStatus({
  isOver,
  isWon,
  reset,
  continueGame
}) {
  return (
    <>
      {isOver && (
  <div className="flex flex-col fixed inset-0 items-center gap-4 mt-50 backdrop-blur(10px) p-6 rounded-2xl  ">
    <div className="text-6xl">
      😵
    </div>
    <h2 className="text-3xl font-bold text-red-500">
      Game Over!
    </h2>
    <p className="text-gray-700 text-center">
      No more moves left.
      <br />
      Better luck next time! 🎮
    </p>
    <button
      onClick={reset}
      className="
        bg-amber-800
        hover:bg-amber-400
        hover:text-amber-900
        text-white
        px-6
        py-3
        rounded-xl
        font-bold
        transition-all
        border-2 border-amber-800
      "
    >
      🔄 Play Again
    </button>
  </div>
)}{isWon && (
  <div className="
    fixed inset-0
    flex items-center justify-center
    bg-black/30
    z-50
  ">
    <div className="
      from-yellow-200
      to-yellow-400
      p-8
      rounded-3xl
      
      text-center
      
    ">
      <div className="text-7xl mb-3">
        🎉🏆
      </div>

      <h1 className="text-4xl font-bold text-yellow-900">
        You Win!
      </h1>

      <p className="mt-3 text-lg text-yellow-800">
        You reached 2048! 🚀
      </p>

      <div className="flex gap-4 justify-center mt-6">
        <button
          onClick={() => continueGame()}
          className="
            bg-green-500
            hover:bg-green-600
            text-white
            px-5 py-3
            rounded-xl
            font-bold
          "
        >
          ▶ Continue
        </button>

        <button
          onClick={reset}
          className="
            bg-yellow-700
            hover:bg-yellow-800
            text-white
            px-5 py-3
            rounded-xl
            font-bold
          "
        >
          🔄 Restart
        </button>
      </div>
    </div>
  </div>
)}
    </>
  );
}