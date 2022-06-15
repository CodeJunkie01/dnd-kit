const createUser = (id, name, avatarSource) => ({
  id: id,
  name: name,
  avatarSource: avatarSource,
});

const users = [
  createUser("user1", "John", "https://randomuser.me/api/portraits/men/75.jpg"),
  createUser("user2", "Jane", "https://randomuser.me/api/portraits/men/74.jpg"),
];

export default users;
