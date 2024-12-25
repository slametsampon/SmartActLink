export default function isEmptyObject(data) {
  if (data === null || data === undefined) return true; // Cek null atau undefined
  if (typeof data === 'object') return Object.keys(data).length === 0; // Cek objek atau array
  return false; // Untuk tipe lain, anggap tidak kosong
}
