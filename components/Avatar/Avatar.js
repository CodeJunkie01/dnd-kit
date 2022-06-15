import React from "react";
import { useDraggable } from "@dnd-kit/core";
import { Avatar } from "@mui/material";

const AvatarDraggable = ({ children, user }) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: "draggable",
  });

  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined;

  return (
    <Avatar
      src={user.avatarSource}
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
    >
      {children}
    </Avatar>
  );
};

export default AvatarDraggable;
