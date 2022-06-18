import { DndContext } from "@dnd-kit/core";
import Avatar from "../components/Avatar/Avatar";
import AvatarField from "../components/AvatarField/AvatarField";
import { useState } from "react";
import users from "../components/UserData";
import { avatarClasses } from "@mui/material";
const util = require("util");

export default function Home() {
  const [parent, setParent] = useState(null);
  const avatarFieldRelation = (avatarFieldId, avatars) => {
    return {
      avatarFieldId: avatarFieldId,
      avatars: avatars,
    };
  };
  const [assignedAvatars, setAssignedAvatars] = useState([
    avatarFieldRelation("d1", [
      users[0].id,
      users[1].id,
      users[2].id,
      users[3].id,
      users[4].id,
    ]),
    avatarFieldRelation("d2", []),
    avatarFieldRelation("d3", []),
  ]);

  const handleDragEnd = (event) => {
    const { over, active } = event;
    if (over === null) {
      return;
    }
    setAssignedAvatars(() => {
      const newAssignedAvatars = assignedAvatars.map((relation) => {
        const newAvatarList = relation.avatars.filter((user) => {
          return user !== active.id;
        });
        const newRelation = {
          avatarFieldId: relation.avatarFieldId,
          avatars: newAvatarList,
        };
        return newRelation;
      });
      console.log(newAssignedAvatars);
      const avatarField = newAssignedAvatars.map((relation) => {
        if (over.id === relation.avatarFieldId) {
          relation.avatars.push(active.id);
        }
        return relation;
      });
      return avatarField;
    });
  };
  return (
    <DndContext onDragEnd={handleDragEnd}>
      <br></br>
      {assignedAvatars.map((e) => {
        return (
          <AvatarField
            avatars={e.avatars}
            id={e.avatarFieldId}
            key={e.avatarFieldId}
          >
            test
          </AvatarField>
        );
      })}
    </DndContext>
  );
}
