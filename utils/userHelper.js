import getHome from './getHome.js';
/**
 * Menyimpan data pengguna ke localStorage.
 * @param {Object} user - Objek data pengguna.
 * @param {string} user.username - Nama pengguna.
 * @param {string} user.role - Peran pengguna (misalnya, Admin, User).
 */
function saveUserToLocalStorage(user) {
  if (
    !user ||
    typeof user.username !== 'string' ||
    user.username.trim() === '' ||
    typeof user.role !== 'string' ||
    user.role.trim() === ''
  ) {
    throw new Error(
      'Invalid user object. Ensure username and role are non-empty strings.'
    );
  }
  localStorage.setItem('authUser', JSON.stringify(user));
}

/**
 * Mengambil data pengguna dari localStorage.
 * @returns {Object|null} Objek data pengguna atau null jika tidak ditemukan atau data tidak valid.
 */
function getUserFromLocalStorage() {
  try {
    const user = localStorage.getItem('authUser');
    if (!user) return null;

    const parsedUser = JSON.parse(user);
    if (
      typeof parsedUser.username === 'string' &&
      parsedUser.username.trim() !== '' &&
      typeof parsedUser.role === 'string' &&
      parsedUser.role.trim() !== ''
    ) {
      return parsedUser;
    }
    return null; // Data tidak valid
  } catch (e) {
    console.error('Error parsing user data from localStorage:', e);
    return null;
  }
}

/**
 * Menghapus data pengguna dari localStorage.
 */
function removeUserFromLocalStorage() {
  localStorage.removeItem('authUser');
}

/**
 * Memeriksa apakah pengguna saat ini terautentikasi.
 * @returns {boolean} True jika pengguna terautentikasi, false jika tidak.
 */
function isAuthenticated() {
  const user = getUserFromLocalStorage();
  return user !== null;
}

/**
 * Memeriksa apakah pengguna memiliki role tertentu.
 * @param {string} requiredRole - Role yang diperlukan untuk akses.
 * @returns {boolean} True jika pengguna memiliki role yang sesuai, false jika tidak.
 */
function hasRole(requiredRole) {
  if (typeof requiredRole !== 'string' || requiredRole.trim() === '') {
    throw new Error('Invalid role. Ensure requiredRole is a non-empty string.');
  }
  const user = getUserFromLocalStorage();
  return user && user.role === requiredRole;
}

/**
 * Logout pengguna dan hapus data dari localStorage.
 */
function logoutUser() {
  removeUserFromLocalStorage();
  alert('You have been logged out.');
  window.location.href = `${getHome()}`; // Redirect ke halaman login
}

/**
 * Memperbarui role pengguna yang ada di localStorage.
 * @param {string} newRole - Role baru untuk pengguna.
 */
function updateUserRole(newRole) {
  if (typeof newRole !== 'string' || newRole.trim() === '') {
    throw new Error('Invalid role. Ensure newRole is a non-empty string.');
  }
  const user = getUserFromLocalStorage();
  if (user) {
    user.role = newRole;
    saveUserToLocalStorage(user);
  } else {
    throw new Error('No user found in localStorage to update role.');
  }
}

/**
 * Mengekspor semua fungsi untuk digunakan di file lain.
 */
export {
  saveUserToLocalStorage,
  getUserFromLocalStorage,
  removeUserFromLocalStorage,
  isAuthenticated,
  hasRole,
  logoutUser,
  updateUserRole,
};
