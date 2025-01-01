/**
 * @module fileManager
 * @description Modul untuk mengelola unggah dan unduh file ke/dari GitHub atau lokal.
 */

/**
 * Utilitas untuk mengunggah konten ke GitHub menggunakan API.
 * @param {string} repo - Nama repository GitHub (format: "username/repo").
 * @param {string} path - Jalur file di repository.
 * @param {string} content - Konten file dalam format Base64.
 * @param {string} token - Token akses GitHub.
 * @returns {Promise<Object>} Respons dari API GitHub.
 * @throws {Error} Jika terjadi kesalahan selama pengunggahan.
 */
async function uploadToGitHub(repo, path, content, token) {
  const url = `https://api.github.com/repos/${repo}/contents/${path}`;
  const body = {
    message: `Upload ${path}`,
    content,
  };

  const response = await fetch(url, {
    method: 'PUT',
    headers: {
      Authorization: `token ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    throw new Error(`GitHub API error: ${response.statusText}`);
  }

  return response.json();
}

/**
 * Mengunggah file ke GitHub repository.
 * Mendukung file teks (JSON, XML, dll.) dan file biner (gambar, PDF, dll.).
 * @param {File} file - File yang akan diunggah.
 * @param {string} repo - Nama repository GitHub (format: "username/repo").
 * @param {string} path - Jalur file di repository.
 * @param {string} token - Token akses GitHub.
 * @returns {Promise<Object>} Respons dari API GitHub.
 * @throws {Error} Jika terjadi kesalahan selama pengunggahan.
 */
async function uploadFile(file, repo, path, token) {
  if (!file) {
    throw new Error('No file selected for upload.');
  }

  const reader = new FileReader();

  return new Promise((resolve, reject) => {
    reader.onload = async (event) => {
      try {
        // Tentukan apakah file adalah teks atau biner
        const isTextFile =
          file.type.startsWith('text/') || file.type === 'application/json';

        const base64Content = isTextFile
          ? btoa(event.target.result)
          : event.target.result.split(',')[1]; // Ambil Base64 untuk file biner

        const response = await uploadToGitHub(repo, path, base64Content, token);
        resolve(response);
      } catch (error) {
        reject(error);
      }
    };

    reader.onerror = () => reject('Error reading the file.');

    // Membaca file sesuai jenisnya
    if (isTextFile) {
      reader.readAsText(file);
    } else {
      reader.readAsDataURL(file);
    }
  });
}

/**
 * Mengunduh file dari URL dan menyimpannya ke lokal.
 * Mendukung file teks (JSON, XML, dll.) dan file biner (gambar, PDF, dll.).
 * @param {string} url - URL file yang akan diunduh.
 * @param {string} filename - Nama file yang akan disimpan.
 * @returns {Promise<void>}
 * @throws {Error} Jika terjadi kesalahan selama pengunduhan.
 */
async function downloadFile(url, filename) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch file: ${response.statusText}`);
    }

    const blob = await response.blob(); // Mengambil file sebagai Blob

    // Membuat tautan untuk mengunduh file
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = filename || url.split('/').pop(); // Default: nama file dari URL
    link.click();
  } catch (error) {
    console.error('Error downloading file:', error);
  }
}

export { uploadFile, downloadFile };
