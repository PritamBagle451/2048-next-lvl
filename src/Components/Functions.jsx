import React from "react"
import { left, right, up, down, gameOver, RandomSpawn } from "./GameLogic"

export default function useFunction (){
  const [board, setBoard] = React.useState(
  Array(4).fill().map(() => Array(4).fill(0)))

   const [isOver,setIsOver]=React.useState(false)
   React.useEffect(() => {
    let newBoard = Array(4).fill().map(() => Array(4).fill(0))
    RandomSpawn(newBoard)
    RandomSpawn(newBoard)
    setBoard(newBoard)
    }, [])

    let [score,setScore]=React.useState(0)
    const [prevBoard, setPrevBoard] = React.useState(null)
    const [prevScore, setPrevScore] = React.useState(0)

    function savePreviousState(oldBoard) {
    setPrevBoard(oldBoard.map(row => [...row]))
    setPrevScore(score)
    }

    function undo() {
    if (!prevBoard) return
    setBoard(prevBoard.map(row => [...row]))
    setScore(prevScore)
    setIsOver(false)
    setWon(false)
    setPrevBoard(null)
     setUndoUsed(true)
    }
    
 function move(directionFn, isVertical = false) {
    const originalBoard = board.map(row => [...row])
    const oldBoard = JSON.stringify(board)
    let newBoard = board.map(row => [...row])
    let gainedScore = 0
    if (!isVertical) {
        for (let row = 0; row < 4; row++) {
            const result = directionFn([...newBoard[row]])
            gainedScore += result.gained
            for (let col = 0; col < 4; col++) {
                newBoard[row][col] = result.arr[col]
            }
        }
    } else {
        for (let col = 0; col < 4; col++) {
            const currentCol = [];
            for (let row = 0; row < 4; row++) 
                currentCol.push(newBoard[row][col])
            
            const result = directionFn(currentCol)
            gainedScore += result.gained;
            for (let row = 0; row < 4; row++) {
                newBoard[row][col] = result.arr[row]
            }
        }
    }
    if (JSON.stringify(newBoard) !== oldBoard) {
        savePreviousState(originalBoard)
        setScore(prev => prev + gainedScore)
        RandomSpawn(newBoard)
        setBoard(newBoard)
    }
    setIsOver(gameOver(newBoard))
    setWon(won(newBoard))
}
    const moveLeft = () => move(left)
    const moveRight = () => move(right)
    const moveUp = () => move(up, true)
    const moveDown = () => move(down, true)
    React.useEffect(()=>{
    function handleKey(e){
        if(e.key==="ArrowLeft")moveLeft()
        if(e.key==="ArrowRight")moveRight()
        if(e.key==="ArrowDown")moveDown()
        if(e.key==="ArrowUp")moveUp()
    }
     window.addEventListener("keydown", handleKey)
    return () => window.removeEventListener("keydown", handleKey)
    },[board]);
    const [bestScore,setBestScore]=React.useState(0)
    React.useEffect(() => {
  setBestScore(
    Number(localStorage.getItem("bestScore"))||0)
    }, []);
   React.useEffect(()=>{
     if(score > bestScore){
        setBestScore(score)
        localStorage.setItem("bestScore", score)
    }
   }, [score, bestScore])
    function reset(){
        const newBoard=Array(4).fill().map(()=>Array(4).fill(0))
        RandomSpawn(newBoard)
        RandomSpawn(newBoard)
        setBoard(newBoard)
        setScore(0)
        setIsOver(false)
        setWon(false)
        setHasWon(false)
        setUndoUsed(false)
        setEraseUsed(false)
        setSwapUsed(false)
    }
    const [hasWon, setHasWon] = React.useState(false);
    const [isWon,setWon]=React.useState(false)
    function won(board){
         if(hasWon) return false
        const newBoard=board.map((prev)=> [...prev])
        for(let  i=0;i<4;i++){
            for(let j=0;j<4;j++){
                if(newBoard[i][j]===2048){
                    setHasWon(true)
                    return true
                    }
            }
        }
        return false
    }
    const [eraseMode, setEraseMode] = React.useState(false)
    const [swapMode, setSwapMode] = React.useState(false)
    const [firstTile, setFirstTile] = React.useState(null)

    const touchStartX = React.useRef(0)
    const touchStartY = React.useRef(0)

    function handleTouchStart(e) {
        touchStartX.current = e.touches[0].clientX
        touchStartY.current = e.touches[0].clientY
    }
    function handleTouchEnd(e) {
        const endX = e.changedTouches[0].clientX
        const endY = e.changedTouches[0].clientY

        const dx = endX - touchStartX.current
        const dy = endY - touchStartY.current

        const threshold = 30;
        if (Math.abs(dx) > Math.abs(dy)) {
            if (dx > threshold) moveRight()
            else if (dx < -threshold) moveLeft()
        } else {
            if (dy > threshold) moveDown()
            else if (dy < -threshold) moveUp()
        }

    }
    const [eraseUsed, setEraseUsed] = React.useState(false)
    const [swapUsed, setSwapUsed] = React.useState(false)
    const [undoUsed, setUndoUsed] = React.useState(false)
        function handleTileClick(index,cell){       
        if (eraseMode && cell !== 0) {
            const newBoard = board.map(r => [...r])
            const row = Math.floor(index / 4)
            const col = index % 4
            newBoard[row][col] = 0
            setBoard(newBoard)
            setEraseMode(false)
            setEraseUsed(true)
            return;
        }
        if (swapMode && cell !== 0) {
            const row = Math.floor(index / 4)
            const col = index % 4
            if (!firstTile) {
                setFirstTile({ row, col })
                return
            }
            if (
                firstTile.row === row &&
                firstTile.col === col
            ) {
                return
            }
            const newBoard = board.map(r => [...r])
            const { row: r1, col: c1 } = firstTile
            const temp = newBoard[r1][c1]
            newBoard[r1][c1] = newBoard[row][col]
            newBoard[row][col] = temp
            setBoard(newBoard)
            setFirstTile(null)
            setSwapMode(false)
            setSwapUsed(true)
            return;
            }   
        }
        return {
        board,
        score,
        bestScore,
        isOver,
        isWon,
        setWon,
        moveLeft,
        moveRight,
        moveUp,
        moveDown,
        undo,
        reset,
        handleTouchStart,
        handleTouchEnd,
        handleTileClick,
        prevBoard,
        eraseMode,
        swapMode,
        undoUsed,
        eraseUsed,
        swapUsed,
        setEraseMode,
        setSwapMode,
        setFirstTile,
        firstTile
        }
        }