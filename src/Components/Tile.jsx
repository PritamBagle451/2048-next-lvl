export default function Tile({
  cell,
  index,
  colors,
  firstTile,
  onClick,
}){
    return(<>
      <div
            key={index}
            onClick={onClick}
            id="tile"
            className={`
               rounded-lg
               w-14 h-14
               sm:w-16 sm:h-16
               md:w-20 md:h-20
               text-xl
               sm:text-2xl
               md:text-3xl  
               font-bold 
               flex 
               justify-center 
               items-center 
               ${colors[cell]||bg-black} 
               ${cell!==0 ? "hover:scale-105 transition-transform duration-150" : ""}
                ${cell!==0?"pop":""} 
                ${firstTile &&
                firstTile.row === Math.floor(index/4) &&
                firstTile.col === index%4
                ? "ring-4 ring-purple-500"
                : ""
                }`} > 
                {cell==0? "":cell} 
     </div>
    
    </>)
}