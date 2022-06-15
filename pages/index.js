import { DndContext } from "@dnd-kit/core";
import Avatar from "../components/Avatar/Avatar";
import AvatarField from "../components/AvatarField/AvatarField";
import { useState } from "react";
import users from "../components/UserData";

export default function Home() {
  const [parent, setParent] = useState(null);

  const draggableMarkup = (user) => {
    return;
  };

  const handleDragEnd = (event) => {
    const { over } = event;
    console.log(over?.id);
    setParent(over ? over.id : null);
  };

  const setupAvatarField = (id) => (
    <AvatarField id={id}>
      {parent === id ? draggableMarkup : "Drop here"}
    </AvatarField>
  );
  console.log(users);
  return (
    <DndContext onDragEnd={handleDragEnd}>
      {setupAvatarField("d1")}
      {setupAvatarField("d2")}
      {users.map((user) =>
        parent === null ? (
          <Avatar user={user}>Drag Me</Avatar>
        ) : (
          "AlreadyDragged"
        )
      )}
    </DndContext>
  );
}
