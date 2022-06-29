import React from "react";
import { useDroppable } from "@dnd-kit/core";
import { useState } from "react";
import AvatarDraggable from "../Avatar/Avatar";
import { borderRadius, height } from "@mui/system";
import { useMemo } from "react";

const AvatarField = ({ avatars, children, id }) => {
  const { isOver, setNodeRef } = useDroppable({
    id: id,
  });
  const bgTexture = useMemo(() => determineTexture(id), []);
  const texturePos = useMemo(() => {
    return determineTexturePos();
  }, []);
  const style = {
    width: "10vh",
    display: "flex",
    height: "10vh",
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    backgroundImage: `url(${bgTexture})`,
    backgroundPosition: texturePos,
    border: "0px",
  }
  

  return (
    <div ref={setNodeRef} style={style} >
      {avatars?.map((avatarId, index) => {
        if (avatarId !== "") {
          return (
            <AvatarDraggable
              id={avatarId}
              key={avatarId}
              index={index}
            ></AvatarDraggable>
          );
        }
      })}
    </div>
  );
};

function determineTexture(id) {
  const x = parseInt(Array.from(id)[0]) + 1;
  const y = parseInt(Array.from(id)[1]) + 1;
  const result = (y + (x % 2)) % 2;
  if (result === 0) {
    return "https://images.pexels.com/photos/450055/pexels-photo-450055.jpeg?auto=compress&cs=tinysrgb&w=1600";
  } else {
    return "https://images.pexels.com/photos/2824173/pexels-photo-2824173.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  }
}

const determineTexturePos = () => {
  const x = Math.floor(Math.random() * 5);
  switch (x) {
    case 0:
      return "top";
    case 1:
      return "right";
    case 2:
      return "bottom";
    case 3:
      return "left";
    default:
      return "top";
  }
};
export default AvatarField;
