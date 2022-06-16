const createUser = (id, name, avatarSource) => ({
  id: id,
  name: name,
  avatarSource: avatarSource,
});

const users = [
  createUser("user1", "John", "https://randomuser.me/api/portraits/men/75.jpg"),
  createUser("user2", "Jane", "https://randomuser.me/api/portraits/men/74.jpg"),
  createUser("user3", "Jane", "https://randomuser.me/api/portraits/men/73.jpg"),
  createUser("user4", "Jane", "https://randomuser.me/api/portraits/men/72.jpg"),
  createUser("user5", "Jane", "https://randomuser.me/api/portraits/men/71.jpg"),
];

export default users;
