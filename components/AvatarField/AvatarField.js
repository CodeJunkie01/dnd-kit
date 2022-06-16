import React from "react";
import { useDroppable } from "@dnd-kit/core";
import { useState } from "react";
import AvatarDraggable from "../Avatar/Avatar";
import { borderRadius, height } from "@mui/system";

const AvatarField = ({avatars, children, id}) => {
  
  
  const { isOver, setNodeRef } = useDroppable({
    id: id,
  });
  const style = {
    padding: 10,
    boxShadow: isOver ? "10px 10px 10px grey": "none",
    marginBottom: isOver ? "30px" : "40px",
    marginLeft: "20px",
    width: "300px",
    backgroundColor: "lightgrey",
    transition: 'boxShadow 1s ease-in-out',
    display: "flex",
    borderRadius: 5,
    height: isOver? "140px" : "130px"
  };

  return (
    <div ref={setNodeRef} style={style}>
      
      {avatars?.map((avatarId, index)=> {
        return <AvatarDraggable id={avatarId} key={avatarId} index={index}>Drag Me</AvatarDraggable>
      })}
      
      
    </div>
  );
};

export default AvatarField;
