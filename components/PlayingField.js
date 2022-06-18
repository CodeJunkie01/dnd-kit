import { display } from "@mui/system";
import React, { useId } from "react";
import { useState, useEffect } from "react";
import AvatarField from "./AvatarField/AvatarField";
import { DndContext } from "@dnd-kit/core";
import rules from "./rules";

export default function PlayingField() {
  const [playingField, setPlayingField] = useState(setupField(field));
  const [player, setPlayer] = useState("white");

  const updateUserPlacement = (coordinates, pieceId) => {
    const validMove = true;
    const newField = playingField.map((row, index) => {
      const rowIndex = index;
      return row.map((cell, index) => {
        if (cell === pieceId) {
          if (
            rules(coordinates, { x: rowIndex, y: index }, pieceId, playingField)
          ) {
            return (row[index] = "");
          } else {
            console.log(
              coordinates.x +
                coordinates.y +
                "to" +
                rowIndex +
                index +
                "is not a valid move for " +
                pieceId
            );
            validMove = false;
            return row[index];
          }
        } else {
          return row[index];
        }
      });
    });
    if (validMove) {
      newField[coordinates.x][coordinates.y] = pieceId;
      setPlayer(player === "white" ? "black" : "white");
    }
    setPlayingField(newField);
  };
  const style = {
    display: "flex",
  };

  const handleDragEnd = (event) => {
    const { over, active } = event;
    if (over === null || active.id.split("_")[1] !== player) {
      return;
    }
    const idNumbers = Array.from(over.id);
    console.log(idNumbers);
    const x = idNumbers[0];
    const y = idNumbers[1];
    updateUserPlacement({ x, y }, active.id);
  };

  const style2 = {
    boxShadow: "30px 30px 30px rgba(0, 0, 0, 0.5)",
    margin: "50px",
    paddingRight: "50px",
    backgroundImage:
      "url(https://images.pexels.com/photos/6331040/pexels-photo-6331040.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "20px",
  };

  const style3 = {
    margin: "100px",
  };

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div style={style3}>
        {playingField.map((row, y) => {
          return (
            <div key={y} style={style}>
              {row.map((cell, indexKey) => {
                return (
                  <div key={indexKey}>
                    <AvatarField
                      avatars={[cell]}
                      id={`${y}${indexKey}`}
                      key={`av${y}${indexKey}`}
                    ></AvatarField>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </DndContext>
  );
}
const setupField = (field) => {
  for (let i = 0; i < field.length; i++) {
    console.log(i);
  }
  return field;
};
const field = [
  [
    "rook_black_1",
    "knight_black_1",
    "bishop_black_1",
    "king_black_1",
    "queen_black_1",
    "bishop_black_2",
    "knight_black_2",
    "rook_black_2",
  ],
  [
    "pawn_black_1",
    "pawn_black_2",
    "pawn_black_3",
    "pawn_black_4",
    "pawn_black_5",
    "pawn_black_6",
    "pawn_black_7",
    "pawn_black_8",
  ],
  new Array(8).fill(""),
  new Array(8).fill(""),
  new Array(8).fill(""),
  new Array(8).fill(""),
  [
    "pawn_white_1",
    "pawn_white_2",
    "pawn_white_3",
    "pawn_white_4",
    "pawn_white_5",
    "pawn_white_6",
    "pawn_white_7",
    "pawn_white_8",
  ],
  [
    "rook_white_1",
    "knight_white_1",
    "bishop_white_1",
    "queen_white_1",
    "king_white_1",
    "bishop_white_2",
    "knight_white_2",
    "rook_white_2",
  ],
];
