const createUser = (id, name, avatarSource, bgSource) => ({
  id: id,
  name: name,
  avatarSource: avatarSource,
  bgSource: bgSource,
});

const darkBG =
  "url(https://images.pexels.com/photos/129733/pexels-photo-129733.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)";
const lightBG =
  "url(https://images.pexels.com/photos/129733/pexels-photo-129733.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)";

const users = [
  createUser(
    "pawn_black_1",
    "Pawn",
    "../pictures/pawn.svg",
    "black",
    "https://images.pexels.com/photos/2931290/pexels-photo-2931290.jpeg?auto=compress&cs=tinysrgb&w=1600"
  ),
  createUser("pawn_black_2", "Pawn", "../pictures/pawn.svg", "black", darkBG),
  createUser("pawn_black_3", "Pawn", "../pictures/pawn.svg", "black", darkBG),
  createUser("pawn_black_4", "Pawn", "../pictures/pawn.svg", "black", darkBG),
  createUser("pawn_black_5", "Pawn", "../pictures/pawn.svg", "black", darkBG),
  createUser("pawn_black_6", "Pawn", "../pictures/pawn.svg", "black", darkBG),
  createUser("pawn_black_7", "Pawn", "../pictures/pawn.svg", "black", darkBG),
  createUser("pawn_black_8", "Pawn", "../pictures/pawn.svg", "black", darkBG),
  createUser("rook_black_1", "Rook", "../pictures/rook.svg", "black", darkBG),
  createUser("rook_black_2", "Rook", "../pictures/rook.svg", "black", darkBG),
  createUser(
    "knight_black_1",
    "Knight",
    "../pictures/knight.svg",
    "black",
    darkBG
  ),
  createUser(
    "knight_black_2",
    "Knight",
    "../pictures/knight.svg",
    "black",
    darkBG
  ),
  createUser(
    "bishop_black_1",
    "Bishop",
    "../pictures/bishop.svg",
    "black",
    darkBG
  ),
  createUser(
    "bishop_black_2",
    "Bishop",
    "../pictures/bishop.svg",
    "black",
    darkBG
  ),
  createUser(
    "queen_black_1",
    "Queen",
    "../pictures/queen.svg",
    "black",
    darkBG
  ),
  createUser("king_black_1", "King", "../pictures/king.svg", "black", darkBG),
  createUser(
    "pawn_white_1",
    "Pawn",
    "../pictures/pawn_white.svg",
    "white",
    lightBG
  ),
  createUser(
    "pawn_white_2",
    "Pawn",
    "../pictures/pawn_white.svg",
    "white",
    lightBG
  ),
  createUser(
    "pawn_white_3",
    "Pawn",
    "../pictures/pawn_white.svg",
    "white",
    lightBG
  ),
  createUser(
    "pawn_white_4",
    "Pawn",
    "../pictures/pawn_white.svg",
    "white",
    lightBG
  ),
  createUser(
    "pawn_white_5",
    "Pawn",
    "../pictures/pawn_white.svg",
    "white",
    lightBG
  ),
  createUser(
    "pawn_white_6",
    "Pawn",
    "../pictures/pawn_white.svg",
    "white",
    lightBG
  ),
  createUser(
    "pawn_white_7",
    "Pawn",
    "../pictures/pawn_white.svg",
    "white",
    lightBG
  ),
  createUser(
    "pawn_white_8",
    "Pawn",
    "../pictures/pawn_white.svg",
    "white",
    lightBG
  ),
  createUser(
    "rook_white_1",
    "Rook",
    "../pictures/rook_white.svg",
    "white",
    lightBG
  ),
  createUser(
    "rook_white_2",
    "Rook",
    "../pictures/rook_white.svg",
    "white",
    lightBG
  ),
  createUser(
    "knight_white_1",
    "Knight",
    "../pictures/knight_white.svg",
    "white",
    lightBG
  ),
  createUser(
    "knight_white_2",
    "Knight",
    "../pictures/knight_white.svg",
    "white",
    lightBG
  ),
  createUser(
    "bishop_white_1",
    "Bishop",
    "../pictures/bishop_white.svg",
    "white",
    lightBG
  ),
  createUser(
    "bishop_white_2",
    "Bishop",
    "../pictures/bishop_white.svg",
    "white",
    lightBG
  ),
  createUser(
    "queen_white_1",
    "Queen",
    "../pictures/queen_white.svg",
    "white",
    lightBG
  ),
  createUser(
    "king_white_1",
    "King",
    "../pictures/king_white.svg",
    "white",
    lightBG
  ),
];

export default users;
