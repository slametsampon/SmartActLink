/**
 * Simulasi database pengguna
 * @type {Array<{username: string, passwordHash: string}>}
 */
const users = [
  {
    username: 'admin',
    role: 'admin',
    passwordHash:
      '5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8', // Hash untuk "password"
  },
  {
    username: 'user',
    role: 'user',
    passwordHash:
      '65e84be33532fb784c48129675f9eff3a682b27168c0ea744b2cf58ee02337c5', // Hash untuk "qwerty"
  },
  {
    username: 'tamu',
    role: 'tamu',
    passwordHash:
      '3b8cd3da133887e38bcdaf4f098c701567f6e4e8460197bf8537ced9c3507f7f', // Hash untuk "tamu123"
  },
];

export default users;
