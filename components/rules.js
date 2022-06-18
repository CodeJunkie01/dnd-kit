const rules = (coordinatesNew, coordinatesOld, pieceId, board) => {
  const xOld = parseInt(coordinatesOld.x);
  const yOld = parseInt(coordinatesOld.y);
  const xNew = parseInt(coordinatesNew.x);
  const yNew = parseInt(coordinatesNew.y);
  const difx = xOld - xNew;
  const dify = yOld - yNew;
  const pieceType = pieceId.split("_")[0];
  const pieceColor = pieceId.split("_")[1];
  const valid = true;
  return (
    checkMove(
      xOld,
      xNew,
      yOld,
      yNew,
      difx,
      dify,
      pieceType,
      pieceColor,
      valid,
      board
    ) &&
    checkWay(
      xOld,
      xNew,
      yOld,
      yNew,
      difx,
      dify,
      pieceType,
      pieceColor,
      valid,
      board
    ) &&
    noOwnPiece(xNew, yNew, pieceColor, board)
  );
};

const checkMove = (
  xOld,
  xNew,
  yOld,
  yNew,
  difx,
  dify,
  pieceType,
  pieceColor,
  valid,
  board
) => {
  if (pieceType === "pawn") {
    if (pieceColor === "black") {
      if (yOld === yNew && xOld + 1 === xNew && board[xNew][yNew] === "") {
        return valid;
      } else if (
        yOld === yNew &&
        xOld + 2 === xNew &&
        xOld === 1 &&
        board[xNew][yNew] === ""
      ) {
        return valid;
      } else if (
        yOld === yNew + 1 &&
        xOld + 1 === xNew &&
        board[xNew][yNew] !== ""
      ) {
        return valid;
      } else if (
        yOld === yNew - 1 &&
        xOld + 1 === xNew &&
        board[xNew][yNew] !== ""
      ) {
        return valid;
      } else {
        return !valid;
      }
    } else if (pieceColor === "white") {
      if (yOld === yNew && xOld - 1 === xNew && board[xNew][yNew] === "") {
        return valid;
      } else if (
        yOld === yNew &&
        xOld - 2 === xNew &&
        xOld === 6 &&
        board[xNew][yNew] === ""
      ) {
        return valid;
      } else if (
        yOld - 1 === yNew &&
        xOld - 1 === xNew &&
        board[xNew][yNew] !== ""
      ) {
        return valid;
      } else if (
        yOld + 1 === yNew &&
        xOld - 1 === xNew &&
        board[xNew][yNew] !== ""
      ) {
        return valid;
      } else {
        return !valid;
      }
    }
  }
  if (pieceType === "rook") {
    if (yOld === yNew && xOld !== xNew) {
      return valid;
    } else if (xOld === xNew && yOld !== yNew) {
      return valid;
    } else {
      return !valid;
    }
  }
  if (pieceType === "knight") {
    if (yOld === yNew + 1 && xOld === xNew + 2) {
      return valid;
    } else if (yOld === yNew + 1 && xOld === xNew - 2) {
      return valid;
    } else if (yOld === yNew - 1 && xOld === xNew + 2) {
      return valid;
    } else if (yOld === yNew - 1 && xOld === xNew - 2) {
      return valid;
    } else if (yOld === yNew + 2 && xOld === xNew + 1) {
      return valid;
    } else if (yOld === yNew + 2 && xOld === xNew - 1) {
      return valid;
    } else if (yOld === yNew - 2 && xOld === xNew + 1) {
      return valid;
    } else if (yOld === yNew - 2 && xOld === xNew - 1) {
      return valid;
    } else {
      return !valid;
    }
  }
  if (pieceType === "bishop") {
    if (dify === difx || dify === -difx) {
      return valid;
    } else {
      return !valid;
    }
  }
  if (pieceType === "queen") {
    if (dify === difx || dify === -difx || (yOld === yNew && xOld !== xNew)) {
      return valid;
    } else if (xOld === xNew && yOld !== yNew) {
      return valid;
    } else {
      return !valid;
    }
  }
  if (pieceType === "king") {
    if (dify <= 1 && difx <= 1 && dify >= -1 && difx >= -1) {
      return valid;
    } else {
      return !valid;
    }
  }
};

const checkWay = (
  xOld,
  xNew,
  yOld,
  yNew,
  difx,
  dify,
  pieceType,
  pieceColor,
  valid,
  board
) => {
  if (pieceType === "knight") {
    return valid;
  }
  const move = "";
  if (difx === 0 || dify === 0) {
    move = "straight";
  } else {
    move = "diagonal";
  }
  if (move === "straight") {
    if (difx < 0 || dify < 0) {
      for (let i = xOld + 1; i < xNew; i++) {
        if (board[i][yOld] !== "") {
          return !valid;
        }
      }
      for (let i = yOld + 1; i < yNew; i++) {
        if (board[xOld][i] !== "") {
          return !valid;
        }
      }
    } else if (difx > 0 || dify > 0) {
      console.log("bigger");
      for (let i = xOld - 1; i > xNew; i--) {
        if (board[i][yOld] !== "") {
          return !valid;
        }
      }
      for (let i = yOld - 1; i > yNew; i--) {
        if (board[xOld][i] !== "") {
          return !valid;
        }
      }
    }
    return valid;
  }
  if (move === "diagonal") {
    const xSteps = difx / Math.abs(difx);
    const ySteps = dify / Math.abs(dify);
    for (let i = 1; i < Math.abs(difx); i++) {
      if (board[xOld - i * xSteps][yOld - i * ySteps] !== "") {
        return !valid;
      }
    }
    return valid;
  }
};

const noOwnPiece = (xNew, yNew, pieceColor, board) => {
  if (board[xNew][yNew].split("_")[1] === pieceColor) {
    console.log("own piece: " + board[xNew][yNew]);
    return false;
  }
  return true;
};
export default rules;
