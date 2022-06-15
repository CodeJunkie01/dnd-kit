import React from "react";
import { useDroppable } from "@dnd-kit/core";

const AvatarField = (props) => {
  const { isOver, setNodeRef } = useDroppable({
    id: props.id,
  });
  const style = {
    color: isOver ? "green" : "red",
    backgroundColor: isOver ? "yellow" : "blue",
  };

  return (
    <div ref={setNodeRef} style={style}>
      x{props.children}
    </div>
  );
};

export default AvatarField;
