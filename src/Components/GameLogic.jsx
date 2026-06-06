
 export function RandomSpawn(newBoard){
     let empty = [];
     for(let i=0;i<4;i++){
         for(let j=0;j<4;j++){
             if(newBoard[i][j]===0){
                 empty.push([i,j]);
             }
         }
     }
     if(empty.length===0) return newBoard;
     const [row,col] =
         empty[Math.floor(Math.random()*empty.length)];
     newBoard[row][col] = 2;
     return newBoard;
    } 
    
 export function gameOver(board){
     for(let i=0;i<4;i++){
         for(let j=0;j<4;j++){
             if(board[i][j]==0)return false
         }
     }
     for(let i=0;i<4;i++){
         for(let j=0;j<3;j++){
             if(board[i][j]===board[i][j+1])return false
         }
     }
     for(let i=0;i<3;i++){
         for(let j=0;j<4;j++){
             if(board[i][j]===board[i+1][j])return false
         }
     }
     return true
    }
export function left(row) {
  let arr = row.filter(num => num !== 0);
  let gained = 0;

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] === arr[i + 1]) {
      arr[i] *= 2;
      gained += arr[i];
      arr[i + 1] = 0;
    }
  }

  arr = arr.filter(num => num !== 0);

  while (arr.length < 4) {
    arr.push(0);
  }

  return { arr, gained };
}

export function right(row) {
  let arr = row.filter(num => num !== 0);
  let gained = 0;

  for (let i = arr.length - 1; i > 0; i--) {
    if (arr[i] === arr[i - 1]) {
      arr[i] *= 2;
      gained += arr[i];
      arr[i - 1] = 0;
    }
  }

  arr = arr.filter(num => num !== 0);

  while (arr.length < 4) {
    arr.unshift(0);
  }

  return { arr, gained };
}

export function up(col) {
  let arr = col.filter(num => num !== 0);
  let gained = 0;

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] === arr[i + 1]) {
      arr[i] *= 2;
      gained += arr[i];
      arr[i + 1] = 0;
    }
  }

  arr = arr.filter(num => num !== 0);

  while (arr.length < 4) {
    arr.push(0);
  }

  return { arr, gained };
}

export function down(col) {
  let arr = col.filter(num => num !== 0);
  let gained = 0;

  for (let i = arr.length - 1; i > 0; i--) {
    if (arr[i] === arr[i - 1]) {
      arr[i] *= 2;
      gained += arr[i];
      arr[i - 1] = 0;
    }
  }

  arr = arr.filter(num => num !== 0);

  while (arr.length < 4) {
    arr.unshift(0);
  }

  return { arr, gained };
}