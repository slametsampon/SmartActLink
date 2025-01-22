- [**Kata Pengantar**](#kata-pengantar)
- [**Langkah 1: Struktur Folder**](#langkah-1-struktur-folder)
- [**Langkah 2: Inisialisasi Proyek dengan NPM**](#langkah-2-inisialisasi-proyek-dengan-npm)
- [**Langkah 3: Inisialisasi Git dan Repository**](#langkah-3-inisialisasi-git-dan-repository)
- [**Langkah 4: Instalasi Dependensi**](#langkah-4-instalasi-dependensi)
  - [**1. Install Dependensi Dasar**](#1-install-dependensi-dasar)
  - [**2. Inisialisasi Tailwind CSS**](#2-inisialisasi-tailwind-css)
  - [**3. Konfigurasi File Tailwind CSS**](#3-konfigurasi-file-tailwind-css)
  - [**4. Skrip pada `package.json`**](#4-skrip-pada-packagejson)
    - [**Kompatibilitas Skrip dengan Windows 10/11**](#kompatibilitas-skrip-dengan-windows-1011)
    - [**Rekomendasi untuk Kompatibilitas Lintas Platform**](#rekomendasi-untuk-kompatibilitas-lintas-platform)
    - [**Workflow Skrip dan Penjelasannya**](#workflow-skrip-dan-penjelasannya)
    - [**Rangkuman Workflow dalam Bentuk Tabel**](#rangkuman-workflow-dalam-bentuk-tabel)
  - [**5. Konfigurasi File `esbuild.config.js`**](#5-konfigurasi-file-esbuildconfigjs)
    - [**1. Properti Konfigurasi**](#1-properti-konfigurasi)
    - [**2. Keseluruhan Proses**](#2-keseluruhan-proses)
    - [**Manfaat Konfigurasi**](#manfaat-konfigurasi)
    - [**Keuntungan Menggunakan `esbuild.config.js`:**](#keuntungan-menggunakan-esbuildconfigjs)
- [**Langkah 5: Implementasi Halaman Home, About, Help**](#langkah-5-implementasi-halaman-home-about-help)
  - [1. **Komponen Header**](#1-komponen-header)
  - [2. **Komponen Footer**](#2-komponen-footer)
  - [3. **Halaman Home**](#3-halaman-home)
  - [4. **Halaman Help**](#4-halaman-help)
  - [5. **Halaman About**](#5-halaman-about)
- [**Langkah 6: Mekanisme Routing**](#langkah-6-mekanisme-routing)
  - [**Tips untuk Routing**](#tips-untuk-routing)
- [**Langkah 7: Entry Point dan Index**](#langkah-7-entry-point-dan-index)
  - [**1. `entryPoints: ["src/index.ts"]`**](#1-entrypoints-srcindexts)
  - [**2. `entryPoints: ["src/index.html"]`**](#2-entrypoints-srcindexhtml)
  - [**3. Perbedaan Utama**](#3-perbedaan-utama)
  - [**4. Rekomendasi**](#4-rekomendasi)
- [**Langkah 8: Deployment ke Berbagai Hosting**](#langkah-8-deployment-ke-berbagai-hosting)
- [**Langkah 9: Deploy Aplikasi ke ESP32-C3**](#langkah-9-deploy-aplikasi-ke-esp32-c3)
  - [**Catatan Tambahan**](#catatan-tambahan)
- [**Lebih Detail Terkait esbuild**](#lebih-detail-terkait-esbuild)
  - [**Pendekatan 1: Menggunakan esbuild CLI**](#pendekatan-1-menggunakan-esbuild-cli)
    - [**Kelebihan:**](#kelebihan)
    - [**Kekurangan:**](#kekurangan)
    - [**Rekomendasi untuk Pengembangan SPA**](#rekomendasi-untuk-pengembangan-spa)
  - [**Pendekatan 2: Menggunakan API `esbuild.build`**](#pendekatan-2-menggunakan-api-esbuildbuild)
    - [**Kapan `esbuild.build` Digunakan?**](#kapan-esbuildbuild-digunakan)
    - [**Contoh File Konfigurasi `esbuild.config.js`**](#contoh-file-konfigurasi-esbuildconfigjs)
    - [**Kelebihan:**](#kelebihan-1)
    - [**Kekurangan:**](#kekurangan-1)
  - [**Komparasi dan Rekomendasi esbuild**](#komparasi-dan-rekomendasi-esbuild)
  - [**Rekomendasi untuk Proyek SPA**](#rekomendasi-untuk-proyek-spa)
- [**Referensi**](#referensi)

---

### **Kata Pengantar**

Halo para praktisi dan penggiat teknologi! 👋

Pernahkah Anda ingin menggabungkan teknologi modern seperti **Single Page Application (SPA)** dengan kekuatan **Internet of Things (IoT)**? Atau mungkin Anda ingin mencoba membangun aplikasi yang memadukan **LitElement**, **Tailwind CSS**, **TypeScript**, dan **esbuild** untuk menciptakan SPA yang cepat dan efisien, serta dihosting langsung pada perangkat IoT seperti **ESP32-C3**? Jika ya, artikel ini adalah panduan lengkap yang dirancang khusus untuk Anda!

Dalam artikel ini, kita akan membahas langkah-langkah untuk:

- **Membangun aplikasi SPA** menggunakan **LitElement** sebagai fondasi UI yang modular dan kuat.
- **Memanfaatkan esbuild** sebagai alat build yang cepat dan ringan.
- **Menggunakan Tailwind CSS** untuk styling modern tanpa repot menulis CSS manual.
- **Mengelola workflow pengembangan** yang fleksibel, mencakup hosting lokal untuk development, **GitHub Pages** untuk demo, dan **ESP32-C3** untuk produksi.

Tidak hanya itu, artikel ini juga akan membimbing Anda melewati setiap detail konfigurasi seperti:

- Menyusun file konfigurasi **esbuild** dan `package.json`.
- Membuat routing custom tanpa menggunakan library eksternal.
- Melakukan deployment yang mulus di berbagai platform hosting.

Dengan panduan ini, Anda akan memiliki pemahaman yang solid tentang bagaimana mengintegrasikan teknologi SPA modern dengan perangkat IoT untuk menciptakan aplikasi yang efisien dan fleksibel. Mari kita mulai petualangan ini dan wujudkan inovasi Anda! 🚀

---

1. **Kenapa SPA di IoT?**

Sebagai pengembang, kita sering menghadapi kebutuhan membuat antarmuka web yang responsif, cepat, dan interaktif untuk perangkat IoT seperti ESP32-C3. Dengan pendekatan **SPA**, kita dapat:

1. **Navigasi Tanpa Reload:** Menghindari pemuatan ulang setiap kali berpindah halaman.
2. **Efisiensi Memori:** Mengurangi jumlah file yang diunggah ke sistem file ESP32.
3. **Desain Modular:** Memanfaatkan komponen reusable seperti Header dan Footer.
4. **Modern & Rapi:** Kombinasi LitElement dan Tailwind CSS menghasilkan UI minimalis dengan logika terorganisir.

---

2. **Apa yang Akan Kita Buat?**

Sebuah proyek **SPA multipage** dengan halaman **Home**, **About**, dan **Help**, masing-masing memiliki:

- **Header:** Navbar navigasi antar halaman.
- **Main Content:** Konten utama yang unik untuk setiap halaman.
- **Footer:** Informasi umum di bagian bawah.

Dan yang membuat ini menarik, semua akan dihosting pada **ESP32-C3** sebagai server. Tidak hanya itu, Anda juga dapat menggunakan **GitHub Pages** sebagai opsi alternatif hosting untuk kebutuhan pengembangan.

---

3. **Lingkungan Pengembangan**

Untuk memulai, pastikan Anda memiliki perangkat dan alat berikut:

- **Operating System:** Windows 10.
- **IDE:** Visual Studio Code (VS Code), lengkap dengan plugin seperti:
  - **Tailwind CSS IntelliSense**
  - **ESLint**
  - **Prettier**
- **Perangkat IoT:** ESP32-C3 yang mendukung LittleFS atau SPIFFS sebagai sistem file.

---

4. **Kriteria Desain yang Kita Ikuti**

   - **Framework:** **LitElement** untuk pengembangan komponen web modern.
   - **Style:** **Tailwind CSS** untuk styling cepat dan konsisten.
   - **Programming:** **TypeScript** untuk pengkodean yang lebih terstruktur dan tipe aman.
   - **Building Tool:** **esbuild** untuk proses bundling cepat dan ringan.
   - **Metodologi:** Component-Driven Development (CDD) atau Object-Oriented Programming (OOP) untuk modularitas.
   - **Hosting:** Di **ESP32-C3** untuk penggunaan di perangkat IoT, dengan opsi deploy ke **GitHub Pages**.
   - **Struktur File:** Semua konfigurasi diletakkan di root direktori untuk kesederhanaan pengelolaan.
   - **Navigasi:** Routing manual tanpa library tambahan untuk menghemat ruang penyimpanan di ESP32.

---

5. **Mengapa Anda Harus Mencoba Ini?**

   - **Praktis:** Proyek ini mencakup semua kebutuhan dasar untuk aplikasi IoT yang modern.
   - **Terintegrasi:** Hosting di ESP32 memungkinkan Anda mengontrol aplikasi secara langsung dari perangkat IoT.
   - **Fleksibel:** Dengan GitHub Pages sebagai alternatif hosting, Anda bisa mengembangkan dan berbagi proyek lebih mudah.
   - **Terorganisir:** LitElement dan Tailwind CSS menjaga proyek tetap rapi, konsisten, dan mudah diperbarui.

---

Yuk, kita mulai perjalanan menarik ini! 🚀  
Langkah demi langkah, kita akan menyiapkan SPA yang elegan dan efisien untuk ESP32-C3. Anda siap? Mari kita bangun sesuatu yang luar biasa! 😄
🎉 Dengan routing manual ini, Anda tetap dapat menjalankan aplikasi SPA pada ESP32-C3 dengan ukuran file yang minimal.

Berikut adalah panduan langkah-langkah untuk melakukan konfigurasi dan setup **SPA (Single Page Aplication)** sesuai dengan kriteria yang disebutkan.

---

### **Langkah 1: Struktur Folder**

Dalam pengembangan aplikasi Single Page Application (SPA) berbasis **LitElement**, **Tailwind CSS**, dan **TypeScript**, organisasi struktur folder menjadi hal yang esensial untuk memastikan keteraturan proyek. Berikut adalah struktur folder awal yang digunakan:

```
SPA/
├── src/
│   ├── components/    # Folder untuk komponen modular seperti Header, Footer, dll.
│   ├── pages/         # Folder untuk halaman Home, About, dan Help
│   ├── index.html     # File HTML utama yang menjadi entry point aplikasi
│   ├── styles.css     # File utama untuk konfigurasi dan implementasi Tailwind CSS
├── esbuild.config.js  # File konfigurasi untuk esbuild
├── package.json       # File konfigurasi proyek untuk NPM dan dependensi
├── tailwind.config.js # File konfigurasi untuk Tailwind CSS
├── tsconfig.json      # File konfigurasi untuk TypeScript
├── .gitignore         # File untuk mendefinisikan direktori atau file yang diabaikan oleh Git
├── README.md          # Dokumentasi proyek yang memberikan gambaran umum aplikasi
```

**Penjelasan Struktur:**

- **`src/`:** Direktori utama yang berisi semua file sumber aplikasi.
  - **`components/`:** Menyimpan komponen-komponen kecil yang dapat digunakan kembali, seperti navigasi, footer, dan elemen UI lainnya.
  - **`pages/`:** Menyimpan file untuk setiap halaman (Home, About, Help) yang di-render dalam aplikasi.
- **Konfigurasi Proyek:** File seperti `esbuild.config.js`, `tailwind.config.js`, dan `tsconfig.json` digunakan untuk mengatur toolchain dan alur kerja proyek.
- **`package.json`:** Berfungsi sebagai pusat manajemen dependensi dan skrip untuk NPM.
- **`.gitignore`:** Digunakan untuk memastikan bahwa file atau folder yang tidak relevan (seperti `node_modules/` atau file build) tidak diunggah ke repository Git.

Struktur ini memberikan dasar yang kuat untuk pengembangan aplikasi SPA yang terorganisir dan scalable.

---

### **Langkah 2: Inisialisasi Proyek dengan NPM**

Untuk memulai proyek SPA, langkah pertama adalah menginisialisasi proyek menggunakan **Node Package Manager (NPM)**. Proses ini menghasilkan file `package.json` yang akan berfungsi sebagai pusat manajemen dependensi dan skrip proyek.

**Langkah-Langkah:**

1. Buka terminal, lalu arahkan ke folder tempat Anda ingin menyimpan proyek. Buat direktori baru untuk proyek:
   ```bash
   mkdir SPA
   cd SPA
   ```
2. Jalankan perintah berikut untuk menginisialisasi proyek dengan pengaturan default:
   ```bash
   npm init -y
   ```
   Perintah ini akan membuat file `package.json` di dalam direktori proyek Anda.

**Penjelasan:**

- **File `package.json`:** File ini secara otomatis dihasilkan oleh perintah `npm init -y`. Isinya mencakup metadata proyek seperti nama, versi, deskripsi, skrip build, dan daftar dependensi.
- **Manfaat:** Dengan `package.json`, Anda dapat mengelola library pihak ketiga, menjalankan skrip otomatis, dan mengatur alur kerja pengembangan dengan lebih mudah.

Langkah ini adalah fondasi untuk semua konfigurasi dan instalasi dependensi proyek di tahap selanjutnya.

---

### **Langkah 3: Inisialisasi Git dan Repository**

Setelah proyek diinisialisasi dengan NPM, langkah berikutnya adalah mengelola kode sumber menggunakan **Git**. Dengan Git, Anda dapat melacak perubahan kode, berkolaborasi dengan tim, dan mengintegrasikan proyek dengan platform seperti GitHub.

**Langkah-Langkah:**

1. **Inisialisasi Repository Git:**

   - Jalankan perintah berikut di root folder proyek:
     ```bash
     git init
     ```
     Ini akan membuat repository lokal di direktori proyek Anda.

2. **Buat File `.gitignore`:**

   - File `.gitignore` digunakan untuk menentukan file atau folder yang tidak ingin Anda tambahkan ke repository. Buat file ini di root folder proyek dengan isi sebagai berikut:
     ```plaintext
     node_modules/
     dist/
     .env
     ```
     - **`node_modules/`:** Folder yang berisi library pihak ketiga.
     - **`dist/`:** Folder hasil build yang dihasilkan oleh esbuild.
     - **`.env`:** File yang biasanya berisi variabel lingkungan sensitif seperti kunci API.

3. **Commit Awal:**

   - Tambahkan semua file ke staging area:
     ```bash
     git add .
     ```
   - Buat commit awal untuk menyimpan semua file yang ada:
     ```bash
     git commit -m "Initial commit"
     ```

4. **Hubungkan ke Repository GitHub:**
   - Buat repository baru di GitHub (misalnya, dengan nama `SPA`).
   - Hubungkan repository lokal dengan repository GitHub menggunakan perintah berikut:
     ```bash
     git remote add origin https://github.com/username/SPA.git
     git branch -M main
     git push -u origin main
     ```

**Penjelasan:**

- **`git init`:** Membuat repository lokal untuk melacak perubahan kode.
- **`.gitignore`:** Menghindari file yang tidak diperlukan dalam repository.
- **Commit Awal:** Memastikan semua file proyek terarsip sebagai checkpoint pertama.
- **Repository GitHub:** Platform untuk kolaborasi, manajemen versi, dan deployment melalui GitHub Pages.

Langkah ini memastikan bahwa proyek Anda siap untuk kolaborasi dan terintegrasi dengan alur kerja berbasis Git.

---

### **Langkah 4: Instalasi Dependensi**

Pada tahap ini, kita akan memasang semua dependensi yang diperlukan untuk mengembangkan aplikasi SPA berbasis **LitElement**, **Tailwind CSS**, dan **TypeScript**. Instalasi ini mencakup pengaturan toolchain, konfigurasi file, dan penambahan skrip build agar proyek dapat dibuild dengan lancar.

---

#### **1. Install Dependensi Dasar**

Jalankan perintah berikut di terminal untuk memasang dependensi inti:

```bash
npm install lit tailwindcss esbuild typescript
```

**Penjelasan:**

- **`lit`:** Library untuk membangun komponen web berbasis LitElement.
- **`tailwindcss`:** Framework utility-first untuk styling.
- **`esbuild`:** Alat build yang cepat untuk menggabungkan, meminifikasi, dan membundle file proyek.
- **`typescript`:** Superset JavaScript yang menambahkan dukungan untuk tipe statis, meningkatkan keandalan dan maintainability kode.

---

#### **2. Inisialisasi Tailwind CSS**

Setelah dependensi terpasang, jalankan perintah berikut untuk menginisialisasi konfigurasi Tailwind CSS:

```bash
npx tailwindcss init
```

Perintah ini akan menghasilkan file `tailwind.config.js` dengan konfigurasi default. File ini akan digunakan untuk menentukan direktori konten dan pengaturan tema dalam proyek Anda.

---

#### **3. Konfigurasi File Tailwind CSS**

**Tailwind CSS** adalah framework utility-first yang dirancang untuk mempercepat proses styling dalam pengembangan web. Framework ini memungkinkan pengembang mengatur tampilan elemen secara langsung menggunakan kelas-kelas bawaan yang disediakan, tanpa perlu menulis CSS secara manual. Dengan pendekatan ini, proses styling menjadi lebih cepat, fleksibel, dan terorganisir.

Proyek ini memanfaatkan **Tailwind CSS** untuk menghasilkan tampilan modern dan responsif dengan langkah-langkah implementasi sebagai berikut:

---

**1. Membuat File `styles.css`**

File `styles.css` adalah pusat konfigurasi untuk mengintegrasikan fitur-fitur utama dari Tailwind CSS. Buat file `src/styles.css` dan tambahkan konfigurasi berikut:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

**Penjelasan:**

- **`@tailwind base`:** Mengimpor reset CSS default dari Tailwind untuk menjaga konsistensi tampilan di berbagai browser.
- **`@tailwind components`:** Menyediakan komponen bawaan seperti tombol, form, dan lainnya.
- **`@tailwind utilities`:** Menyertakan kelas-kelas utility seperti margin, padding, warna, dan sebagainya.

---

**2. Konfigurasi File `tailwind.config.js`**

Setelah mengatur file `styles.css`, Anda perlu mengonfigurasi file `tailwind.config.js`. File ini memastikan Tailwind hanya memproses kelas yang digunakan dalam proyek untuk mengurangi ukuran file CSS final.

**Contoh isi `tailwind.config.js`:**

```javascript
module.exports = {
  content: ['./src/**/*.html', './src/**/*.ts'], // Lokasi file yang menggunakan Tailwind
  theme: {
    extend: {}, // Memperluas tema default
  },
  plugins: [], // Menambahkan plugin Tailwind (opsional)
};
```

**Penjelasan:**

- **`content`:** Path file HTML atau TypeScript yang akan dipindai untuk kelas Tailwind.
- **`theme.extend`:** Digunakan untuk menambahkan atau mengubah tema default, seperti warna khusus atau font tambahan.
- **`plugins`:** Menambahkan fitur tambahan, seperti plugin typography atau form.

---

#### **4. Skrip pada `package.json`**

Kita akan mengatur skrip di `package.json` untuk mendukung kebutuhan development, pre-release, production, dan deployment.

**Isi File `package.json`:**

```json
{
  "name": "SPA",
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

##### **Kompatibilitas Skrip dengan Windows 10/11**

Mari kita ulas kompatibilitas setiap skrip di `package.json`:

**a. Skrip `npm run dev`**

- Skrip ini menjalankan esbuild dan http-server.
- **Kompatibel di Windows 10/11:**  
   ✅ Tidak ada masalah selama Node.js dan npm sudah terpasang.

  **b. Skrip `npm run tailwind:watch`**

- Skrip ini memanggil Tailwind CLI untuk memonitor perubahan file.
- **Kompatibel di Windows 10/11:**  
   ✅ Bekerja langsung jika Tailwind CSS sudah terpasang melalui npm.

  **c. Skrip `npm run pre-release` dan `npm run deploy:github`**

- Skrip ini menjalankan esbuild untuk build pre-release dan mengunggah hasilnya ke GitHub Pages menggunakan `gh-pages`.
- **Kompatibel di Windows 10/11:**  
   ✅ Pastikan Anda telah menginstal Git dan mengatur akses ke repository GitHub.

  **d. Skrip `npm run build:production` dan `npm run deploy:esp32`**

- Skrip ini membuild aplikasi dan mengunggahnya ke ESP32-C3.
- **Kompatibilitas di Windows 10/11:**

  - ✅ Esbuild: Tidak ada masalah.
  - ⚠️ Upload ke ESP32-C3:
    - Pastikan tool seperti **arduino-cli** atau **esptool.py** kompatibel dengan Windows dan sudah dikonfigurasi.

  **e. Skrip Gabungan**

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

##### **Rekomendasi untuk Kompatibilitas Lintas Platform**

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

##### **Workflow Skrip dan Penjelasannya**

Agar proses pengembangan dan deployment aplikasi SPA menjadi lebih terstruktur, kita menggunakan berbagai skrip dalam `package.json`. Setiap workflow memiliki tujuan yang spesifik, mulai dari development di lokal, pembuatan build untuk pre-release (demo di GitHub Pages), hingga deployment ke perangkat ESP32-C3. Penjelasan di bawah ini mencakup tujuan setiap workflow, cara menjalankannya, dan langkah-langkah teknis yang terlibat.

---

**1. Development**

**Tujuan:**  
Workflow ini dirancang untuk mempermudah proses pengembangan di lingkungan lokal. Skrip ini memungkinkan Anda:

- **Memantau perubahan Tailwind CSS:** Setiap perubahan kelas CSS akan diterapkan secara real-time.
- **Menjalankan server lokal:** Anda dapat langsung melihat perubahan aplikasi di browser melalui server lokal di `http://localhost:8080`.

**Skrip:**

```json
"dev": "NODE_ENV=development node esbuild.config.js && npm run start:local",
"start:local": "http-server dist --push-state",
"tailwind:watch": "tailwindcss -i ./src/styles.css -o ./dist/styles.css --watch"
```

**Cara Kerja:**

1. Jalankan **`npm run tailwind:watch`** untuk memantau perubahan CSS.
2. Jalankan **`npm run dev`** untuk membuild aplikasi dengan mode development menggunakan **esbuild** dan menyajikannya melalui server lokal.
3. Server dapat diakses melalui `http://localhost:8080`.

**Catatan Tambahan:**

- Mode development akan menghasilkan sourcemap untuk debugging yang lebih mudah.
- File CSS di-update secara otomatis dengan Tailwind CLI dalam mode watch.

---

**2. Pre-release**

**Tujuan:**  
Workflow ini bertujuan untuk menghasilkan build pre-release yang akan digunakan untuk testing atau demo di GitHub Pages. Dalam tahap ini:

- Build disiapkan dengan konfigurasi khusus untuk **hosting di subdirektori** (GitHub Pages).
- Anda dapat mengunggah hasil build langsung ke branch `gh-pages`.

**Skrip:**

```json
"pre-release": "NODE_ENV=pre-release node esbuild.config.js",
"deploy:github": "npm run pre-release && gh-pages -d dist"
```

**Cara Kerja:**

1. Jalankan **`npm run pre-release`** untuk membuild aplikasi dengan `publicPath: "/SPA"` yang cocok untuk subdirektori di GitHub Pages.
2. Gunakan **`npm run deploy:github`** untuk mengunggah folder `dist` ke branch `gh-pages`.

**Catatan Tambahan:**

- Setelah deploy, aplikasi demo dapat diakses melalui URL:
  ```
  https://username.github.io/SPA
  ```

---

**3. Production**

**Tujuan:**  
Workflow ini digunakan untuk membuat build final yang akan dihosting di perangkat IoT **ESP32-C3**. Build ini dioptimalkan untuk performa terbaik dengan:

- Minifikasi file.
- Konfigurasi tanpa path tambahan (untuk root direktori).

**Skrip:**

```json
"build:production": "NODE_ENV=production node esbuild.config.js",
"deploy:esp32": "npm run build:production && npm run upload:esp32",
"upload:esp32": "node scripts/upload-to-esp32.js"
```

**Cara Kerja:**

1. Jalankan **`npm run build:production`** untuk membuild aplikasi dengan path root.
2. Jalankan **`npm run deploy:esp32`** untuk mengunggah hasil build ke ESP32-C3 menggunakan skrip `upload-to-esp32.js`.

**Catatan Tambahan:**

- Pastikan perangkat ESP32-C3 sudah terhubung ke komputer dengan port USB yang sesuai.
- Skrip `upload-to-esp32.js` bertanggung jawab untuk mengunggah file ke sistem file ESP32 (LittleFS atau SPIFFS).

---

**4. Utility**

**Tujuan:**  
Skrip ini digunakan untuk membersihkan folder `dist` sebelum membuat build baru. Dengan ini, Anda dapat memastikan file hasil build sebelumnya tidak tercampur dengan file baru.

**Skrip:**

```json
"clean": "rimraf dist"
```

**Cara Kerja:**

1. Jalankan **`npm run clean`** untuk menghapus folder `dist`.
2. Folder `dist` akan dibuat ulang saat Anda menjalankan salah satu workflow build.

**Catatan Tambahan:**

- Gunakan skrip ini sebelum setiap build jika ada perubahan besar pada konfigurasi.

---

**5. Tailwind CSS**

- **Tujuan:**  
  Mengatur file **CSS** menggunakan Tailwind CSS dalam mode development atau production.

**Tailwind CSS** adalah framework utility-first yang dirancang untuk mempercepat proses styling dengan menggunakan kelas-kelas bawaan tanpa perlu menulis CSS secara manual. Dalam proyek ini, Tailwind CSS diintegrasikan ke dalam workflow pengembangan untuk mendukung dua mode utama: **development (watch mode)** dan **production (build mode)**. Selain itu, proses ini dapat digabungkan dengan esbuild untuk menciptakan workflow penuh yang efisien.

---

- **1. Skrip Tailwind CSS**

Untuk mendukung penggunaan Tailwind CSS, tambahkan skrip berikut ke dalam `package.json`:

```json
"scripts": {
  "tailwind:build": "tailwindcss -i ./src/styles.css -o ./dist/styles.css --minify",
  "tailwind:watch": "tailwindcss -i ./src/styles.css -o ./dist/styles.css --watch"
}
```

**Penjelasan Skrip:**

1. **`tailwind:build`:**  
   Digunakan untuk menghasilkan file CSS final yang telah diminifikasi. Skrip ini cocok untuk digunakan dalam mode produksi.
2. **`tailwind:watch`:**  
   Digunakan untuk memantau perubahan pada file sumber CSS selama pengembangan. Tailwind akan secara otomatis menghasilkan file CSS baru setiap kali ada perubahan.

---

- **2. Cara Menjalankan Tailwind CSS**

Setelah konfigurasi selesai, Tailwind CSS dapat dijalankan dalam dua mode berikut:

- **a. Watch Mode (Untuk Development):**  
  Gunakan watch mode untuk memantau perubahan selama pengembangan. Tailwind akan menghasilkan file CSS baru secara otomatis.

  ```bash
  npm run tailwind:watch
  ```

- **b. Build Mode (Untuk Produksi):**  
  Mode ini digunakan untuk menghasilkan file CSS yang diminifikasi dan optimal untuk produksi.
  ```bash
  npm run tailwind:build
  ```

**Catatan Penting:**

- **Watch Mode** sangat cocok untuk pengembangan karena pembaruan styling dapat dilihat secara real-time tanpa menjalankan perintah build manual.
- **Build Mode** wajib digunakan untuk produksi karena menghasilkan file CSS yang lebih kecil dengan hanya menyertakan kelas yang digunakan.

---

- **3. Mengintegrasikan Tailwind CSS dengan Workflow Pengembangan**

Untuk mendukung workflow pengembangan penuh, Anda dapat menggabungkan proses **Tailwind CSS (watch mode)** dengan **esbuild**. Hal ini memungkinkan Anda untuk menjalankan keduanya secara paralel, sehingga aplikasi dapat di-build sekaligus memantau perubahan secara real-time.

Tambahkan skrip berikut ke dalam `package.json`:

```json
"scripts": {
  "dev:full": "concurrently \"npm run tailwind:watch\" \"npm run dev\""
}
```

**Penjelasan Skrip:**

- **`dev:full`:** Skrip ini menjalankan `tailwind:watch` untuk memantau perubahan CSS dan `dev` untuk menjalankan esbuild secara paralel.
- **`concurrently`:** Paket yang digunakan untuk menjalankan beberapa proses dalam satu perintah.

**Cara Menjalankan Workflow Full Development:**

1. Jalankan perintah berikut untuk menjalankan proses pengembangan penuh:
   ```bash
   npm run dev:full
   ```
2. Tailwind CSS akan memantau perubahan styling, sementara esbuild akan mem-build aplikasi secara otomatis setiap kali ada perubahan pada file sumber.

---

##### **Rangkuman Workflow dalam Bentuk Tabel**

| **Skrip**                  | **Tujuan**                                                         | **Perintah**       | **Penjelasan**                                                                                          |
| -------------------------- | ------------------------------------------------------------------ | ------------------ | ------------------------------------------------------------------------------------------------------- |
| `npm run dev`              | Membuild aplikasi dan menjalankan server lokal (development)       | `dev`              | Membuild aplikasi menggunakan **esbuild** dalam mode development.                                       |
| `npm run start:local`      | Menjalankan server lokal tanpa membuild                            | `start:local`      | Menggunakan **http-server** untuk menyajikan folder `dist` di `http://localhost:8080`.                  |
| `npm run pre-release`      | Membuild aplikasi untuk GitHub Pages (pre-release)                 | `pre-release`      | Membuild aplikasi dengan path `/SPA` untuk kompatibilitas GitHub Pages.                                 |
| `npm run deploy:github`    | Membuild dan mengunggah hasil build ke GitHub Pages                | `deploy:github`    | Menggunakan package **gh-pages** untuk mengunggah folder `dist` ke branch `gh-pages`.                   |
| `npm run build:production` | Membuild aplikasi untuk ESP32-C3 (production)                      | `build:production` | Membuild aplikasi tanpa path tambahan (sesuai root direktori hosting ESP32-C3).                         |
| `npm run deploy:esp32`     | Membuild dan mengunggah hasil build ke ESP32-C3                    | `deploy:esp32`     | Menjalankan build production, lalu mengunggah file ke ESP32-C3 melalui skrip custom.                    |
| `npm run tailwind:build`   | Membuild file CSS untuk production                                 | `tailwind:build`   | Menggunakan Tailwind CLI untuk menghasilkan file CSS final (minifikasi).                                |
| `npm run tailwind:watch`   | Memantau perubahan CSS selama pengembangan                         | `tailwind:watch`   | Menjalankan Tailwind CLI dalam mode watch, sehingga setiap perubahan pada CSS langsung terlihat.        |
| `npm run clean`            | Membersihkan folder `dist`                                         | `clean`            | Menghapus folder `dist` agar build baru tidak tercampur dengan file lama.                               |
| `npm run dev:full`         | Menjalankan Tailwind Watch dan Development Server secara bersamaan | `dev:full`         | Menggunakan **concurrently** untuk menjalankan **esbuild** (dev) dan **tailwind:watch** secara paralel. |

---

#### **5. Konfigurasi File `esbuild.config.js`**

Kita akan membuat `esbuild.config.js` untuk menangani **stage development**, **pre-release**, dan **production** dengan path yang sesuai untuk setiap lingkungan hosting.

**Isi File `esbuild.config.js`:**

```javascript
const esbuild = require('esbuild');

// Tentukan environment berdasarkan argumen command line
const isDev = process.env.NODE_ENV === 'development';
const isPreRelease = process.env.NODE_ENV === 'pre-release';
const isProduction = process.env.NODE_ENV === 'production';

// Tentukan publicPath berdasarkan hosting
let publicPath = '/';
if (isPreRelease) publicPath = '/SPA'; // Untuk GitHub Pages
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

Konfigurasi ini adalah bagian dari **esbuild** yang digunakan untuk membangun aplikasi SPA berbasis **TypeScript**, **Tailwind CSS**, dan **HTML**. Berikut adalah penjelasan setiap properti dalam konfigurasi tersebut:

---

##### **1. Properti Konfigurasi**

1. **`entryPoints: ['src/index.html']`**

- **Fungsi:** Menentukan file utama yang menjadi titik awal build.
- **Nilai:**
  - `['src/index.html']` menunjukkan bahwa proses build dimulai dari file `index.html` yang berada di dalam folder `src`.
  - Esbuild akan membaca semua dependensi yang diimpor dalam file HTML ini (seperti file CSS, TypeScript, atau JavaScript).

2. **`outdir: 'dist'`**

- **Fungsi:** Menentukan direktori tempat semua file hasil build akan disimpan.
- **Nilai:**
  - `'dist'` berarti hasil build akan disimpan di folder `dist` pada root proyek.

3. **`bundle: true`**

- **Fungsi:** Menggabungkan semua dependensi dan file yang diimpor menjadi satu atau beberapa file yang dioptimalkan.
- **Manfaat:**
  - Mengurangi jumlah request HTTP untuk memuat file.
  - Membuat hasil build lebih efisien.

4. **`minify: !isDev`**

- **Fungsi:** Menentukan apakah file hasil build akan diminifikasi.
- **Nilai:**
  - `!isDev` berarti:
    - Jika **`isDev` bernilai `true`** (development mode), **minify akan `false`** (tidak diminifikasi).
    - Jika **`isDev` bernilai `false`** (production mode), **minify akan `true`** (file diminifikasi).
- **Manfaat:**
  - Mode development: File tidak diminifikasi untuk mempermudah debugging.
  - Mode produksi: File diminifikasi untuk mengurangi ukuran dan meningkatkan performa.

5. **`sourcemap: isDev`**

- **Fungsi:** Menentukan apakah sourcemap akan dibuat.
- **Nilai:**
  - `isDev` berarti:
    - Jika **`isDev` bernilai `true`** (development mode), sourcemap akan dihasilkan.
    - Jika **`isDev` bernilai `false`** (production mode), sourcemap tidak akan dibuat.
- **Manfaat:**
  - Mode development: Sourcemap membantu melacak sumber kode asli selama debugging.
  - Mode produksi: Tidak perlu sourcemap untuk mengurangi ukuran file.

6. **`publicPath: publicPath`**

- **Fungsi:** Menentukan path dasar untuk semua asset (seperti CSS, JavaScript, gambar).
- **Nilai:**
  - `publicPath` adalah variabel yang biasanya ditentukan berdasarkan environment:
    - Pada GitHub Pages: `/subdirectory/`
    - Pada hosting lokal atau produksi: `/`
- **Manfaat:**
  - Memastikan referensi asset bekerja dengan benar, terutama saat hosting di subdirektori.

7. **`loader: { '.ts': 'ts', '.css': 'css' }`**

- **Fungsi:** Menentukan cara esbuild memproses file dengan ekstensi tertentu.
- **Nilai:**
  - `'.ts': 'ts'`: File TypeScript (`.ts`) akan diproses menggunakan loader TypeScript.
  - `'.css': 'css'`: File CSS akan diproses menggunakan loader CSS.
- **Manfaat:**
  - Loader memungkinkan esbuild memahami dan menggabungkan file-file non-JavaScript seperti TypeScript atau CSS.

8. **`watch: isDev`**

- **Fungsi:** Menentukan apakah mode watch akan diaktifkan.
- **Nilai:**
  - `isDev` berarti:
    - Jika **`isDev` bernilai `true`** (development mode), watch mode akan diaktifkan.
    - Jika **`isDev` bernilai `false`** (production mode), watch mode tidak diaktifkan.
- **Manfaat:**
  - Mode watch memantau perubahan file dan secara otomatis membuild ulang aplikasi tanpa perlu menjalankan perintah manual.

9. **`logLevel: 'info'`**

- **Fungsi:** Menentukan tingkat detail log yang ditampilkan selama proses build.
- **Nilai:**
  - `'info'` berarti esbuild akan menampilkan log informasi penting, seperti file yang sedang dibuild atau waktu proses build.
- **Manfaat:**
  - Membantu memantau status build tanpa terlalu banyak noise (seperti log debug).

---

##### **2. Keseluruhan Proses**

1. **Build Aplikasi:**
   - Esbuild memulai dari file `index.html`, membaca semua dependensi, dan memprosesnya sesuai konfigurasi.
2. **Hasil Build:**
   - Semua file diproses (minify, bundling) dan disimpan di folder `dist`.
3. **Mode Watch (Opsional):**
   - Jika `isDev` bernilai `true`, esbuild akan memantau perubahan file dan membuild ulang secara otomatis.
4. **Error Handling:**
   - Jika terjadi kesalahan selama proses build, aplikasi akan keluar dengan kode status `1` (`process.exit(1)`).

---

##### **Manfaat Konfigurasi**

- **Dynamic Environment:** Konfigurasi ini menggunakan variabel `isDev` dan `publicPath` untuk mengelola perbedaan antara mode development dan produksi.
- **Efisiensi Build:** Dengan minifikasi dan bundling, file hasil build lebih kecil dan optimal untuk produksi.
- **Kemudahan Debugging:** Mode development dilengkapi dengan sourcemap dan watch mode untuk mendukung pengembangan yang cepat.

---

##### **Keuntungan Menggunakan `esbuild.config.js`:**

1. **Fleksibilitas:** Memungkinkan Anda untuk menambahkan pengaturan build yang lebih kompleks.
2. **Modularitas:** Memisahkan logika build dari skrip NPM, menjaga kebersihan `package.json`.
3. **Kemudahan Mode Watch:** Memudahkan Anda untuk mengaktifkan watch mode dengan flag tambahan.

---

Dengan instalasi dependensi dan konfigurasi ini, proyek Anda siap untuk melanjutkan ke tahap pengembangan dan deployment. Anda dapat memilih untuk menggunakan perintah CLI atau file `esbuild.config.js`, tergantung pada kompleksitas proyek.

---

### **Langkah 5: Implementasi Halaman Home, About, Help**

#### 1. **Komponen Header**

Buat file `src/components/header.ts`:

```typescript
import { LitElement, html, css } from 'lit';

export class HeaderComponent extends LitElement {
  static styles = css`
    nav {
      @apply bg-blue-600 text-white p-4;
    }
    a {
      @apply text-white mx-2 hover:underline;
    }
  `;

  render() {
    return html`
      <nav>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/help">Help</a>
      </nav>
    `;
  }
}
customElements.define('app-header', HeaderComponent);
```

[Lebih lanjut dengan Routing](#langkah-7-mekanisme-routing)

#### 2. **Komponen Footer**

Buat file `src/components/footer.ts`:

```typescript
import { LitElement, html, css } from 'lit';

export class FooterComponent extends LitElement {
  static styles = css`
    footer {
      @apply bg-gray-800 text-white text-center p-4;
    }
  `;

  render() {
    return html`
      <footer>
        <p>&copy; 2025 SPA (Single Page Aplication)</p>
      </footer>
    `;
  }
}
customElements.define('app-footer', FooterComponent);
```

#### 3. **Halaman Home**

Buat file `src/pages/home.ts`:

```typescript
import { LitElement, html, css } from 'lit';

export class HomePage extends LitElement {
  static styles = css`
    main {
      @apply p-8;
    }
  `;

  render() {
    return html`
      <app-header></app-header>
      <main>
        <h1>Welcome to SPA (Single Page Aplication)</h1>
        <p>This is the home page.</p>
      </main>
      <app-footer></app-footer>
    `;
  }
}
customElements.define('page-home', HomePage);
```

#### 4. **Halaman Help**

Buat file `src/pages/help.ts`:

```typescript
import { LitElement, html, css } from 'lit';

export class HelpPage extends LitElement {
  static styles = css`
    main {
      @apply p-8;
    }
    h1 {
      @apply text-2xl font-bold mb-4;
    }
    p {
      @apply mb-2;
    }
  `;

  render() {
    return html`
      <app-header></app-header>
      <main>
        <h1>Help & Support</h1>
        <p>If you need assistance, refer to the following resources:</p>
        <ul>
          <li>
            <a href="https://github.com/username/SPA/wiki" target="_blank"
              >Documentation</a
            >
          </li>
          <li><a href="mailto:support@SPA.com">Email Support</a></li>
          <li><a href="/faq">Frequently Asked Questions (FAQ)</a></li>
        </ul>
      </main>
      <app-footer></app-footer>
    `;
  }
}
customElements.define('page-help', HelpPage);
```

---

#### 5. **Halaman About**

Buat file `src/pages/about.ts`:

```typescript
import { LitElement, html, css } from 'lit';

export class AboutPage extends LitElement {
  static styles = css`
    main {
      @apply p-8;
    }
  `;

  render() {
    return html`
      <app-header></app-header>
      <main>
        <h1>About SPA (Single Page Aplication)</h1>
        <p>This application is powered by ESP32-C3.</p>
      </main>
      <app-footer></app-footer>
    `;
  }
}
customElements.define('page-about', AboutPage);
```

---

### **Langkah 6: Mekanisme Routing**

Aplikasi **Single Page Application (SPA)** membutuhkan mekanisme routing yang efisien untuk berpindah antar halaman tanpa memuat ulang dokumen. Dalam proyek ini, routing dilakukan tanpa library eksternal, memanfaatkan pendekatan **hash-based routing** dan JavaScript murni. Sub-bab berikut akan menjelaskan konsep dasar routing, implementasi custom router, dan cara penggunaannya.

---

**1. Konsep Dasar Routing**

**Routing Tanpa Library Eksternal:**  
Routing dilakukan menggunakan JavaScript sederhana tanpa library pihak ketiga, menjaga ukuran aplikasi tetap ringan.

**Single HTML File:**  
Semua halaman disajikan dalam satu file HTML utama (`index.html`). Halaman lainnya di-render secara dinamis menggunakan JavaScript.

**Hash-based Routing:**  
Bagian hash (`#`) dalam URL digunakan untuk menentukan halaman yang diakses. Ini kompatibel dengan berbagai hosting, termasuk **lokal**, **GitHub Pages**, dan **ESP32-C3**.

**Dynamic Content Rendering:**  
JavaScript menangani pembaruan konten halaman berdasarkan perubahan hash. Komponen halaman (seperti header, konten utama, dan footer) dirender ulang sesuai rute yang diakses.

---

**2. Isi File `router.ts`**

File `router.ts` bertugas mengelola sistem routing dalam aplikasi. Dengan pendekatan custom, file ini menyediakan:

1. **Penambahan Rute:** Mendaftarkan pasangan path dan fungsi callback.
2. **Perubahan Rute:** Memantau perubahan hash (`hashchange`) pada URL.
3. **Inisialisasi Router:** Menjalankan rute yang sesuai saat halaman pertama kali dimuat atau hash berubah.

---

**`src/router.ts`:**

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

1. **Event Listener untuk `hashchange`:**

   ```typescript
   window.addEventListener('hashchange', () => this.handleRoute());
   ```

   - Event `hashchange` dipicu setiap kali hash di URL berubah, baik karena pengguna mengklik tombol **Back**/**Forward** di browser, atau melalui navigasi manual (misalnya, mengetik URL baru dengan hash).

2. **Event Listener untuk `load`:**

   ```typescript
   window.addEventListener('load', () => this.handleRoute());
   ```

   - Event `load` memastikan bahwa rute yang sesuai diproses saat halaman pertama kali dimuat. Ini penting untuk memuat halaman awal berdasarkan hash di URL.

3. **Proses Routing Dinamis:**
   ```typescript
   const path = window.location.hash.slice(1) || '/';
   if (this.routes[path]) {
     this.routes[path]();
   } else {
     console.error(`Route not found: ${path}`);
   }
   ```
   - Dengan membaca nilai hash (menghilangkan karakter `#`), fungsi `handleRoute()` memproses rute yang sesuai dengan `this.routes[path]`. Jika pengguna kembali atau maju ke rute sebelumnya, hash diperbarui, dan callback untuk rute yang sesuai dijalankan.

---

**Skema Kerja dengan Forward dan Back**

1. **Pengguna Navigasi ke Halaman Baru:**

   - Hash diperbarui, misalnya dari `#/home` ke `#/about`.
   - Event `hashchange` dipicu, dan `handleRoute()` dijalankan.

2. **Pengguna Klik Tombol Back:**

   - Browser kembali ke hash sebelumnya (misalnya, `#/home`).
   - Event `hashchange` dipicu lagi, memanggil `handleRoute()` untuk memuat rute `#/home`.

3. **Pengguna Klik Tombol Forward:**
   - Browser maju ke hash berikutnya (misalnya, `#/about`).
   - Event `hashchange` dipicu, dan `handleRoute()` memuat rute `#/about`.

---

**3. Cara Menggunakan `Router`**

Setelah Anda membuat `router.ts`, Anda dapat menggunakannya di file `index.ts` untuk mengatur rute aplikasi Anda.

Untuk menggunakan **hash-based routing**, Anda hanya perlu memastikan bahwa URL rute diatur dengan awalan hash (`#`). Dalam kode Anda, sesuaikan path pada `addRoute` agar mencerminkan penggunaan hash-based routing. Berikut adalah versi yang telah disesuaikan:

**Contoh di `index.ts`:**

```typescript
import Router from './router';

// Inisialisasi router
const router = new Router();

// Tambahkan rute untuk Home
router.addRoute('#/', () => {
  document.body.innerHTML = `
    <app-header></app-header>
    <page-home></page-home>
    <app-footer></app-footer>
  `;
});

// Tambahkan rute untuk About
router.addRoute('#/about', () => {
  document.body.innerHTML = `
    <app-header></app-header>
    <page-about></page-about>
    <app-footer></app-footer>
  `;
});

// Tambahkan rute untuk Help
router.addRoute('#/help', () => {
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

**4. Penjelasan Implementasi**

**Struktur Class Router:**

- **`routes`:** Menyimpan daftar rute.
- **`addRoute`:** Menambahkan rute baru dengan path dan callback.
- **`handleRoute`:** Menangani perubahan hash dan menjalankan callback yang sesuai.
- **`init`:** Menginisialisasi router, mendengarkan event `hashchange` dan `load`.

**Bagaimana Hash-Based Routing Bekerja:**

- Browser mendeteksi perubahan hash (`#`) tanpa memuat ulang dokumen.
- Router memproses path hash dan memanggil callback yang telah didefinisikan untuk rute tersebut.

---

**a. Struktur Class Router**

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

  **b. Bagaimana Hash-Based Routing Bekerja**

- Ketika URL berubah, browser tidak mengirimkan bagian setelah hash (`#`) ke server.
- Router mendeteksi perubahan hash (`hashchange`) dan memanggil callback untuk path yang sesuai.

---

**5. Kelebihan dan Kekurangan Router Custom**

**Kelebihan:**

1. **Sederhana dan Ringan:**
   - Tidak memerlukan dependensi eksternal.
   - Cocok untuk proyek kecil atau sederhana seperti ini.
2. **Mudah Dikustomisasi:**
   - Anda bisa menambahkan fitur tambahan sesuai kebutuhan.

**Kekurangan:**

1. **Kurang Fitur:**
   - Tidak memiliki fitur canggih seperti nested routes atau lazy loading.
2. **Manual Error Handling:**
   - Anda perlu menangani error atau fallback routing secara manual.

---

**6. Menambahkan Fitur Tambahan**

Routing custom ini dapat diperluas dengan fitur-fitur seperti:

**404 Page:** Callback default untuk rute yang tidak ditemukan.
**Routing Dinamis:** Parsing parameter dari path (misalnya, `/user/:id`).

2. **404 Page (Fallback Route):**

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

3. **Routing Dinamis:**
   - Untuk path dengan parameter (misalnya `/user/:id`), Anda bisa menambahkan parsing parameter:
     ```typescript
     // Tambahkan parameter parsing ke callback
     this.routes['/user/:id'] = (params: { id: string }) => {
       console.log('User ID:', params.id);
     };
     ```

---

**7. Penjelasan Baris per Baris addRoute**

Kode berikut adalah metode **`addRoute`** yang digunakan dalam implementasi routing custom di proyek Anda. Metode ini bertugas untuk **mendaftarkan rute baru** ke dalam sistem router, yang nantinya akan dijalankan saat URL sesuai dengan path yang ditentukan.

```typescript
addRoute(path: string, callback: () => void): void {
  this.routes[path] = callback;
}
```

**1. Parameter `path: string`**

- **`path`** adalah parameter bertipe string yang menentukan nama rute yang ingin Anda tambahkan.
- Contoh nilai `path`:

  - `/` → Halaman Home
  - `/about` → Halaman About
  - `/help` → Halaman Help

  **2. Parameter `callback: () => void`**

- **`callback`** adalah fungsi yang akan dipanggil saat pengguna mengakses rute yang sesuai (berdasarkan path).
- Callback ini menentukan apa yang akan dilakukan oleh aplikasi Anda, misalnya:

  - Merender konten halaman.
  - Mengubah elemen HTML.
  - Memanggil fungsi lain.

  **3. `this.routes[path] = callback`**

- **`this.routes`** adalah objek yang menyimpan daftar semua rute yang terdaftar dalam router.
- **`this.routes[path]`**:

  - Menyimpan pasangan `path` dan `callback`.
  - Ketika rute diakses (misalnya, URL adalah `http://example.com/#/about`), router akan menjalankan callback yang sesuai, yaitu `this.routes["/about"]`.

  **4. Tipe Return `void`**

- **`void`** berarti metode ini **tidak mengembalikan nilai apa pun**. Fungsinya hanya untuk menambahkan rute ke objek `routes`.

---

**8. Ilustrasi Penyimpanan dalam `this.routes`**

Setelah rute ditambahkan menggunakan `addRoute`, semua pasangan path dan callback disimpan dalam objek `this.routes`. Router memanfaatkan data ini untuk memproses rute berdasarkan hash URL yang aktif.  
Misalkan Anda memanggil `addRoute` seperti ini:

```typescript
const router = new Router();
router.addRoute('#/', () => {
  console.log('Home Page');
});
router.addRoute('#/about', () => {
  console.log('About Page');
});
router.addRoute('#/help', () => {
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

**9. Contoh Penggunaan**

Pada file `index.ts`, metode `addRoute` digunakan untuk mendaftarkan rute seperti Home, About, dan Help. Setiap rute memiliki callback yang merender konten halaman secara dinamis.

**Mendaftarkan Rute:**

Berikut adalah bagaimana Anda menggunakan metode `addRoute`:

````typescript
import Router from './router';

// Inisialisasi router
const router = new Router();

// Tambahkan rute untuk Home
router.addRoute('#/', () => {
  document.body.innerHTML = `
    <app-header></app-header>
    <page-home></page-home>
    <app-footer></app-footer>
  `;
});

// Tambahkan rute untuk About
router.addRoute('#/about', () => {
  document.body.innerHTML = `
    <app-header></app-header>
    <page-about></page-about>
    <app-footer></app-footer>
  `;
});

// Tambahkan rute untuk Help
router.addRoute('#/help', () => {
  document.body.innerHTML = `
    <app-header></app-header>
    <page-help></page-help>
    <app-footer></app-footer>
  `;
});


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
````

---

**10. Cara Router Menemukan Rute**

Metode lain di dalam router, seperti `handleRoute`, akan membaca hash URL (`window.location.hash`) dan memotong bagian `#`. Kemudian:

1. Mencocokkan path dengan properti di `this.routes`.
2. Menjalankan callback yang sesuai.

**Contoh:**

Jika pengguna mengakses `http://example.com/#/about`:

- `window.location.hash` adalah `#/about`.
- Router membaca path `/about`.
- Router menjalankan `this.routes["/about"]`, yang merender halaman About.

---

**11. Manfaat Metode `addRoute`**

1. **Organisasi yang Rapi:**

   - Semua rute dikelola dalam satu tempat (`this.routes`).
   - Mempermudah debugging dan menambah rute baru.

2. **Pemisahan Logika:**

   - Callback untuk setiap rute dipisahkan, sehingga lebih modular.
   - Anda bisa menambahkan logika tambahan di dalam callback tanpa memengaruhi rute lain.

3. **Kemudahan Perluasan:**
   - Anda bisa menambahkan fitur seperti parameter dinamis (`/user/:id`) tanpa mengubah struktur utama.

---

#### **Tips untuk Routing**

Dalam aplikasi SPA yang menggunakan hash-based routing, Anda mungkin menghadapi masalah saat memuat halaman selain halaman utama. Untuk mengatasinya:

- Gunakan hash-based routing (misalnya: `/#/home`) agar navigasi halaman tetap berfungsi di GitHub Pages.
- Alternatifnya, tambahkan file `.htaccess` di folder `dist` untuk memastikan semua permintaan diarahkan ke `index.html`.

---

### **Langkah 7: Entry Point dan Index**

Konfigurasi entry point pada **esbuild** menentukan file utama yang akan digunakan sebagai titik awal bundling aplikasi. Entry point ini sangat memengaruhi bagaimana esbuild memproses file dan menyusun strategi pengembangan aplikasi Anda. Dua pendekatan umum untuk entry point adalah:

1. **`entryPoints: ["src/index.ts"]`** – Menggunakan file TypeScript sebagai entry point.
2. **`entryPoints: ["src/index.html"]`** – Menggunakan file HTML sebagai entry point.

Berikut adalah analisis perbedaan, kelebihan, dan kekurangan dari kedua pendekatan ini, serta rekomendasi penggunaannya.

---

#### **1. `entryPoints: ["src/index.ts"]`**

Pendekatan ini menggunakan **file TypeScript (`index.ts`)** sebagai titik awal untuk memulai proses bundling.

**a. Strategi Pengembangan**

- **Cocok untuk Proyek Berbasis TypeScript atau JavaScript:**  
  Semua logika aplikasi didefinisikan dalam `index.ts`, termasuk impor untuk file CSS, gambar, dan komponen lain.
- **Hasil Build Berupa File JavaScript Tunggal:**  
  Esbuild menghasilkan file JavaScript (`bundle.js`) yang perlu diimpor secara manual ke dalam file HTML.

**b. Struktur Folder**

```plaintext
src/
├── components/       # Folder untuk komponen seperti header, footer
│   ├── header.ts
│   ├── footer.ts
├── index.ts          # Entry point utama (logika aplikasi)
├── styles.css        # File CSS yang diimpor dalam TypeScript
├── index.html        # File HTML manual untuk memuat hasil bundling
```

**c. Cara Kerja**

1. Esbuild membaca `index.ts` sebagai entry point dan memproses semua dependensi yang diimpor.
2. File hasil bundling (misalnya, `bundle.js`) disimpan dalam direktori output.
3. File HTML (`index.html`) perlu diatur secara manual untuk memuat hasil bundling menggunakan tag `<script>`.

**d. Contoh `index.html`:**

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

**e. Kelebihan**

- **Kendali Penuh pada HTML:** Anda dapat sepenuhnya mengatur struktur dan referensi file dalam HTML.
- **Fleksibel:** Cocok untuk proyek yang membutuhkan pengelolaan kompleks pada TypeScript atau JavaScript.

**f. Kekurangan**

- Memerlukan pengaturan manual untuk file HTML.
- Tidak otomatis menggabungkan file CSS dan JavaScript ke dalam HTML.

---

#### **2. `entryPoints: ["src/index.html"]`**

Pendekatan ini menggunakan **file HTML (`index.html`)** sebagai entry point utama. Esbuild memulai proses dari file HTML dan membaca semua file yang diimpor di dalamnya.

**a. Strategi Pengembangan**

- **Cocok untuk SPA dengan Integrasi Otomatis:**  
  File HTML adalah pusat proyek. Semua file (CSS, JavaScript, gambar) diimpor langsung ke dalam HTML menggunakan tag `<link>` atau `<script>`.
- **Hasil Build Berupa File HTML dengan Asset Terintegrasi:**  
  Esbuild menghasilkan file HTML yang telah dioptimalkan, termasuk referensi otomatis ke file CSS dan JavaScript.

**b. Struktur Folder**

```plaintext
src/
├── components/       # Folder untuk komponen seperti header, footer
│   ├── header.ts
│   ├── footer.ts
├── pages/            # Folder untuk halaman (Home, About, Help)
│   ├── home.ts
│   ├── about.ts
│   ├── help.ts
├── styles.css        # File CSS yang diimpor di HTML
├── index.html        # Entry point utama (HTML)
├── index.ts          # Logika aplikasi utama
```

c. **Cara Kerja**

1. Esbuild membaca `index.html` sebagai entry point.
2. Semua file yang diimpor (CSS, JavaScript) secara otomatis diproses dan digabungkan ke dalam file hasil build.
3. File hasil build berupa HTML yang telah dioptimalkan.

**d. Contoh `index.html`:**

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

**e. Kelebihan**

- **Proses Otomatis:** HTML, CSS, dan JavaScript digabungkan secara otomatis oleh esbuild.
- **Sederhana untuk SPA:** Tidak perlu mengatur file HTML secara manual.

**f. Kekurangan**

- Kurang fleksibel jika Anda ingin mengontrol hasil bundling secara detail.
- Membutuhkan pendekatan yang lebih spesifik untuk file hasil build di subdirektori, seperti GitHub Pages.

---

#### **3. Perbedaan Utama**

| **Aspek**                 | **`entryPoints: ["src/index.ts"]`**              | **`entryPoints: ["src/index.html"]`**                     |
| ------------------------- | ------------------------------------------------ | --------------------------------------------------------- |
| **Entry Point Utama**     | `index.ts` (logika aplikasi)                     | `index.html` (template aplikasi)                          |
| **Pendekatan Build**      | Bundling dimulai dari logika aplikasi            | Bundling dimulai dari template HTML                       |
| **Hasil Build**           | File JavaScript (`bundle.js`) dan manual HTML    | File HTML dengan semua asset otomatis diatur              |
| **Kebutuhan HTML Manual** | Ya, Anda harus menulis file HTML secara manual   | Tidak, file HTML otomatis diproses dan dioptimalkan       |
| **Cocok untuk**           | Proyek TypeScript yang membutuhkan fleksibilitas | Proyek SPA sederhana dengan fokus pada HTML sebagai pusat |

---

#### **4. Rekomendasi**

- **Gunakan `entryPoints: ["src/index.ts"]` Jika:**  
  Anda ingin kendali penuh atas file HTML, atau jika aplikasi Anda membutuhkan bundling kompleks untuk JavaScript/TypeScript.

- **Gunakan `entryPoints: ["src/index.html"]` Jika:**  
  Anda ingin workflow yang lebih sederhana dan otomatis, terutama untuk aplikasi SPA yang menggabungkan HTML, CSS, dan JavaScript secara langsung.

Untuk proyek ini, **`entryPoints: ["src/index.html"]`** adalah pilihan yang lebih cocok karena memungkinkan bundling otomatis, sederhana, dan mendukung hosting di platform seperti GitHub Pages dan ESP32-C3.

---

### **Langkah 8: Deployment ke Berbagai Hosting**

Deployment adalah tahap penting dalam pengembangan aplikasi, yang memastikan aplikasi Anda dapat diakses oleh pengguna melalui internet. Langkah-langkah berikut menjelaskan proses deployment aplikasi SPA berbasis **LitElement**, **Tailwind CSS**, dan **TypeScript** ke **GitHub Pages** sebagai platform hosting demo.

---

**1. Persiapan Repository**

Untuk memulai, pastikan Anda telah memiliki repository GitHub yang digunakan sebagai tempat menyimpan kode dan file hasil build.

1. **Buat Repository Baru di GitHub:**  
   Jika belum memiliki repository, buat repository baru dengan langkah berikut:

   - Masuk ke akun GitHub Anda dan buat repository baru dengan nama **`SPA`**.
   - Centang opsi untuk inisialisasi repository dengan file `README.md`.

2. **Hubungkan Repository Lokal ke GitHub:**  
   Jika repository lokal belum terhubung ke GitHub, jalankan perintah berikut di terminal:
   ```bash
   git remote add origin https://github.com/username/SPA.git
   git branch -M main
   git push -u origin main
   ```

---

**2. Install Plugin GitHub Pages**

Untuk mengunggah aplikasi ke **GitHub Pages**, Anda perlu menambahkan plugin **`gh-pages`** ke proyek. Plugin ini memungkinkan Anda mengelola branch `gh-pages` secara otomatis.  
Jalankan perintah berikut untuk menginstal plugin sebagai dependensi pengembangan:

```bash
npm install gh-pages --save-dev
```

---

**3. Update Konfigurasi `package.json`**

File `package.json` perlu diperbarui untuk mendukung workflow deployment ke GitHub Pages. Lakukan langkah berikut:

1. **Tambahkan Field `homepage`:**  
   Tambahkan properti `homepage` ke file `package.json` untuk menentukan URL tempat aplikasi akan dihosting.

   ```json
   "homepage": "https://username.github.io/SPA",
   ```

2. **Tambahkan Skrip Deployment:**  
   Tambahkan skrip berikut ke dalam bagian `"scripts"` di file `package.json`:
   ```json
   "scripts": {
     "build": "esbuild src/index.html --bundle --outfile=dist/index.html --minify",
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
   **Penjelasan Skrip:**
   - **`build`:** Membuild aplikasi menggunakan esbuild.
   - **`predeploy`:** Skrip otomatis untuk menjalankan build sebelum deploy.
   - **`deploy`:** Mengunggah folder `dist` ke branch `gh-pages` menggunakan plugin `gh-pages`.

---

**4. Build dan Deploy Proyek**

Setelah konfigurasi selesai, lakukan proses build dan deploy sebagai berikut:

1. **Build Proyek:**  
   Jalankan perintah berikut untuk membuild aplikasi:

   ```bash
   npm run build
   ```

   Perintah ini akan menghasilkan folder `dist` yang berisi file HTML, CSS, dan JavaScript hasil build.

2. **Deploy ke GitHub Pages:**  
   Jalankan perintah berikut untuk mengunggah hasil build ke GitHub Pages:
   ```bash
   npm run deploy
   ```
   Skrip ini akan:
   - Membuild aplikasi (jika belum dilakukan).
   - Mengunggah folder `dist` ke branch `gh-pages`.

---

**5. Aktifkan GitHub Pages**

Langkah terakhir adalah mengaktifkan GitHub Pages di repository Anda.

1. Buka repository Anda di GitHub.
2. Pergi ke tab **Settings**, lalu cari bagian **Pages**.
3. Pada bagian **Source**, pilih branch `gh-pages`, lalu klik **Save**.
4. Tunggu beberapa menit hingga GitHub Pages aktif dan aplikasi Anda tersedia secara online.

---

**6. Akses Website**

Setelah GitHub Pages aktif, aplikasi Anda dapat diakses melalui URL:

```
https://username.github.io/SPA
```

---

Dengan langkah-langkah ini, Anda telah berhasil melakukan deployment aplikasi SPA Anda ke GitHub Pages. Ini adalah solusi yang ideal untuk mendemonstrasikan aplikasi kepada pengguna atau tim sebelum deployment akhir ke platform produksi seperti ESP32-C3. 🎉

---

### **Langkah 9: Deploy Aplikasi ke ESP32-C3**

Deploying aplikasi web ke perangkat IoT seperti **ESP32-C3** memungkinkan Anda untuk mengubahnya menjadi web server yang dapat diakses melalui jaringan lokal atau bahkan sebagai Access Point (AP). Dalam langkah ini, kita akan membahas proses deployment aplikasi SPA ke **ESP32-C3**, termasuk persiapan file, konfigurasi web server, hingga pengunggahan file ke sistem file ESP32-C3 menggunakan **LittleFS**.

---

**Langkah 1: Persiapan File Build**

1. **Bangun Aplikasi Web:**  
   Jalankan perintah berikut untuk membuild aplikasi SPA Anda:

   ```bash
   npm run build
   ```

   Perintah ini akan menghasilkan folder `dist` yang berisi file HTML, CSS, dan JavaScript hasil build.

2. **Pindahkan File ke Folder Data:**  
   Salin semua file dari folder `dist` ke folder khusus yang akan digunakan untuk pengunggahan ke ESP32-C3. Struktur folder harus sesuai dengan format sistem file ESP32-C3, seperti di bawah ini:

   ```
   esp32-c3-webserver/
   ├── data/          # Folder untuk file website
   │   ├── index.html
   │   ├── styles.css
   │   ├── script.js
   ├── esp32_c3_server.ino
   ```

---

**Langkah 2: Konversi File untuk ESP32-C3**

Karena ESP32-C3 menggunakan sistem file internal seperti **SPIFFS** atau **LittleFS** untuk menyimpan file statis, Anda perlu mempersiapkan file agar sesuai dengan format ini.

1. **Install Plugin LittleFS:**  
   Jika Anda menggunakan Arduino IDE, instal **ESP32 LittleFS Plugin** melalui [repository plugin](https://github.com/lorol/arduino-esp32fs-plugin). Plugin ini memungkinkan Anda mengunggah file dari folder `data` ke sistem file ESP32-C3.

2. **Pindahkan File Build ke Folder `data`:**  
   Pastikan semua file hasil build (`index.html`, `styles.css`, dan `script.js`) disalin ke dalam folder `data`.

---

**Langkah 3: Konfigurasi Kode untuk Web Server**

Buat file program utama, seperti `esp32_c3_server.ino`, untuk mengonfigurasi ESP32-C3 sebagai server web. Berikut adalah kode contohnya:

**File: `esp32_c3_server.ino`**

```cpp
#include <WiFi.h>
#include <AsyncTCP.h>
#include <ESPAsyncWebServer.h>
#include <LittleFS.h>

// Kredensial Wi-Fi
const char* ssid = "Your_SSID";
const char* password = "Your_PASSWORD";

// Inisialisasi server di port 80
AsyncWebServer server(80);

void setup() {
  // Inisialisasi Serial Monitor
  Serial.begin(115200);

  // Inisialisasi LittleFS
  if (!LittleFS.begin()) {
    Serial.println("LittleFS Mount Failed");
    return;
  }

  // Koneksi ke Wi-Fi
  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED) {
    delay(1000);
    Serial.println("Connecting to WiFi...");
  }
  Serial.println("Connected to WiFi");
  Serial.println(WiFi.localIP());

  // Routing untuk file statis
  server.serveStatic("/", LittleFS, "/").setDefaultFile("index.html");

  // Mulai server
  server.begin();
}

void loop() {
  // Tidak diperlukan loop karena server berjalan secara asinkron
}
```

---

**Langkah 4: Upload File ke LittleFS**

1. Buka proyek Anda di Arduino IDE.
2. Pastikan Anda telah memilih board **ESP32-C3 Dev Module** di menu **Tools > Board**.
3. Pilih port yang sesuai dengan perangkat ESP32-C3 Anda di menu **Tools > Port**.
4. Klik **Tools > ESP32 LittleFS Data Upload** untuk mengunggah file dari folder `data` ke sistem file ESP32-C3.

---

**Langkah 5: Upload Firmware**

1. **Compile dan Upload Firmware:**  
   Klik tombol **Upload** di Arduino IDE untuk mengunggah program ke ESP32-C3.

2. **Cek Status di Serial Monitor:**  
   Setelah proses upload selesai, buka Serial Monitor untuk melihat informasi alamat IP ESP32-C3.

---

**Langkah 6: Akses Website**

1. Hubungkan perangkat (laptop atau ponsel) ke jaringan Wi-Fi yang sama dengan ESP32-C3.
2. Buka browser, lalu masukkan alamat IP ESP32-C3 yang ditampilkan di Serial Monitor (misalnya: `http://192.168.1.100`).
3. Aplikasi web Anda akan ditampilkan di browser.

---

#### **Catatan Tambahan**

Jika Anda ingin ESP32-C3 berfungsi sebagai **Access Point**, tambahkan kode berikut di fungsi `setup()` untuk mengaktifkan mode AP:

```cpp
WiFi.softAP("ESP32-C3-AccessPoint", "password123");
IPAddress IP = WiFi.softAPIP();
Serial.println(IP);
```

Gunakan alamat IP yang ditampilkan di Serial Monitor untuk mengakses server web yang berjalan di ESP32-C3.

---

Dengan mengikuti langkah-langkah di atas, Anda dapat berhasil mengubah ESP32-C3 menjadi server web yang menyajikan aplikasi SPA Anda. Deployment ini sangat ideal untuk demonstrasi aplikasi atau sebagai basis untuk pengembangan lebih lanjut dalam lingkungan IoT. 🎉

---

### **Lebih Detail Terkait esbuild**

**esbuild** adalah alat build modern yang dirancang untuk menggabungkan, meminifikasi, dan mengoptimalkan file proyek berbasis web. Dengan performa tinggi dan pendekatan berbasis **JavaScript/TypeScript**, esbuild memungkinkan pengembang untuk menghasilkan aplikasi yang efisien dan ringan, baik untuk pengembangan maupun produksi.

Sebagai alat build, esbuild bekerja dengan membaca file entry point, menganalisis semua dependensinya, lalu menghasilkan file output yang telah dioptimalkan. Dalam konteks pengembangan **Single Page Application (SPA)** seperti yang sedang kita bangun, esbuild memainkan peran penting untuk memastikan semua komponen (HTML, CSS, TypeScript) digabungkan menjadi file yang siap digunakan di berbagai lingkungan hosting.

**esbuild** adalah alat build modern yang dapat digunakan baik melalui perintah **CLI (Command Line Interface)** maupun API JavaScript dengan metode **`esbuild.build`**. Kedua pendekatan ini memiliki tujuan yang sama, yaitu menggabungkan, meminifikasi, dan mengoptimalkan file proyek, namun dengan cara kerja dan fleksibilitas yang berbeda. Berikut adalah analisis mendalam tentang kedua pendekatan tersebut.

---

#### **Pendekatan 1: Menggunakan esbuild CLI**

Pendekatan ini menggunakan perintah langsung di terminal untuk menjalankan esbuild. Perintah CLI esbuild sederhana, langsung, dan cocok untuk proyek kecil atau untuk keperluan build cepat.

**1. Perintah Dasar esbuild**

Format dasar perintah **esbuild** adalah:

```bash
esbuild [input file] [options]
```

**Contoh Perintah:**

```bash
esbuild src/index.html --bundle --outfile=dist/index.html --minify
```

**Penjelasan:**

1. **`src/index.html`:**  
   File input utama yang menjadi titik awal untuk proses bundling. Esbuild akan membaca semua file yang diimpor di dalam file ini (seperti CSS dan TypeScript).
2. **`--bundle`:**  
   Menginstruksikan esbuild untuk menggabungkan semua file dan dependensi menjadi satu file output yang efisien.
3. **`--outfile=dist/index.html`:**  
   Menentukan lokasi dan nama file hasil build. Dalam contoh ini, file output akan disimpan di folder `dist` dengan nama `index.html`.
4. **`--minify`:**  
   Mengaktifkan minifikasi untuk memperkecil ukuran file hasil build dengan menghapus spasi, komentar, dan elemen tak terpakai lainnya.

---

**2. Opsi-Opsi Penting esbuild**

Berikut adalah opsi-opsi penting pada esbuild yang relevan untuk pengembangan SPA, termasuk cara kerjanya dan rekomendasinya:

---

- **a. Input dan Output**

  - **`entryPoints`:**  
    Menentukan file entry point yang akan digunakan oleh esbuild untuk memulai proses bundling.  
    Contoh:

    ```javascript
    entryPoints: ['src/index.html'],
    ```

  - **`outdir` atau `outfile`:**  
    Menentukan lokasi output file hasil build.  
    Contoh:
    ```javascript
    outdir: 'dist', // Semua hasil build disimpan di folder dist
    ```

  **Rekomendasi:**

  - Gunakan **`entryPoints: ['src/index.html']`** untuk proyek SPA agar bundling otomatis dimulai dari file HTML.
  - Tetapkan folder output seperti `dist` untuk menjaga struktur proyek tetap terorganisir.

---

- **b. Bundling dan Minifikasi**

  - **`bundle`:**  
    Menggabungkan semua file (HTML, CSS, TypeScript) dan dependensi menjadi satu atau beberapa file output.

  - **`minify`:**  
    Memperkecil ukuran file dengan menghapus elemen yang tidak diperlukan.

  **Cara Kerja:**

  - Esbuild membaca semua impor di file entry point dan menghasilkan file output yang telah dioptimalkan.
  - Proses ini mencakup gabungan file TypeScript, CSS, atau modul-modul pihak ketiga.

  **Rekomendasi:**

  - Selalu gunakan **`bundle`** untuk mengurangi jumlah request HTTP.
  - Aktifkan **`minify`** pada mode produksi untuk mengoptimalkan performa.

---

- **c. Loader**

  - **`loader`:**  
    Menentukan cara esbuild menangani file dengan ekstensi tertentu.  
    Contoh:
    ```javascript
    loader: {
      '.ts': 'ts',
      '.css': 'css',
    },
    ```

  **Cara Kerja:**

  - Esbuild menggunakan loader untuk membaca file non-JavaScript (seperti TypeScript atau CSS), lalu mengonversinya menjadi format yang dapat digunakan dalam JavaScript.

  **Rekomendasi:**

  - Pastikan untuk mendefinisikan loader untuk `.ts` (TypeScript) dan `.css` dalam proyek SPA Anda.
  - Tambahkan loader lain jika proyek membutuhkan file seperti gambar atau font.

---

- **d. Watch Mode**

  - **`watch`:**  
    Mengaktifkan mode pemantauan untuk otomatis membuild ulang setiap kali ada perubahan pada file sumber.  
    Contoh:
    ```javascript
    watch: true,
    ```

  **Cara Kerja:**

  - Esbuild memantau perubahan file yang terdaftar dalam konfigurasi dan secara otomatis menghasilkan file baru tanpa perlu menjalankan perintah build secara manual.

  **Rekomendasi:**

  - Gunakan **`watch`** selama pengembangan untuk meningkatkan produktivitas.
  - Hindari penggunaan mode watch di lingkungan produksi.

---

- **e. Sourcemap**

  - **`sourcemap`:**  
    Mengaktifkan sourcemap untuk membantu melacak sumber file asli selama debugging.  
    Contoh:
    ```javascript
    sourcemap: true,
    ```

  **Cara Kerja:**

  - Esbuild menghasilkan file sourcemap yang memungkinkan Anda melihat file TypeScript atau CSS asli di developer tools browser.

  **Rekomendasi:**

  - Aktifkan **`sourcemap`** hanya pada mode pengembangan untuk mempermudah debugging.
  - Nonaktifkan di produksi untuk mengurangi ukuran file.

---

- **f. Public Path**

  - **`publicPath`:**  
    Menentukan path dasar untuk file hasil build.  
    Contoh:
    ```javascript
    publicPath: '/subdirectory/',
    ```

  **Cara Kerja:**

  - Public path digunakan untuk memastikan referensi asset (CSS, JS, gambar) tetap valid saat aplikasi dihosting di subdirektori, seperti GitHub Pages.

  **Rekomendasi:**

  - Gunakan **`publicPath: '/'`** untuk hosting lokal atau di root domain.
  - Gunakan **`publicPath: '/nama-repo/'`** untuk hosting di GitHub Pages.

---

- **g. Log Level**

  - **`logLevel`:**  
    Menentukan tingkat log yang ditampilkan selama proses build.  
    Contoh:
    ```javascript
    logLevel: 'info',
    ```

  **Cara Kerja:**

  - Log level menentukan seberapa banyak informasi yang ditampilkan oleh esbuild selama proses build.

  **Rekomendasi:**

  - Gunakan **`logLevel: 'info'`** selama pengembangan untuk melihat status build.
  - Gunakan **`logLevel: 'silent'`** di CI/CD atau skrip otomatis untuk menghindari output yang tidak perlu.

---

##### **Kelebihan:**

- **Sederhana:** Cocok untuk proyek kecil atau build satu kali.
- **Cepat diimplementasikan:** Tidak memerlukan file konfigurasi tambahan.
- **Langsung:** Hasil build dapat dihasilkan dengan satu baris perintah.

##### **Kekurangan:**

- **Terbatas untuk Build Statis:** Tidak fleksibel untuk logika kompleks, seperti perubahan dinamis berdasarkan environment.
- **Sulit Dipelihara:** Konfigurasi menjadi sulit dikelola jika perintah CLI terlalu panjang.
- **Kurang Modular:** Tidak mendukung integrasi dengan skrip atau tools lain di proyek.

---

##### **Rekomendasi untuk Pengembangan SPA**

1. **Pengembangan Lokal:**

   - Gunakan **watch mode** dan **sourcemap** untuk debugging real-time.
   - Pastikan folder output (`dist`) sudah bersih sebelum build baru dengan menambahkan skrip `clean`.

2. **Pre-release (GitHub Pages):**

   - Setel **publicPath** sesuai nama repository (misalnya, `/nama-repo/`).
   - Gunakan **minify** untuk mengoptimalkan file CSS dan JavaScript.

3. **Produksi (ESP32-C3):**
   - Nonaktifkan sourcemap untuk mengurangi ukuran file.
   - Gunakan konfigurasi **minify** dan **bundle** untuk menghasilkan aplikasi yang cepat dan ringan.

Dengan konfigurasi dan opsi ini, esbuild dapat menjadi alat build yang cepat, ringan, dan sangat cocok untuk pengembangan aplikasi SPA berbasis LitElement, Tailwind CSS, dan TypeScript.

---

#### **Pendekatan 2: Menggunakan API `esbuild.build`**

Pendekatan ini menggunakan API JavaScript dari esbuild untuk menjalankan proses build langsung dari dalam kode. Biasanya digunakan dalam file konfigurasi seperti `esbuild.config.js` untuk memberikan fleksibilitas lebih dalam pengaturan build.

`esbuild.build` adalah **metode API JavaScript** yang digunakan untuk menjalankan esbuild secara langsung dari dalam kode JavaScript/TypeScript. Ini merupakan alternatif dari menjalankan **esbuild melalui CLI**, dan biasanya digunakan dalam file konfigurasi seperti `esbuild.config.js`.

---

- **Apa itu `esbuild.build`?**

  `esbuild.build` adalah fungsi bawaan dari paket **esbuild** yang memungkinkan Anda memanggil dan mengatur proses build menggunakan konfigurasi berbasis JavaScript. Ini lebih fleksibel dibandingkan CLI karena Anda bisa menulis logika yang lebih kompleks, seperti:

  - Memilih mode build berdasarkan environment.
  - Menyusun konfigurasi secara dinamis.
  - Menambahkan logika kustom (misalnya logging atau integrasi dengan tools lain).

---

- **Cara Kerja:**

  1. **Konfigurasi:**  
     Semua pengaturan build didefinisikan dalam objek JavaScript, sehingga mendukung logika kompleks.
  2. **Eksekusi:**  
     Build dijalankan dengan menjalankan file konfigurasi (misalnya, `node esbuild.config.js`).
  3. **Dinamika:**  
     Variabel environment atau argumen CLI dapat digunakan untuk memengaruhi konfigurasi, seperti mode produksi atau development.

---

- **Struktur Dasar `esbuild.build`**

Fungsi ini menerima sebuah **objek konfigurasi** dengan berbagai opsi yang sama dengan opsi CLI, tetapi ditulis dalam format JavaScript.

Contoh Dasar:

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

- **Opsi dalam `esbuild.build`**

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

   - `publicPath`: Path dasar untuk file statis (misalnya, `/SPA` untuk GitHub Pages).
     ```javascript
     publicPath: '/SPA';
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

##### **Kapan `esbuild.build` Digunakan?**

Gunakan `esbuild.build` jika:

1. Anda memerlukan **file konfigurasi yang dinamis**, misalnya:
   - Mengatur build untuk mode development, pre-release, dan production.
   - Memilih konfigurasi berdasarkan environment.
2. Ingin **mengelola build dalam satu file konfigurasi** tanpa harus menulis perintah CLI di terminal.

---

##### **Contoh File Konfigurasi `esbuild.config.js`**

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
    publicPath: isPreRelease ? '/SPA' : '/', // Path untuk file statis
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

##### **Kelebihan:**

- **Fleksibel:** Mendukung logika kustom berdasarkan environment (misalnya, `process.env.NODE_ENV`).
- **Modular:** Mudah diintegrasikan dengan tools lain, seperti skrip NPM atau CI/CD pipeline.
- **Dukungan Kompleksitas:** Dapat menangani banyak file entry point atau opsi build yang rumit.

##### **Kekurangan:**

- **Butuh Setup Awal:** Memerlukan pembuatan file konfigurasi tambahan.
- **Tidak Sederhana:** Membutuhkan pemahaman lebih tentang API esbuild.

---

#### **Komparasi dan Rekomendasi esbuild**

Kedua pendekatan ini memiliki kelebihan dan kekurangan masing-masing. Pilihan terbaik bergantung pada kompleksitas proyek dan kebutuhan pengembang.

- **Pilih Pendekatan CLI Jika:**

  - Anda mengerjakan proyek kecil dengan kebutuhan build yang sederhana.
  - Anda membutuhkan hasil build cepat tanpa perlu konfigurasi tambahan.
  - Build Anda bersifat statis tanpa banyak penyesuaian berdasarkan environment.

- **Pilih Pendekatan API `esbuild.build` Jika:**

  - Proyek Anda kompleks dan membutuhkan logika build yang dinamis (misalnya, mendukung mode produksi dan development).
  - Anda ingin mengintegrasikan esbuild dengan toolchain lain, seperti skrip NPM atau pipeline CI/CD.
  - Proyek Anda memiliki banyak entry point atau opsi build yang perlu dikelola secara modular.

---

#### **Rekomendasi untuk Proyek SPA**

Dalam pengembangan **SPA berbasis LitElement, Tailwind CSS, dan TypeScript**, pendekatan menggunakan **API `esbuild.build`** lebih direkomendasikan karena fleksibilitasnya. Dengan API ini, Anda dapat:

1. Mengelola perbedaan konfigurasi antara **mode development** dan **produksi**.
2. Mengintegrasikan esbuild dengan skrip deployment untuk GitHub Pages atau ESP32-C3.
3. Mendukung penambahan fitur tambahan, seperti pengelolaan multiple entry points untuk pengembangan yang lebih terstruktur.

Namun, jika Anda hanya ingin mencoba prototipe cepat atau aplikasi kecil, pendekatan CLI sudah cukup untuk memenuhi kebutuhan dasar bundling.

---

### **Referensi**

Berikut adalah rujukan untuk masing-masing topik yang dapat membantu Anda mempelajari lebih lanjut:

---

**1. LitElement**

- **Website Resmi:**  
  [https://lit.dev](https://lit.dev)  
  Dokumentasi resmi LitElement, mencakup panduan dasar hingga advanced.
- **Tutorial:**  
  [LitElement Getting Started](https://lit.dev/docs/getting-started/)  
  Panduan langkah-langkah untuk memulai proyek LitElement.

---

**2. esbuild**

- **Website Resmi:**  
  [https://esbuild.github.io](https://esbuild.github.io)  
  Dokumentasi lengkap esbuild, termasuk opsi CLI dan API.
- **Tutorial:**  
  [Getting Started with esbuild](https://esbuild.github.io/getting-started/)  
  Tutorial dasar untuk memahami penggunaan esbuild.

---

**3. Tailwind CSS**

- **Website Resmi:**  
  [https://tailwindcss.com](https://tailwindcss.com)  
  Sumber utama untuk dokumentasi lengkap Tailwind CSS.
- **Tutorial:**  
  [Tailwind CSS Quick Start Guide](https://tailwindcss.com/docs/installation)  
  Panduan instalasi dan implementasi Tailwind CSS.

---

**4. IoT & ESP32-C3**

- **Website Resmi:**  
  [Espressif Systems](https://www.espressif.com/en/products/socs/esp32-c3)  
  Halaman resmi Espressif untuk spesifikasi ESP32-C3.
- **Tutorial:**  
  [ESP32-C3 Tutorials by Random Nerd Tutorials](https://randomnerdtutorials.com/?s=ESP32-C3)  
  Koleksi tutorial praktis terkait ESP32-C3.

---

**5. Git & GitHub**

- **Website Resmi:**  
  [Git](https://git-scm.com)  
  Dokumentasi resmi Git untuk sistem kontrol versi.
  [GitHub](https://github.com)  
  Situs utama GitHub untuk mengelola repository.
- **Tutorial:**  
  [Pro Git Book](https://git-scm.com/book/en/v2)  
  Buku online gratis untuk memahami Git secara mendalam.  
  [GitHub Guides](https://guides.github.com)  
  Panduan resmi GitHub untuk pemula.

---

**6. VS Code**

- **Website Resmi:**  
  [Visual Studio Code](https://code.visualstudio.com)  
  Unduh editor dan baca dokumentasi resmi.
- **Tutorial:**  
  [VS Code Documentation](https://code.visualstudio.com/docs)  
  Panduan lengkap fitur VS Code.

---

**7. Component-Driven Development (CDD)**

- **Artikel:**  
  [Introducing Component-Driven Development](https://www.componentdriven.org/)  
  Penjelasan mendalam tentang prinsip CDD.
- **Tutorial:**  
  [Component-Driven Development in Storybook](https://storybook.js.org/docs/react/get-started/introduction)  
  Panduan penerapan CDD dengan alat seperti Storybook.

---

**8. Object-Oriented Programming (OOP)**

- **Artikel:**  
  [What is Object-Oriented Programming?](https://www.freecodecamp.org/news/what-is-object-oriented-programming/)  
  Penjelasan dasar OOP untuk pemula.
- **Tutorial:**  
  [Learn OOP with Examples](https://www.w3schools.com/java/java_oop.asp)  
  Tutorial penerapan OOP dengan contoh.

---

**9. TypeScript**

- **Website Resmi:**  
  [https://typescriptlang.org](https://typescriptlang.org)  
  Dokumentasi resmi TypeScript.
- **Tutorial:**  
  [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)  
  Panduan langkah-langkah belajar TypeScript.

---

**10. Node.js**

- **Website Resmi:**  
  [https://nodejs.org](https://nodejs.org)  
  Dokumentasi Node.js untuk server-side JavaScript.
- **Tutorial:**  
  [Node.js Guide by MDN](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Introduction)  
  Tutorial pengantar Node.js oleh Mozilla.

---

**11. NPM**

- **Website Resmi:**  
  [https://npmjs.com](https://npmjs.com)  
  Situs resmi untuk manajemen paket JavaScript.
- **Tutorial:**  
  [What is NPM?](https://nodesource.com/blog/an-absolute-beginners-guide-to-using-npm/)  
  Panduan dasar untuk pemula.

---

**12. Single Page Application (SPA)**

- **Artikel:**  
  [What is a Single Page Application?](https://www.cloudflare.com/learning/performance/what-is-a-single-page-application/)  
  Penjelasan tentang SPA dari Cloudflare.
- **Tutorial:**  
  [Building a Simple SPA with JavaScript](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Introduction)  
  Panduan membangun SPA dari Mozilla MDN.

---
