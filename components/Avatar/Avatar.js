import React, { useEffect } from "react";
import { useDraggable } from "@dnd-kit/core";
import { Avatar } from "@mui/material";
import users from "../UserData";
import { useState } from "react";

const AvatarDraggable = ({ children, id, index }) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: id,
  });
  const [user, setUser] = useState(() => {
    const x = users.find((user) => user.id === id);
    if (x === undefined) {
      console.log("no user foung for id: " + id);
    }
    return x;
  });
  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
        margin: "5px",
        zIndex: "100",
      }
    : {
        margin: "5px",
        zIndex: "100",
      };

  return (
    <Avatar
      src={user?.avatarSource}
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      sx={{
        boxShadow: 20,
        width: '9vh',
        height: '9vh',
      }}
    >
      {children}
    </Avatar>
  );
};

export default AvatarDraggable;
