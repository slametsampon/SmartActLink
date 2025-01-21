**Membangun SPA yang Efisien dengan LitElement, esbuild, dan Tailwind CSS: Panduan Lengkap untuk Hosting di ESP32-C3 dan GitHub Pages**

---

- [**Kata Pengantar**](#kata-pengantar)
- [**1. File Konfigurasi esbuild**](#1-file-konfigurasi-esbuild)
  - [**Isi File `esbuild.config.js`:**](#isi-file-esbuildconfigjs)
- [**2. Skrip pada `package.json`**](#2-skrip-pada-packagejson)
  - [**Isi File `package.json`:**](#isi-file-packagejson)
  - [**Kompatibilitas Skrip dengan Windows 10/11**](#kompatibilitas-skrip-dengan-windows-1011)
    - [**a. Skrip `npm run dev`**](#a-skrip-npm-run-dev)
    - [**b. Skrip `npm run tailwind:watch`**](#b-skrip-npm-run-tailwindwatch)
    - [**c. Skrip `npm run pre-release` dan `npm run deploy:github`**](#c-skrip-npm-run-pre-release-dan-npm-run-deploygithub)
    - [**d. Skrip `npm run build:production` dan `npm run deploy:esp32`**](#d-skrip-npm-run-buildproduction-dan-npm-run-deployesp32)
    - [**e. Skrip Gabungan**](#e-skrip-gabungan)
  - [**Rekomendasi untuk Kompatibilitas Lintas Platform**](#rekomendasi-untuk-kompatibilitas-lintas-platform)
  - [**Workflow Skrip dan Penjelasannya**](#workflow-skrip-dan-penjelasannya)
    - [**1. Development**](#1-development)
    - [**2. Pre-release**](#2-pre-release)
    - [**3. Production**](#3-production)
    - [**4. Utility**](#4-utility)
    - [**5. Tailwind CSS**](#5-tailwind-css)
    - [**6. Gabungan Skrip untuk Workflow Full Development**](#6-gabungan-skrip-untuk-workflow-full-development)
  - [**Rangkuman Workflow dalam Bentuk Tabel**](#rangkuman-workflow-dalam-bentuk-tabel)
  - [**Kesimpulan**](#kesimpulan)
- [**3. Mekanisme Routing**](#3-mekanisme-routing)
  - [**1. Konsep Dasar Routing**](#1-konsep-dasar-routing)
  - [**2. Isi File `router.ts`**](#2-isi-file-routerts)
    - [**`src/router.ts`:**](#srcrouterts)
  - [**3. Cara Menggunakan `Router`**](#3-cara-menggunakan-router)
    - [**Contoh di `index.ts`:**](#contoh-di-indexts)
  - [**4. Penjelasan Implementasi**](#4-penjelasan-implementasi)
    - [**a. Struktur Class Router**](#a-struktur-class-router)
    - [**b. Bagaimana Hash-Based Routing Bekerja**](#b-bagaimana-hash-based-routing-bekerja)
  - [**5. Kelebihan dan Kekurangan Router Custom**](#5-kelebihan-dan-kekurangan-router-custom)
    - [**Kelebihan:**](#kelebihan)
    - [**Kekurangan:**](#kekurangan)
  - [**6. Menambahkan Fitur Tambahan**](#6-menambahkan-fitur-tambahan)
  - [**7. Penjelasan Baris per Baris addRoute**](#7-penjelasan-baris-per-baris-addroute)
    - [**1. Parameter `path: string`**](#1-parameter-path-string)
    - [**2. Parameter `callback: () => void`**](#2-parameter-callback---void)
    - [**3. `this.routes[path] = callback`**](#3-thisroutespath--callback)
    - [**4. Tipe Return `void`**](#4-tipe-return-void)
  - [**8. Ilustrasi Penyimpanan dalam `this.routes`**](#8-ilustrasi-penyimpanan-dalam-thisroutes)
  - [**9. Contoh Penggunaan**](#9-contoh-penggunaan)
  - [**10. Cara Router Menemukan Rute**](#10-cara-router-menemukan-rute)
  - [**11. Manfaat Metode `addRoute`**](#11-manfaat-metode-addroute)
- [**4. Deployment Keberbagai Hosting**](#4-deployment-keberbagai-hosting)
  - [**a. Hosting Lokal (Development)**](#a-hosting-lokal-development)
  - [**b. Hosting Demo (GitHub Pages)**](#b-hosting-demo-github-pages)
  - [**c. Hosting Produksi (ESP32-C3)**](#c-hosting-produksi-esp32-c3)
  - [**Alternatif File `scripts/upload-to-esp32.js`**](#alternatif-file-scriptsupload-to-esp32js)
    - [**1. Tujuan File `upload-to-esp32.js`**](#1-tujuan-file-upload-to-esp32js)
    - [**2. Persyaratan**](#2-persyaratan)
    - [**3. Contoh File `upload-to-esp32.js`**](#3-contoh-file-upload-to-esp32js)
      - [**Menggunakan Arduino CLI**](#menggunakan-arduino-cli)
    - [**4. Menggunakan ESPTool dan LittleFS Uploader**](#4-menggunakan-esptool-dan-littlefs-uploader)
      - [**Install Library Tambahan**](#install-library-tambahan)
      - [**Skrip Upload**](#skrip-upload)
    - [**5. Integrasi dengan Skrip `npm run deploy:esp32`**](#5-integrasi-dengan-skrip-npm-run-deployesp32)
    - [**6. Cara Menjalankan**](#6-cara-menjalankan)
    - [**Kesimpulan**](#kesimpulan-1)
- [**5. Tailwind CSS**](#5-tailwind-css-1)
- [**6. Lebih Detail terkait esbuild**](#6-lebih-detail-terkait-esbuild)
  - [**1. Perintah Dasar esbuild**](#1-perintah-dasar-esbuild)
  - [**2. Opsi-Opsi Penting esbuild**](#2-opsi-opsi-penting-esbuild)
    - [**a. Input dan Output**](#a-input-dan-output)
    - [**b. Opsi Output**](#b-opsi-output)
    - [**c. Opsi Loader**](#c-opsi-loader)
    - [**d. Watch Mode**](#d-watch-mode)
    - [**e. Target Platform**](#e-target-platform)
    - [**f. Mode Build**](#f-mode-build)
  - [**3. Contoh Perintah Lengkap**](#3-contoh-perintah-lengkap)
    - [**a. Build untuk Development**](#a-build-untuk-development)
    - [**b. Build untuk Production**](#b-build-untuk-production)
    - [**c. Build untuk Browser dengan ES6**](#c-build-untuk-browser-dengan-es6)
  - [**4. Rekomendasi untuk Proyek SPA**](#4-rekomendasi-untuk-proyek-spa)
    - [**Perintah Development:**](#perintah-development)
    - [**Perintah Pre-release (GitHub Pages):**](#perintah-pre-release-github-pages)
    - [**Perintah Production (ESP32-C3):**](#perintah-production-esp32-c3)
  - [**5. Sumber Daya Tambahan**](#5-sumber-daya-tambahan)
- [**7. API methode esbuild.build**](#7-api-methode-esbuildbuild)
  - [**Apa itu `esbuild.build`?**](#apa-itu-esbuildbuild)
  - [**Struktur Dasar `esbuild.build`**](#struktur-dasar-esbuildbuild)
    - [Contoh Dasar:](#contoh-dasar)
  - [**Opsi dalam `esbuild.build`**](#opsi-dalam-esbuildbuild)
  - [**Kapan `esbuild.build` Digunakan?**](#kapan-esbuildbuild-digunakan)
  - [**Contoh File Konfigurasi `esbuild.config.js`**](#contoh-file-konfigurasi-esbuildconfigjs)
- [**8. Entry Point esbuild**](#8-entry-point-esbuild)
  - [**1. `entryPoints: ["src/index.ts"]`**](#1-entrypoints-srcindexts)
    - [**Strategi Pengembangan:**](#strategi-pengembangan)
    - [**Struktur Folder:**](#struktur-folder)
    - [**Cara Kerja:**](#cara-kerja)
    - [**Kelebihan:**](#kelebihan-1)
    - [**Kekurangan:**](#kekurangan-1)
  - [**2. `entryPoints: ["src/index.html"]`**](#2-entrypoints-srcindexhtml)
    - [**Strategi Pengembangan:**](#strategi-pengembangan-1)
    - [**Struktur Folder:**](#struktur-folder-1)
    - [**Cara Kerja:**](#cara-kerja-1)
    - [**Contoh `index.html`:**](#contoh-indexhtml)
    - [**Kelebihan:**](#kelebihan-2)
    - [**Kekurangan:**](#kekurangan-2)
    - [**1. Penyesuaian Struktur Folder**](#1-penyesuaian-struktur-folder)
    - [**2. Isi File `index.ts`**](#2-isi-file-indexts)
      - [**Contoh Isi `index.ts`:**](#contoh-isi-indexts)
    - [**3. Isi File `index.html`**](#3-isi-file-indexhtml)
      - [**Contoh `index.html`:**](#contoh-indexhtml-1)
    - [**4. Proses Build dengan esbuild**](#4-proses-build-dengan-esbuild)
      - [**Konfigurasi esbuild:**](#konfigurasi-esbuild)
    - [**5. Keuntungan Menyertakan `index.ts`**](#5-keuntungan-menyertakan-indexts)
    - [**6. Kesimpulan**](#6-kesimpulan)
  - [**Perbedaan Utama**](#perbedaan-utama)
  - [**Rekomendasi untuk Proyek Anda**](#rekomendasi-untuk-proyek-anda)
    - [**Gunakan `entryPoints: ["src/index.html"]` Jika:**](#gunakan-entrypoints-srcindexhtml-jika)
    - [**Gunakan `entryPoints: ["src/index.ts"]` Jika:**](#gunakan-entrypoints-srcindexts-jika)

---

### **Kata Pengantar**

Halo, para pengembang dan pecinta teknologi! 👋

Apakah Anda ingin menggabungkan kekuatan **Single Page Application (SPA)** modern dengan fleksibilitas hosting di perangkat IoT seperti **ESP32-C3**? Atau mungkin Anda mencari cara untuk membangun dan mendemonstrasikan aplikasi berbasis **LitElement**, **esbuild**, dan **Tailwind CSS** dengan workflow yang solid? Jika ya, Anda berada di tempat yang tepat!

Artikel ini adalah panduan lengkap yang dirancang khusus untuk Anda yang ingin:

- Membuat aplikasi SPA menggunakan **LitElement** sebagai fondasi komponen UI.
- Memanfaatkan **esbuild** sebagai alat build cepat dan ringan.
- Menggunakan **Tailwind CSS** untuk styling modern tanpa repot.
- Mengelola workflow pengembangan yang fleksibel untuk hosting di **GitHub Pages (demo)** dan **ESP32-C3 (produksi)**.

Kita akan membahas berbagai topik menarik, mulai dari konfigurasi **esbuild**, pembuatan skrip otomatis di `package.json`, hingga routing tanpa menggunakan library eksternal. Tidak hanya itu, panduan ini juga memandu Anda melewati setiap langkah deployment, memastikan aplikasi Anda dapat berjalan mulus baik di lokal maupun di hosting akhir.

### **1. File Konfigurasi esbuild**

Kita akan membuat `esbuild.config.js` untuk menangani **stage development**, **pre-release**, dan **production** dengan path yang sesuai untuk setiap lingkungan hosting.

#### **Isi File `esbuild.config.js`:**

```javascript
const esbuild = require('esbuild');

// Tentukan environment berdasarkan argumen command line
const isDev = process.env.NODE_ENV === 'development';
const isPreRelease = process.env.NODE_ENV === 'pre-release';
const isProduction = process.env.NODE_ENV === 'production';

// Tentukan publicPath berdasarkan hosting
let publicPath = '/';
if (isPreRelease) publicPath = '/smartsenselink'; // Untuk GitHub Pages
if (isProduction) publicPath = ''; // Untuk ESP32-C3

esbuild
  .build({
    entryPoints: ['src/index.html'],
    outdir: 'dist',
    bundle: true,
    minify: !isDev,
    sourcemap: isDev,
    publicPath: publicPath,
    loader: {
      '.ts': 'ts',
      '.css': 'css',
    },
    watch: isDev, // Mode watch aktif hanya untuk development
    logLevel: 'info', // Tampilkan log saat build
  })
  .catch(() => process.exit(1));
```

---

### **2. Skrip pada `package.json`**

Kita akan mengatur skrip di `package.json` untuk mendukung kebutuhan development, pre-release, production, dan deployment.

#### **Isi File `package.json`:**

```json
{
  "name": "smartsenselink",
  "version": "1.0.0",
  "description": "SPA with LitElement hosted on ESP32-C3, GitHub Pages, and local dev",
  "scripts": {
    // Development
    "dev": "NODE_ENV=development node esbuild.config.js && npm run start:local",
    "start:local": "http-server dist --push-state",

    // Pre-release (GitHub Pages)
    "pre-release": "NODE_ENV=pre-release node esbuild.config.js",
    "deploy:github": "npm run pre-release && gh-pages -d dist",

    // Production (ESP32-C3)
    "build:production": "NODE_ENV=production node esbuild.config.js",
    "deploy:esp32": "npm run build:production && npm run upload:esp32",
    "upload:esp32": "node scripts/upload-to-esp32.js",

    // Tailwind CSS
    "tailwind:build": "tailwindcss -i ./src/styles.css -o ./dist/styles.css --minify",
    "tailwind:watch": "tailwindcss -i ./src/styles.css -o ./dist/styles.css --watch",

    // Utility
    "clean": "rm -rf dist"
  },
  "devDependencies": {
    "esbuild": "^0.19.0",
    "gh-pages": "^5.0.0",
    "http-server": "^14.1.1",
    "tailwindcss": "^3.3.0"
  }
}
```

#### **Kompatibilitas Skrip dengan Windows 10/11**

Mari kita ulas kompatibilitas setiap skrip di `package.json`:

##### **a. Skrip `npm run dev`**

- Skrip ini menjalankan esbuild dan http-server.
- **Kompatibel di Windows 10/11:**  
  ✅ Tidak ada masalah selama Node.js dan npm sudah terpasang.

##### **b. Skrip `npm run tailwind:watch`**

- Skrip ini memanggil Tailwind CLI untuk memonitor perubahan file.
- **Kompatibel di Windows 10/11:**  
  ✅ Bekerja langsung jika Tailwind CSS sudah terpasang melalui npm.

##### **c. Skrip `npm run pre-release` dan `npm run deploy:github`**

- Skrip ini menjalankan esbuild untuk build pre-release dan mengunggah hasilnya ke GitHub Pages menggunakan `gh-pages`.
- **Kompatibel di Windows 10/11:**  
  ✅ Pastikan Anda telah menginstal Git dan mengatur akses ke repository GitHub.

##### **d. Skrip `npm run build:production` dan `npm run deploy:esp32`**

- Skrip ini membuild aplikasi dan mengunggahnya ke ESP32-C3.
- **Kompatibilitas di Windows 10/11:**
  - ✅ Esbuild: Tidak ada masalah.
  - ⚠️ Upload ke ESP32-C3:
    - Pastikan tool seperti **arduino-cli** atau **esptool.py** kompatibel dengan Windows dan sudah dikonfigurasi.

##### **e. Skrip Gabungan**

- Skrip seperti `npm run dev:full` menggunakan simbol `&` untuk menjalankan proses paralel.
- **Di Windows 10/11:**
  - ⚠️ Simbol `&` mungkin tidak bekerja langsung di Windows Command Prompt (CMD). Gunakan **PowerShell** atau package seperti `concurrently` untuk kompatibilitas lintas platform:
    ```bash
    npm install concurrently --save-dev
    ```
    Ubah skrip menjadi:
    ```json
    "dev:full": "concurrently \"npm run tailwind:watch\" \"npm run dev\""
    ```

---

#### **Rekomendasi untuk Kompatibilitas Lintas Platform**

Untuk memastikan semua skrip bekerja di Windows, gunakan pendekatan berikut:

- **Gunakan `rimraf`:** Mengganti `rm -rf` dengan `rimraf` untuk perintah clean.
- **Gunakan `concurrently`:** Menangani perintah paralel di berbagai sistem operasi.
- **Periksa Dependensi ESP32-C3:** Pastikan alat seperti `arduino-cli` berfungsi di Windows.

**Perbaikan Skrip Akhir di `package.json`:**

```json
"scripts": {
  "dev": "NODE_ENV=development node esbuild.config.js && npm run start:local",
  "start:local": "http-server dist --push-state",
  "pre-release": "NODE_ENV=pre-release node esbuild.config.js",
  "deploy:github": "npm run pre-release && gh-pages -d dist",
  "build:production": "NODE_ENV=production node esbuild.config.js",
  "deploy:esp32": "npm run build:production && npm run upload:esp32",
  "upload:esp32": "node scripts/upload-to-esp32.js",
  "tailwind:build": "tailwindcss -i ./src/styles.css -o ./dist/styles.css --minify",
  "tailwind:watch": "tailwindcss -i ./src/styles.css -o ./dist/styles.css --watch",
  "clean": "rimraf dist",
  "dev:full": "concurrently \"npm run tailwind:watch\" \"npm run dev\""
}
```

---

#### **Workflow Skrip dan Penjelasannya**

##### **1. Development**

- **Tujuan:**  
  Workflow ini digunakan untuk proses pengembangan di lingkungan lokal.  
  Tailwind CSS akan dimonitor untuk setiap perubahan kelas, dan server lokal akan berjalan untuk melihat hasilnya di browser.

**Skrip:**

```json
"dev": "NODE_ENV=development node esbuild.config.js && npm run start:local",
"start:local": "http-server dist --push-state",
"tailwind:watch": "tailwindcss -i ./src/styles.css -o ./dist/styles.css --watch"
```

**Cara Kerja:**

1. Jalankan `npm run tailwind:watch` untuk memonitor perubahan CSS.
2. Jalankan `npm run dev` untuk membuild aplikasi dengan esbuild (development mode) dan menyajikannya melalui server lokal (`http://localhost:8080`).

---

##### **2. Pre-release**

- **Tujuan:**  
  Workflow ini digunakan untuk membuat **build pre-release** yang akan dideploy ke **GitHub Pages** sebagai demo atau testing aplikasi.

**Skrip:**

```json
"pre-release": "NODE_ENV=pre-release node esbuild.config.js",
"deploy:github": "npm run pre-release && gh-pages -d dist"
```

**Cara Kerja:**

1. Jalankan `npm run pre-release` untuk membuild aplikasi dengan path `/smartsenselink` (GitHub Pages).
2. Deploy hasil build ke GitHub Pages menggunakan `npm run deploy:github`.

---

##### **3. Production**

- **Tujuan:**  
  Workflow ini digunakan untuk membuat build final yang akan dihosting di **ESP32-C3**.

**Skrip:**

```json
"build:production": "NODE_ENV=production node esbuild.config.js",
"deploy:esp32": "npm run build:production && npm run upload:esp32",
"upload:esp32": "node scripts/upload-to-esp32.js"
```

**Cara Kerja:**

1. Jalankan `npm run build:production` untuk membuild aplikasi tanpa path khusus (untuk root direktori).
2. Jalankan `npm run deploy:esp32` untuk mengunggah hasil build ke ESP32-C3 menggunakan `upload-to-esp32.js`.

---

##### **4. Utility**

- **Tujuan:**  
  Skrip ini digunakan untuk membersihkan direktori `dist` sebelum membuat build baru atau untuk keperluan debugging.

**Skrip:**

```json
"clean": "rimraf dist"
```

**Cara Kerja:**

1. Jalankan `npm run clean` untuk menghapus folder `dist` dan memastikan build baru bebas dari file lama.

---

##### **5. Tailwind CSS**

- **Tujuan:**  
  Mengatur file **CSS** menggunakan Tailwind CSS dalam mode development atau production.

**Skrip:**

```json
"tailwind:build": "tailwindcss -i ./src/styles.css -o ./dist/styles.css --minify",
"tailwind:watch": "tailwindcss -i ./src/styles.css -o ./dist/styles.css --watch"
```

**Cara Kerja:**

1. Jalankan `npm run tailwind:build` untuk menghasilkan file CSS final (minifikasi).
2. Jalankan `npm run tailwind:watch` untuk memonitor perubahan CSS selama pengembangan.

---

##### **6. Gabungan Skrip untuk Workflow Full Development**

- **Tujuan:**  
  Menjalankan **esbuild** (development) dan **Tailwind CSS Watch** secara paralel.

**Skrip:**

```json
"dev:full": "concurrently \"npm run tailwind:watch\" \"npm run dev\""
```

**Cara Kerja:**

1. Jalankan `npm run dev:full` untuk menjalankan kedua proses sekaligus.

---

#### **Rangkuman Workflow dalam Bentuk Tabel**

| **Skrip**                  | **Tujuan**                                                         | **Perintah**       | **Penjelasan**                                                                                          |
| -------------------------- | ------------------------------------------------------------------ | ------------------ | ------------------------------------------------------------------------------------------------------- |
| `npm run dev`              | Membuild aplikasi dan menjalankan server lokal (development)       | `dev`              | Membuild aplikasi menggunakan **esbuild** dalam mode development.                                       |
| `npm run start:local`      | Menjalankan server lokal tanpa membuild                            | `start:local`      | Menggunakan **http-server** untuk menyajikan folder `dist` di `http://localhost:8080`.                  |
| `npm run pre-release`      | Membuild aplikasi untuk GitHub Pages (pre-release)                 | `pre-release`      | Membuild aplikasi dengan path `/smartsenselink` untuk kompatibilitas GitHub Pages.                      |
| `npm run deploy:github`    | Membuild dan mengunggah hasil build ke GitHub Pages                | `deploy:github`    | Menggunakan package **gh-pages** untuk mengunggah folder `dist` ke branch `gh-pages`.                   |
| `npm run build:production` | Membuild aplikasi untuk ESP32-C3 (production)                      | `build:production` | Membuild aplikasi tanpa path tambahan (sesuai root direktori hosting ESP32-C3).                         |
| `npm run deploy:esp32`     | Membuild dan mengunggah hasil build ke ESP32-C3                    | `deploy:esp32`     | Menjalankan build production, lalu mengunggah file ke ESP32-C3 melalui skrip custom.                    |
| `npm run tailwind:build`   | Membuild file CSS untuk production                                 | `tailwind:build`   | Menggunakan Tailwind CLI untuk menghasilkan file CSS final (minifikasi).                                |
| `npm run tailwind:watch`   | Memantau perubahan CSS selama pengembangan                         | `tailwind:watch`   | Menjalankan Tailwind CLI dalam mode watch, sehingga setiap perubahan pada CSS langsung terlihat.        |
| `npm run clean`            | Membersihkan folder `dist`                                         | `clean`            | Menghapus folder `dist` agar build baru tidak tercampur dengan file lama.                               |
| `npm run dev:full`         | Menjalankan Tailwind Watch dan Development Server secara bersamaan | `dev:full`         | Menggunakan **concurrently** untuk menjalankan **esbuild** (dev) dan **tailwind:watch** secara paralel. |

---

#### **Kesimpulan**

Workflow ini dirancang untuk memenuhi kebutuhan:

1. **Development Lokal:** Jalankan `npm run dev:full` untuk pengembangan lengkap.
2. **Pre-release:** Jalankan `npm run deploy:github` untuk menyiapkan demo di GitHub Pages.
3. **Production:** Jalankan `npm run deploy:esp32` untuk deploy ke ESP32-C3.
4. **Pembersihan:** Gunakan `npm run clean` sebelum build baru.

---

### **3. Mekanisme Routing**

#### **1. Konsep Dasar Routing**

- **Tidank menggunakan eksternal Library:** Tidak menggunakan library router eksternal, kita dapat membuat router custom menggunakan JavaScript sederhana..
- **Single HTML File:** Semua halaman disajikan dalam satu file HTML (`index.html`).
- **Hash-based Routing:** Digunakan untuk memastikan rute berfungsi di semua hosting (lokal, GitHub Pages, ESP32-C3).
- **Dynamic Content Rendering:** JavaScript akan menangani perubahan konten berdasarkan hash.

#### **2. Isi File `router.ts`**

File ini akan menangani:

- **Penambahan Rute:** Menyimpan daftar rute (path) dan fungsi callback yang akan dijalankan saat rute diakses.
- **Perubahan Rute:** Memantau perubahan hash (`#`) pada URL.
- **Inisialisasi Router:** Memastikan rute yang sesuai dijalankan saat halaman dimuat atau saat hash berubah.

##### **`src/router.ts`:**

```typescript
export default class Router {
  private routes: { [path: string]: () => void } = {}; // Menyimpan daftar rute

  // Tambahkan rute baru
  addRoute(path: string, callback: () => void): void {
    this.routes[path] = callback;
  }

  // Tangani perubahan rute
  private handleRoute(): void {
    const path = window.location.hash.slice(1) || '/'; // Ambil path setelah #
    if (this.routes[path]) {
      this.routes[path](); // Jalankan callback untuk path
    } else {
      console.error(`Route not found: ${path}`);
    }
  }

  // Inisialisasi router
  init(): void {
    window.addEventListener('hashchange', () => this.handleRoute()); // Saat hash berubah
    window.addEventListener('load', () => this.handleRoute()); // Saat halaman dimuat
  }
}
```

---

#### **3. Cara Menggunakan `Router`**

Setelah Anda membuat `router.ts`, Anda dapat menggunakannya di file `index.ts` untuk mengatur rute aplikasi Anda.

##### **Contoh di `index.ts`:**

```typescript
import Router from './router';

// Inisialisasi router
const router = new Router();

// Tambahkan rute untuk Home
router.addRoute('/', () => {
  document.body.innerHTML = `
    <app-header></app-header>
    <page-home></page-home>
    <app-footer></app-footer>
  `;
});

// Tambahkan rute untuk About
router.addRoute('/about', () => {
  document.body.innerHTML = `
    <app-header></app-header>
    <page-about></page-about>
    <app-footer></app-footer>
  `;
});

// Tambahkan rute untuk Help
router.addRoute('/help', () => {
  document.body.innerHTML = `
    <app-header></app-header>
    <page-help></page-help>
    <app-footer></app-footer>
  `;
});

// Mulai router
router.init();
```

---

#### **4. Penjelasan Implementasi**

##### **a. Struktur Class Router**

- **`routes`:** Objek yang menyimpan pasangan path (string) dan callback (fungsi) untuk setiap rute.
  ```typescript
  private routes: { [path: string]: () => void } = {};
  ```
- **`addRoute`:** Menambahkan rute baru dengan path dan callback.
  ```typescript
  addRoute(path: string, callback: () => void): void {
    this.routes[path] = callback;
  }
  ```
- **`handleRoute`:** Memantau perubahan rute (hash) dan menjalankan callback yang sesuai.
  ```typescript
  private handleRoute(): void {
    const path = window.location.hash.slice(1) || "/";
    if (this.routes[path]) {
      this.routes[path]();
    } else {
      console.error(`Route not found: ${path}`);
    }
  }
  ```
- **`init`:** Memulai router dengan mendengarkan event `hashchange` dan `load`.
  ```typescript
  init(): void {
    window.addEventListener("hashchange", () => this.handleRoute());
    window.addEventListener("load", () => this.handleRoute());
  }
  ```

##### **b. Bagaimana Hash-Based Routing Bekerja**

- Ketika URL berubah, browser tidak mengirimkan bagian setelah hash (`#`) ke server.
- Router mendeteksi perubahan hash (`hashchange`) dan memanggil callback untuk path yang sesuai.

---

#### **5. Kelebihan dan Kekurangan Router Custom**

##### **Kelebihan:**

1. **Sederhana dan Ringan:**
   - Tidak memerlukan dependensi eksternal.
   - Cocok untuk proyek kecil atau sederhana seperti ini.
2. **Mudah Dikustomisasi:**
   - Anda bisa menambahkan fitur tambahan sesuai kebutuhan.

##### **Kekurangan:**

1. **Kurang Fitur:**
   - Tidak memiliki fitur canggih seperti nested routes atau lazy loading.
2. **Manual Error Handling:**
   - Anda perlu menangani error atau fallback routing secara manual.

---

#### **6. Menambahkan Fitur Tambahan**

Jika Anda ingin memperluas kemampuan router, Anda bisa menambahkan fitur seperti:

1. **404 Page (Fallback Route):**

   - Jalankan callback default jika path tidak ditemukan:
     ```typescript
     private handleRoute(): void {
       const path = window.location.hash.slice(1) || "/";
       if (this.routes[path]) {
         this.routes[path]();
       } else {
         this.routes["/404"] && this.routes["/404"](); // Callback untuk 404
       }
     }
     ```

2. **Routing Dinamis:**
   - Untuk path dengan parameter (misalnya `/user/:id`), Anda bisa menambahkan parsing parameter:
     ```typescript
     // Tambahkan parameter parsing ke callback
     this.routes['/user/:id'] = (params: { id: string }) => {
       console.log('User ID:', params.id);
     };
     ```

---

#### **7. Penjelasan Baris per Baris addRoute**

Kode berikut adalah metode **`addRoute`** yang digunakan dalam implementasi routing custom di proyek Anda. Metode ini bertugas untuk **mendaftarkan rute baru** ke dalam sistem router, yang nantinya akan dijalankan saat URL sesuai dengan path yang ditentukan.

```typescript
addRoute(path: string, callback: () => void): void {
  this.routes[path] = callback;
}
```

##### **1. Parameter `path: string`**

- **`path`** adalah parameter bertipe string yang menentukan nama rute yang ingin Anda tambahkan.
- Contoh nilai `path`:
  - `/` → Halaman Home
  - `/about` → Halaman About
  - `/help` → Halaman Help

##### **2. Parameter `callback: () => void`**

- **`callback`** adalah fungsi yang akan dipanggil saat pengguna mengakses rute yang sesuai (berdasarkan path).
- Callback ini menentukan apa yang akan dilakukan oleh aplikasi Anda, misalnya:
  - Merender konten halaman.
  - Mengubah elemen HTML.
  - Memanggil fungsi lain.

##### **3. `this.routes[path] = callback`**

- **`this.routes`** adalah objek yang menyimpan daftar semua rute yang terdaftar dalam router.
- **`this.routes[path]`**:
  - Menyimpan pasangan `path` dan `callback`.
  - Ketika rute diakses (misalnya, URL adalah `http://example.com/#/about`), router akan menjalankan callback yang sesuai, yaitu `this.routes["/about"]`.

##### **4. Tipe Return `void`**

- **`void`** berarti metode ini **tidak mengembalikan nilai apa pun**. Fungsinya hanya untuk menambahkan rute ke objek `routes`.

---

#### **8. Ilustrasi Penyimpanan dalam `this.routes`**

Misalkan Anda memanggil `addRoute` seperti ini:

```typescript
const router = new Router();
router.addRoute('/', () => {
  console.log('Home Page');
});
router.addRoute('/about', () => {
  console.log('About Page');
});
router.addRoute('/help', () => {
  console.log('Help Page');
});
```

Setelah memanggil metode tersebut, objek **`this.routes`** akan terlihat seperti ini:

```typescript
{
  "/": () => { console.log("Home Page"); },
  "/about": () => { console.log("About Page"); },
  "/help": () => { console.log("Help Page"); }
}
```

Ketika pengguna mengakses URL `http://example.com/#/about`, router akan:

1. Membaca hash (`#/about`) dan memotong bagian `#`.
2. Menjalankan fungsi yang terdaftar di `this.routes["/about"]`, yaitu:
   ```typescript
   () => {
     console.log('About Page');
   };
   ```

---

#### **9. Contoh Penggunaan**

**Mendaftarkan Rute:**

Berikut adalah bagaimana Anda menggunakan metode `addRoute`:

```typescript
const router = new Router();

router.addRoute('/', () => {
  document.body.innerHTML = `
    <app-header></app-header>
    <page-home></page-home>
    <app-footer></app-footer>
  `;
});

router.addRoute('/about', () => {
  document.body.innerHTML = `
    <app-header></app-header>
    <page-about></page-about>
    <app-footer></app-footer>
  `;
});

router.addRoute('/help', () => {
  document.body.innerHTML = `
    <app-header></app-header>
    <page-help></page-help>
    <app-footer></app-footer>
  `;
});
```

**Output `this.routes`:**

Setelah rute ditambahkan, `this.routes` akan terlihat seperti ini:

```typescript
{
  "/": () => {
    document.body.innerHTML = `
      <app-header></app-header>
      <page-home></page-home>
      <app-footer></app-footer>
    `;
  },
  "/about": () => {
    document.body.innerHTML = `
      <app-header></app-header>
      <page-about></page-about>
      <app-footer></app-footer>
    `;
  },
  "/help": () => {
    document.body.innerHTML = `
      <app-header></app-header>
      <page-help></page-help>
      <app-footer></app-footer>
    `;
  }
}
```

---

#### **10. Cara Router Menemukan Rute**

Metode lain di dalam router, seperti `handleRoute`, akan membaca hash URL (`window.location.hash`) dan memotong bagian `#`. Kemudian:

1. Mencocokkan path dengan properti di `this.routes`.
2. Menjalankan callback yang sesuai.

**Contoh:**

Jika pengguna mengakses `http://example.com/#/about`:

- `window.location.hash` adalah `#/about`.
- Router membaca path `/about`.
- Router menjalankan `this.routes["/about"]`, yang merender halaman About.

---

#### **11. Manfaat Metode `addRoute`**

1. **Organisasi yang Rapi:**

   - Semua rute dikelola dalam satu tempat (`this.routes`).
   - Mempermudah debugging dan menambah rute baru.

2. **Pemisahan Logika:**

   - Callback untuk setiap rute dipisahkan, sehingga lebih modular.
   - Anda bisa menambahkan logika tambahan di dalam callback tanpa memengaruhi rute lain.

3. **Kemudahan Perluasan:**
   - Anda bisa menambahkan fitur seperti parameter dinamis (`/user/:id`) tanpa mengubah struktur utama.

---

### **4. Deployment Keberbagai Hosting**

#### **a. Hosting Lokal (Development)**

1. Jalankan:
   ```bash
   npm run dev
   ```
2. Akses aplikasi di browser melalui:
   ```
   http://localhost:8080
   ```

#### **b. Hosting Demo (GitHub Pages)**

1. Build untuk pre-release:
   ```bash
   npm run pre-release
   ```
2. Deploy ke GitHub Pages:
   ```bash
   npm run deploy:github
   ```
3. Akses aplikasi melalui:
   ```
   https://username.github.io/smartsenselink
   ```

#### **c. Hosting Produksi (ESP32-C3)**

1. Build untuk produksi:
   ```bash
   npm run build:production
   ```
2. Upload ke ESP32-C3:

   - File `scripts/upload-to-esp32.js` harus mengunggah folder `dist` ke LittleFS atau SPIFFS. Contoh skrip upload:

     ```javascript
     const { exec } = require('child_process');

     exec(
       'arduino-cli upload -p /dev/ttyUSB0 --fqbn esp32:esp32:esp32c3',
       (err, stdout, stderr) => {
         if (err) {
           console.error(`Error: ${stderr}`);
         } else {
           console.log(`Success: ${stdout}`);
         }
       }
     );
     ```

3. Akses aplikasi di ESP32-C3 melalui IP lokal (misalnya: `http://192.168.1.100`).

#### **Alternatif File `scripts/upload-to-esp32.js`**

File `scripts/upload-to-esp32.js` bertanggung jawab untuk mengunggah file hasil build dari folder `dist` ke **ESP32-C3** menggunakan **LittleFS** atau **SPIFFS**. Berikut adalah penjelasan detail dan contoh implementasinya.

---

##### **1. Tujuan File `upload-to-esp32.js`**

- Mengotomatiskan proses upload file hasil build (`index.html`, CSS, JS, dll.) ke sistem file ESP32-C3.
- Menghindari langkah manual seperti menggunakan plugin Arduino IDE untuk mengunggah file.
- Mendukung integrasi dengan workflow deployment (`npm run deploy:esp32`).

---

##### **2. Persyaratan**

Pastikan Anda memiliki:

1. **Tool yang mendukung upload ke ESP32-C3**, seperti:
   - **Arduino CLI**
   - **esptool.py** (untuk flash firmware, termasuk file LittleFS/SPIFFS).
2. **ESP32 LittleFS Plugin** atau library lain yang kompatibel dengan sistem file ESP32.
3. Board ESP32-C3 terhubung ke komputer melalui port USB (misalnya, `/dev/ttyUSB0` atau `COM3`).

---

##### **3. Contoh File `upload-to-esp32.js`**

###### **Menggunakan Arduino CLI**

```javascript
const { exec } = require('child_process');
const path = require('path');

// Path direktori dist
const distPath = path.resolve(__dirname, '../dist');

// Port serial ESP32-C3
const port = 'COM3'; // Sesuaikan dengan port di sistem Anda (misalnya, /dev/ttyUSB0 di Linux)

// Fungsi untuk menjalankan perintah shell
function runCommand(command, description) {
  console.log(description);
  return new Promise((resolve, reject) => {
    exec(command, (err, stdout, stderr) => {
      if (err) {
        console.error(`Error: ${stderr}`);
        reject(err);
      } else {
        console.log(stdout);
        resolve(stdout);
      }
    });
  });
}

// Proses upload
(async function uploadToESP32() {
  try {
    // Langkah 1: Verifikasi Arduino CLI
    await runCommand('arduino-cli version', 'Memverifikasi Arduino CLI...');

    // Langkah 2: Unggah file LittleFS
    const uploadCommand = `arduino-cli upload -p ${port} --fqbn esp32:esp32:esp32c3 --input-dir ${distPath}`;
    await runCommand(uploadCommand, 'Mengunggah file ke ESP32-C3...');

    console.log('🎉 Upload ke ESP32-C3 selesai!');
  } catch (err) {
    console.error('❌ Proses upload gagal:', err);
  }
})();
```

---

##### **4. Menggunakan ESPTool dan LittleFS Uploader**

Jika Anda menggunakan Python dan `esptool.py` bersama LittleFS uploader, berikut adalah skripnya:

###### **Install Library Tambahan**

1. Install **Python** dan **esptool.py**:

   ```bash
   pip install esptool
   ```

2. Install LittleFS uploader tool (opsional, tergantung kebutuhan).

###### **Skrip Upload**

```javascript
const { exec } = require('child_process');
const path = require('path');

// Path folder dist
const distPath = path.resolve(__dirname, '../dist');

// Port serial ESP32-C3
const port = '/dev/ttyUSB0'; // Ganti sesuai port ESP32-C3 Anda

// Fungsi menjalankan perintah shell
function runCommand(command, description) {
  console.log(description);
  return new Promise((resolve, reject) => {
    exec(command, (err, stdout, stderr) => {
      if (err) {
        console.error(`Error: ${stderr}`);
        reject(err);
      } else {
        console.log(stdout);
        resolve(stdout);
      }
    });
  });
}

// Proses Upload
(async function uploadToESP32() {
  try {
    // 1. Format dan siapkan sistem file LittleFS
    const formatCommand = `python3 littlefs-uploader.py --port ${port} --dist ${distPath}`;
    await runCommand(formatCommand, 'Mengunggah file LittleFS ke ESP32-C3...');

    console.log('🎉 File berhasil diunggah ke ESP32-C3!');
  } catch (err) {
    console.error('❌ Upload gagal:', err);
  }
})();
```

---

##### **5. Integrasi dengan Skrip `npm run deploy:esp32`**

Skrip ini dijalankan sebagai bagian dari workflow `npm run deploy:esp32`:

**Skrip di `package.json`:**

```json
"scripts": {
  "build:production": "NODE_ENV=production node esbuild.config.js",
  "deploy:esp32": "npm run build:production && npm run upload:esp32",
  "upload:esp32": "node scripts/upload-to-esp32.js"
}
```

---

##### **6. Cara Menjalankan**

1. Pastikan board ESP32-C3 terhubung ke komputer.
2. Jalankan perintah:
   ```bash
   npm run deploy:esp32
   ```
3. Hasilnya:
   - Aplikasi dibuild menggunakan esbuild.
   - File hasil build diunggah ke ESP32-C3 menggunakan LittleFS/SPIFFS.

---

##### **Kesimpulan**

- File `scripts/upload-to-esp32.js` bertugas mengunggah file ke ESP32-C3 menggunakan alat seperti **Arduino CLI** atau **esptool.py**.
- Skrip ini diintegrasikan ke workflow `npm run deploy:esp32`.
- Pastikan path port serial ESP32-C3 (`COM3` atau `/dev/ttyUSB0`) sesuai dengan sistem Anda.

---

### **5. Tailwind CSS**

Tailwind CSS digunakan untuk styling. Prosesnya mencakup:

1. Tambahkan direktori konten di `tailwind.config.js`:

   ```javascript
   module.exports = {
     content: ['./src/**/*.html', './src/**/*.ts'],
     theme: {
       extend: {},
     },
     plugins: [],
   };
   ```

2. Jalankan:
   - Untuk development (watch mode):
     ```bash
     npm run tailwind:watch
     ```
   - Untuk build:
     ```bash
     npm run tailwind:build
     ```

---

### **6. Lebih Detail terkait esbuild**

#### **1. Perintah Dasar esbuild**

Format dasar perintah esbuild:

```bash
esbuild [input file] [options]
```

Contoh:

```bash
esbuild src/index.html --bundle --outfile=dist/index.html --minify
```

---

#### **2. Opsi-Opsi Penting esbuild**

##### **a. Input dan Output**

1. **`--entry-points [file(s)]`:**

   - Menentukan file **entry point** untuk bundling.
   - Bisa berupa satu file atau array file.
   - Contoh:
     ```bash
     esbuild --entry-points=src/index.ts
     ```

2. **`--outfile [file]`:**

   - Menentukan nama file hasil build.
   - Contoh:
     ```bash
     esbuild src/index.ts --outfile=dist/bundle.js
     ```

3. **`--outdir [directory]`:**

   - Menentukan direktori untuk menyimpan hasil build.
   - Contoh:
     ```bash
     esbuild src/index.ts --outdir=dist
     ```

4. **`--metafile`:**
   - Menghasilkan file metadata build (berguna untuk debugging dan analisis ukuran file).
   - Contoh:
     ```bash
     esbuild src/index.ts --outfile=dist/bundle.js --metafile
     ```

##### **b. Opsi Output**

1. **`--bundle`:**

   - Menggabungkan semua dependensi menjadi satu file.
   - Contoh:
     ```bash
     esbuild src/index.ts --bundle --outfile=dist/bundle.js
     ```

2. **`--minify`:**

   - Memperkecil (minify) file hasil build untuk produksi.
   - Contoh:
     ```bash
     esbuild src/index.ts --bundle --outfile=dist/bundle.js --minify
     ```

3. **`--sourcemap`:**

   - Menambahkan sourcemap untuk debugging.
   - Opsi tambahan:
     - `inline`: Sourcemap disertakan dalam file hasil build.
     - `external`: Sourcemap dibuat di file terpisah.
   - Contoh:
     ```bash
     esbuild src/index.ts --bundle --outfile=dist/bundle.js --sourcemap=inline
     ```

4. **`--public-path`:**
   - Menentukan path dasar untuk file statis.
   - Berguna untuk hosting di subdirektori (misalnya, GitHub Pages).
   - Contoh:
     ```bash
     esbuild src/index.ts --bundle --outfile=dist/bundle.js --public-path=/smartsenselink
     ```

##### **c. Opsi Loader**

1. **`--loader=[ext]:[type]`:**

   - Menentukan cara memuat file dengan ekstensi tertentu.
   - Contoh:
     ```bash
     esbuild src/index.ts --loader:.ts=ts --loader:.css=css
     ```

2. **File Loader yang Didukung:**
   - `.js`, `.jsx`, `.ts`, `.tsx`, `.css`, `.json`, `.txt`, `.png`, `.jpg`, `.svg`, dll.

##### **d. Watch Mode**

1. **`--watch`:**

   - Memantau perubahan file dan otomatis membuild ulang.
   - Contoh:
     ```bash
     esbuild src/index.ts --bundle --outfile=dist/bundle.js --watch
     ```

2. **`--watch=verbose`:**
   - Menampilkan log lebih detail saat watch mode.
   - Contoh:
     ```bash
     esbuild src/index.ts --bundle --outfile=dist/bundle.js --watch=verbose
     ```

##### **e. Target Platform**

1. **`--platform`:**

   - Menentukan platform target (browser, node, atau neutral).
   - Default: `browser`.
   - Contoh:
     ```bash
     esbuild src/index.ts --platform=browser --outfile=dist/bundle.js
     ```

2. **`--target`:**
   - Menentukan target environment (ES5, ES6, atau ESNext).
   - Contoh:
     ```bash
     esbuild src/index.ts --target=es2015 --outfile=dist/bundle.js
     ```

##### **f. Mode Build**

1. **`--define`:**

   - Menyisipkan variabel global (biasanya digunakan untuk environment).
   - Contoh:
     ```bash
     esbuild src/index.ts --bundle --outfile=dist/bundle.js --define:process.env.NODE_ENV='"production"'
     ```

2. **`--format`:**
   - Menentukan format output (iife, cjs, esm).
   - Default: `iife` untuk browser.
   - Contoh:
     ```bash
     esbuild src/index.ts --format=esm --outfile=dist/bundle.js
     ```

---

#### **3. Contoh Perintah Lengkap**

##### **a. Build untuk Development**

```bash
esbuild src/index.ts --bundle --outdir=dist --sourcemap --watch
```

**Penjelasan:**

- `--bundle`: Menggabungkan semua dependensi.
- `--outdir=dist`: Menyimpan hasil build di folder `dist`.
- `--sourcemap`: Menambahkan sourcemap untuk debugging.
- `--watch`: Memantau perubahan file dan membuild ulang secara otomatis.

##### **b. Build untuk Production**

```bash
esbuild src/index.ts --bundle --outdir=dist --minify --public-path=/smartsenselink
```

**Penjelasan:**

- `--minify`: Memperkecil ukuran file hasil build.
- `--public-path=/smartsenselink`: Path file statis untuk hosting di subdirektori.

##### **c. Build untuk Browser dengan ES6**

```bash
esbuild src/index.ts --bundle --outfile=dist/bundle.js --target=es6 --platform=browser
```

**Penjelasan:**

- `--target=es6`: Menghasilkan file ES6.
- `--platform=browser`: Target untuk browser.

---

#### **4. Rekomendasi untuk Proyek SPA**

##### **Perintah Development:**

```bash
esbuild src/index.ts --bundle --outdir=dist --sourcemap --watch
```

##### **Perintah Pre-release (GitHub Pages):**

```bash
esbuild src/index.ts --bundle --outdir=dist --minify --public-path=/smartsenselink
```

##### **Perintah Production (ESP32-C3):**

```bash
esbuild src/index.ts --bundle --outdir=dist --minify --public-path=/
```

---

#### **5. Sumber Daya Tambahan**

Untuk dokumentasi lengkap esbuild, kunjungi:  
[Esbuild Documentation](https://esbuild.github.io/)

### **7. API methode esbuild.build**

`esbuild.build` adalah **metode API JavaScript** yang digunakan untuk menjalankan esbuild secara langsung dari dalam kode JavaScript/TypeScript. Ini merupakan alternatif dari menjalankan **esbuild melalui CLI**, dan biasanya digunakan dalam file konfigurasi seperti `esbuild.config.js`.

---

#### **Apa itu `esbuild.build`?**

`esbuild.build` adalah fungsi bawaan dari paket **esbuild** yang memungkinkan Anda memanggil dan mengatur proses build menggunakan konfigurasi berbasis JavaScript. Ini lebih fleksibel dibandingkan CLI karena Anda bisa menulis logika yang lebih kompleks, seperti:

- Memilih mode build berdasarkan environment.
- Menyusun konfigurasi secara dinamis.
- Menambahkan logika kustom (misalnya logging atau integrasi dengan tools lain).

---

#### **Struktur Dasar `esbuild.build`**

Fungsi ini menerima sebuah **objek konfigurasi** dengan berbagai opsi yang sama dengan opsi CLI, tetapi ditulis dalam format JavaScript.

##### Contoh Dasar:

```javascript
const esbuild = require('esbuild');

esbuild
  .build({
    entryPoints: ['src/index.ts'], // File input utama
    bundle: true, // Menggabungkan semua dependensi
    outdir: 'dist', // Direktori output
    minify: true, // Mengaktifkan minifikasi
    sourcemap: true, // Menambahkan sourcemap untuk debugging
    watch: true, // Mode watch untuk memantau perubahan
    loader: { '.ts': 'ts', '.css': 'css' }, // Loader untuk ekstensi tertentu
    define: { 'process.env.NODE_ENV': '"development"' }, // Variabel global
  })
  .catch(() => process.exit(1)); // Menangani error
```

---

#### **Opsi dalam `esbuild.build`**

Semua opsi yang tersedia di CLI juga bisa digunakan dalam metode `esbuild.build`. Berikut adalah beberapa opsi yang sering digunakan:

1. **Input dan Output:**

   - `entryPoints`: File entry utama untuk build.
     ```javascript
     entryPoints: ['src/index.ts'];
     ```
   - `outfile`: File output tunggal.
     ```javascript
     outfile: 'dist/bundle.js';
     ```
   - `outdir`: Folder tempat semua hasil build akan disimpan.
     ```javascript
     outdir: 'dist';
     ```

2. **Mode Build:**

   - `bundle`: Menggabungkan semua dependensi menjadi satu file.
     ```javascript
     bundle: true;
     ```
   - `minify`: Memperkecil file hasil build.
     ```javascript
     minify: true;
     ```
   - `sourcemap`: Menambahkan sourcemap (inline atau eksternal).
     ```javascript
     sourcemap: true;
     ```

3. **Pengaturan Path:**

   - `publicPath`: Path dasar untuk file statis (misalnya, `/smartsenselink` untuk GitHub Pages).
     ```javascript
     publicPath: '/smartsenselink';
     ```

4. **Loader:**

   - Menentukan bagaimana file dengan ekstensi tertentu dimuat.
     ```javascript
     loader: { ".ts": "ts", ".css": "css" }
     ```

5. **Mode Watch:**

   - Memantau perubahan file secara otomatis.
     ```javascript
     watch: true;
     ```

6. **Define:**
   - Menyisipkan variabel global (misalnya, `process.env.NODE_ENV`).
     ```javascript
     define: { "process.env.NODE_ENV": '"production"' }
     ```

---

#### **Kapan `esbuild.build` Digunakan?**

Gunakan `esbuild.build` jika:

1. Anda memerlukan **file konfigurasi yang dinamis**, misalnya:
   - Mengatur build untuk mode development, pre-release, dan production.
   - Memilih konfigurasi berdasarkan environment.
2. Ingin **mengelola build dalam satu file konfigurasi** tanpa harus menulis perintah CLI di terminal.

---

#### **Contoh File Konfigurasi `esbuild.config.js`**

Berikut adalah contoh penggunaan lengkap `esbuild.build`:

```javascript
const esbuild = require('esbuild');

// Tentukan environment (development, pre-release, production)
const isDev = process.env.NODE_ENV === 'development';
const isPreRelease = process.env.NODE_ENV === 'pre-release';
const isProduction = process.env.NODE_ENV === 'production';

// Konfigurasi build
esbuild
  .build({
    entryPoints: ['src/index.ts'], // File entry utama
    bundle: true, // Gabungkan semua dependensi
    outdir: 'dist', // Direktori output
    minify: isProduction, // Minifikasi hanya untuk production
    sourcemap: isDev, // Sourcemap hanya untuk development
    publicPath: isPreRelease ? '/smartsenselink' : '/', // Path untuk file statis
    watch: isDev, // Watch mode untuk development
    loader: { '.ts': 'ts', '.css': 'css' }, // Loader untuk file tertentu
    define: {
      'process.env.NODE_ENV': JSON.stringify(
        process.env.NODE_ENV || 'development'
      ),
    }, // Variabel global
  })
  .catch(() => process.exit(1)); // Keluar jika ada error
```

**Cara Menjalankan:**

1. Tentukan environment saat menjalankan perintah:
   ```bash
   NODE_ENV=development node esbuild.config.js
   NODE_ENV=production node esbuild.config.js
   ```

---

### **8. Entry Point esbuild**

Perbedaan antara:

1. **`entryPoints: ["src/index.ts"]`**
2. **`entryPoints: ["src/index.html"]`**

terletak pada **file utama (entry point)** yang digunakan oleh **esbuild** untuk memulai proses bundling dan bagaimana file tersebut mempengaruhi strategi pengembangan. Mari kita bahas perbedaannya.

---

#### **1. `entryPoints: ["src/index.ts"]`**

**File `index.ts` digunakan sebagai entry point.**

##### **Strategi Pengembangan:**

- **Cocok untuk Proyek Berbasis JavaScript/TypeScript:**  
  File `index.ts` adalah tempat Anda menulis logika aplikasi, termasuk impor file lain seperti komponen LitElement, CSS, atau gambar.
- **Menghasilkan File JavaScript Tunggal:**  
  Hasil build adalah satu atau beberapa file JavaScript (misalnya, `bundle.js`) yang perlu diimpor secara manual ke dalam file HTML Anda.
- **HTML Manual:**  
  Anda tetap memerlukan file HTML (`index.html`) yang diatur secara manual untuk memuat hasil build JavaScript menggunakan tag `<script>`.

##### **Struktur Folder:**

```plaintext
src/
├── components/
│   ├── header.ts
│   ├── footer.ts
├── index.ts           # Entry point utama (logika aplikasi)
├── styles.css         # File CSS (diimpor dalam TypeScript)
├── index.html         # File HTML statis (manual, tidak dibundel)
```

##### **Cara Kerja:**

1. Esbuild memulai proses dari file `index.ts`.
2. Semua dependensi TypeScript, CSS, dan lainnya diimpor dari dalam `index.ts`.
3. File HTML (`index.html`) tetap diatur manual, misalnya:
   ```html
   <!DOCTYPE html>
   <html lang="en">
     <head>
       <meta charset="UTF-8" />
       <title>My SPA</title>
       <link rel="stylesheet" href="styles.css" />
     </head>
     <body>
       <script src="bundle.js"></script>
     </body>
   </html>
   ```

##### **Kelebihan:**

- **Kendali Penuh pada HTML:** Anda bebas mengatur file HTML tanpa memengaruhi build.
- **Fleksibel:** Cocok untuk aplikasi berbasis JavaScript/TypeScript yang membutuhkan bundling khusus.

##### **Kekurangan:**

- Anda perlu menyiapkan file HTML secara manual.
- Kurang cocok jika Anda ingin membundel HTML, CSS, dan JavaScript secara otomatis.

---

#### **2. `entryPoints: ["src/index.html"]`**

**File `index.html` digunakan sebagai entry point.**

##### **Strategi Pengembangan:**

- **Cocok untuk SPA yang Menggabungkan Semua File:**  
  File HTML adalah pusat proyek, dan semua file (CSS, JS, gambar) diimpor ke dalam HTML menggunakan tag `<script>` atau `<link>`.
- **Menghasilkan File HTML dengan Semua Asset Terintegrasi:**  
  Hasil build adalah file HTML dengan referensi ke file JavaScript/CSS yang dihasilkan oleh esbuild.
- **Bundling Otomatis:**  
  Esbuild akan membaca semua file yang diimpor di dalam `index.html` dan membundelnya.

##### **Struktur Folder:**

```plaintext
src/
├── components/
│   ├── header.ts
│   ├── footer.ts
├── styles.css         # File CSS (diimpor di index.html)
├── index.html         # Entry point utama (memuat CSS & JS)
```

##### **Cara Kerja:**

1. Esbuild memulai proses dari file `index.html`.
2. Semua dependensi yang diimpor di dalam HTML (CSS, JS) otomatis dibundel oleh esbuild.
3. Hasil build adalah versi file `index.html` yang dioptimalkan, dengan referensi file CSS dan JS yang dihasilkan.

##### **Contoh `index.html`:**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>My SPA</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <script src="index.ts" type="module"></script>
  </body>
</html>
```

##### **Kelebihan:**

- **Proses Otomatis:** HTML, CSS, dan JavaScript dibundel otomatis.
- **Sederhana untuk SPA:** Tidak perlu menulis file HTML manual untuk referensi file hasil build.

##### **Kekurangan:**

- Kurang fleksibel jika Anda ingin mengontrol file hasil build secara manual.
- Mungkin membingungkan jika Anda sudah terbiasa menggunakan `index.ts` sebagai entry point.

---

---

##### **1. Penyesuaian Struktur Folder**

Meskipun pendekatan `entryPoints: ["src/index.html"]` menggunakan file HTML sebagai entry point utama, **file `index.ts` tetap diperlukan** untuk menulis logika aplikasi utama. Pada struktur folder yang sebelumnya diberikan, memang belum menyertakan file `index.ts`. Berikut adalah penyesuaian lengkapnya.

```plaintext
src/
├── components/         # Folder untuk komponen LitElement
│   ├── header.ts       # Header aplikasi
│   ├── footer.ts       # Footer aplikasi
├── pages/              # Folder untuk halaman SPA
│   ├── home.ts         # Komponen halaman Home
│   ├── about.ts        # Komponen halaman About
│   ├── help.ts         # Komponen halaman Help
├── styles.css          # File utama Tailwind CSS
├── index.html          # Entry point utama (HTML)
├── index.ts            # Logika aplikasi utama (JavaScript/TypeScript)
```

---

##### **2. Isi File `index.ts`**

File `index.ts` digunakan sebagai pusat logika aplikasi, di mana Anda dapat mengatur:

- **Routing SPA** (hash-based routing).
- **Inisialisasi komponen global** (seperti header, footer, dll.).
- **Import file tambahan** (CSS, halaman, atau komponen).

###### **Contoh Isi `index.ts`:**

```typescript
import './components/header';
import './components/footer';
import './pages/home';
import './pages/about';
import './pages/help';
import Router from './router';

// Inisialisasi router
const router = new Router();
router.addRoute('/', () => {
  document.body.innerHTML = `
    <app-header></app-header>
    <page-home></page-home>
    <app-footer></app-footer>
  `;
});
router.addRoute('/about', () => {
  document.body.innerHTML = `
    <app-header></app-header>
    <page-about></page-about>
    <app-footer></app-footer>
  `;
});
router.addRoute('/help', () => {
  document.body.innerHTML = `
    <app-header></app-header>
    <page-help></page-help>
    <app-footer></app-footer>
  `;
});
router.init();
```

---

##### **3. Isi File `index.html`**

File `index.html` tetap menjadi pusat untuk menyertakan semua asset seperti CSS dan JavaScript.

###### **Contoh `index.html`:**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>My SPA</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <script src="index.ts" type="module"></script>
  </body>
</html>
```

- **`<script src="index.ts" type="module">`:**
  Menyertakan file `index.ts` untuk menjalankan logika aplikasi utama.

---

##### **4. Proses Build dengan esbuild**

Ketika menggunakan `entryPoints: ["src/index.html"]`, **esbuild** akan secara otomatis memproses semua file yang diimpor di dalam HTML, termasuk:

- **CSS** yang diimpor di `<link>`.
- **JavaScript/TypeScript** yang diimpor di `<script>`.

###### **Konfigurasi esbuild:**

```javascript
const esbuild = require('esbuild');

esbuild
  .build({
    entryPoints: ['src/index.html'], // Entry point utama adalah HTML
    outdir: 'dist', // Output folder
    bundle: true, // Gabungkan semua file
    minify: true, // Perkecil file untuk produksi
    sourcemap: true, // Tambahkan sourcemap
    loader: {
      '.ts': 'ts',
      '.css': 'css',
    },
    publicPath: '/', // Path untuk file statis
  })
  .catch(() => process.exit(1));
```

---

##### **5. Keuntungan Menyertakan `index.ts`**

1. **Pemisahan Logika dari HTML:**

   - Semua logika aplikasi dikelola dalam file TypeScript, sementara HTML hanya berfungsi sebagai template.

2. **Kompatibilitas SPA:**

   - File `index.ts` memudahkan Anda mengatur routing, komponen, dan logika SPA secara terorganisir.

3. **Mendukung Modularitas:**
   - File `index.ts` dapat mengimpor komponen, halaman, atau dependensi lain secara modular.

---

##### **6. Kesimpulan**

- Pada pendekatan `entryPoints: ["src/index.html"]`, file **`index.ts` tetap diperlukan** untuk logika aplikasi.
- File HTML hanya bertindak sebagai template untuk memuat file CSS dan JavaScript.
- **Struktur folder** telah diperbarui untuk menyertakan file `index.ts` sebagai pusat logika SPA.

---

#### **Perbedaan Utama**

| **Aspek**                 | **`entryPoints: ["src/index.ts"]`**              | **`entryPoints: ["src/index.html"]`**                     |
| ------------------------- | ------------------------------------------------ | --------------------------------------------------------- |
| **Entry Point Utama**     | `index.ts` (logika aplikasi)                     | `index.html` (template aplikasi)                          |
| **Pendekatan Build**      | Bundling dimulai dari logika aplikasi            | Bundling dimulai dari template HTML                       |
| **Hasil Build**           | File JavaScript (`bundle.js`) dan manual HTML    | File HTML dengan semua asset otomatis diatur              |
| **Kebutuhan HTML Manual** | Ya, Anda harus menulis file HTML secara manual   | Tidak, file HTML otomatis diproses dan dioptimalkan       |
| **Cocok untuk**           | Proyek TypeScript yang membutuhkan fleksibilitas | Proyek SPA sederhana dengan fokus pada HTML sebagai pusat |

---

#### **Rekomendasi untuk Proyek Anda**

##### **Gunakan `entryPoints: ["src/index.html"]` Jika:**

- Anda ingin **menggabungkan semua file otomatis** (HTML, CSS, JS).
- Ingin workflow yang lebih sederhana untuk SPA.

##### **Gunakan `entryPoints: ["src/index.ts"]` Jika:**

- Anda membutuhkan **kendali manual** atas HTML.
- Proyek Anda lebih fokus pada pengelolaan TypeScript/JavaScript.

Untuk proyek SPA ini, **`entryPoints: ["src/index.html"]`** adalah pilihan yang lebih cocok karena sifatnya otomatis dan cocok untuk **hash-based routing** serta hosting di GitHub Pages dan ESP32-C3.

---
