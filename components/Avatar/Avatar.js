import React, { useEffect } from "react";
import { useDraggable } from "@dnd-kit/core";
import { Avatar } from "@mui/material";
import users from "../UserData";
import { useState } from "react";

const AvatarDraggable = ({ children, id, index }) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: id,
  });
  const [user, setUser] = useState(()=>{
    const x = users.find(user=>user.id === id);
    return x;
  })
  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
        margin: "5px", 
        
      }
    : {margin: "5px"};

    
  return (
    <Avatar
      src={user.avatarSource}
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      sx={{borderColor:"white", border:1, boxShadow: 1, width:50, height:50, left:250-80*index, top:-30, position: "relative" }}
    >
      {children}
    </Avatar>
  );
};

export default AvatarDraggable;
