document.addEventListener('DOMContentLoaded', () => {
  /**
   * Simulasi database pengguna
   * @type {Array<{username: string, passwordHash: string}>}
   */
  const users = [
    {
      username: 'admin',
      passwordHash:
        '5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8', // Hash untuk "password"
    },
    {
      username: 'user',
      passwordHash:
        '65e84be33532fb784c48129675f9eff3a682b27168c0ea744b2cf58ee02337c5', // Hash untuk "qwerty"
    },
    {
      username: 'tamu',
      passwordHash:
        '3b8cd3da133887e38bcdaf4f098c701567f6e4e8460197bf8537ced9c3507f7f', // Hash untuk "tamu123"
    },
  ];

  /**
   * Meng-hash password menggunakan algoritma SHA-256
   * @async
   * @param {string} password - Password yang akan di-hash.
   * @returns {Promise<string>} Hasil hash dalam bentuk string heksadesimal.
   */
  async function hashPassword(password) {
    const encoder = new TextEncoder(); // Mengubah string menjadi byte array
    const data = encoder.encode(password); // Encode password ke byte array
    const hashBuffer = await crypto.subtle.digest('SHA-256', data); // Hash data dengan SHA-256

    // Konversi hasil hash ke string heksadesimal
    return Array.from(new Uint8Array(hashBuffer))
      .map((b) => b.toString(16).padStart(2, '0')) // Ubah setiap byte menjadi string heksadesimal
      .join(''); // Gabungkan semua byte menjadi satu string
  }

  /**
   * Memvalidasi login berdasarkan username dan password.
   * @async
   * @param {string} username - Username pengguna.
   * @param {string} password - Password yang dimasukkan pengguna.
   * @returns {Promise<{success: boolean, message: string}>} Hasil validasi login.
   */
  async function validateLogin(username, password) {
    // Hash password yang dimasukkan pengguna
    const hashedPassword = await hashPassword(password);

    // Cari pengguna dengan username yang cocok
    const user = users.find((u) => u.username === username);

    if (!user) {
      return { success: false, message: 'Username not found' };
    }

    console.log(user.passwordHash, hashedPassword);
    // Cocokkan password hash
    if (user.passwordHash !== hashedPassword) {
      return { success: false, message: 'Invalid password' };
    }

    return { success: true, message: 'Login successful' };
  }

  /**
   * Event handler untuk form login.
   * @param {Event} e - Event yang ditrigger saat form dikirimkan.
   */
  document.getElementById('loginForm').addEventListener('submit', async (e) => {
    e.preventDefault(); // Mencegah refresh halaman

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value;
    console.log(username, password);

    // Validasi login
    const result = await validateLogin(username, password);

    const status = document.getElementById('status'); // Elemen untuk menampilkan status login
    status.textContent = result.message; // Tampilkan pesan hasil login
    status.classList.remove('hidden');

    if (result.success) {
      status.classList.remove('text-red-500');
      status.classList.add('text-green-500');
      alert(`Welcome, ${username}!`);
    } else {
      status.classList.remove('text-green-500');
      status.classList.add('text-red-500');
    }
  });
});
