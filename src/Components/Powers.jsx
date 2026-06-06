export default function Powers({
  undo,
  prevBoard,
  undoUsed,
  eraseUsed,
  swapUsed,
  setEraseMode,
  setSwapMode,
  setFirstTile,
}) {
  return (
    <div className="flex gap-3 flex-wrap justify-center my-4 px-3 rounded-xl">
      <div className="flex gap-3 flex-wrap justify-center my-4   px-3 rounded-xl">
  <button
    onClick={undo}
    disabled={!prevBoard||undoUsed}
    
   className=" bg-[#edd8bdbf]
    border-2 border-[#bbada0]
            text-[#643407]
            hover:text-white
            hover:border-none
            font-bold
            disabled:opacity-50
            disabled:cursor-not-allowed
            disabled:hover:scale-100
            px-6
            py-3
            rounded-lg
            hover:bg-[#7d6a58]
            hover:scale-105
            active:scale-95
            transition-all
            duration-200 "
  >
    {undoUsed ? "Undo Used" : "↩️ Undo"}
  </button>
  <button
  disabled={eraseUsed}
  
    onClick={() => setEraseMode(true)}
     className=" bg-[#edd8bdbf]
    border-2 border-[#bbada0]
            text-[#643407]
            hover:text-white
            hover:border-none
            font-bold
            px-6
            py-3
            rounded-lg
            disabled:opacity-50
            disabled:cursor-not-allowed
            disabled:hover:scale-100
            hover:bg-[#7d6a58]
            hover:scale-105
            active:scale-95
            transition-all
            duration-200"
  >
    {eraseUsed ? "Erase Used" : "🧹 Erase"}
  </button>
  <button
  disabled={swapUsed}
    onClick={() => {
        setSwapMode(true);
        setFirstTile(null);
    }}
    className=" bg-[#edd8bdbf]
    border-2 border-[#bbada0]
            text-[#643407]
            hover:text-white
            disabled:opacity-50
            disabled:cursor-not-allowed
            disabled:hover:scale-100
            hover:border-none
            font-bold
            px-6
            py-3
            rounded-lg
            hover:bg-[#7d6a58]
            hover:scale-105
            active:scale-95
            transition-all
            duration-200"
>
   {swapUsed ? "Swap Used" : "🔄 Swap Tiles"}
</button>
</div> 
    </div>
  );
}