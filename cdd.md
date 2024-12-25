**Membangun Website yang Tertata, Skalabel, dan Efisien: Pendekatan Modern untuk Pengembang Web**

Dalam dunia pengembangan web yang semakin dinamis, keberhasilan sebuah proyek tidak hanya ditentukan oleh hasil akhirnya, tetapi juga oleh proses dan metodologi yang digunakan. Pernahkah Anda merasa kesulitan mengelola kode CSS yang kacau, atau kesulitan membuat komponen yang dapat digunakan ulang dalam proyek besar? Atau mungkin, Anda menghabiskan terlalu banyak waktu untuk mencari tahu gaya mana yang konflik dengan lainnya?

Di sinilah metodologi pengembangan seperti **BEM**, **Atomic Design**, **SMACSS**, **ITCSS**, **Utility-First**, dan **Component-Driven Development (CDD)** menjadi kunci untuk menciptakan website yang tidak hanya indah secara visual tetapi juga rapi secara struktural. Dengan perpaduan teknologi seperti **HTML**, **Tailwind CSS**, dan **vanilla JavaScript**, Anda dapat merancang antarmuka pengguna yang responsif, modular, dan mudah dikelola, bahkan dalam skala besar.

Bayangkan membangun website dengan komponen yang dapat digunakan ulang, kode CSS yang tertata rapi, dan struktur folder yang membuat tim Anda bekerja lebih efisien. Artikel ini akan memandu Anda menjelajahi berbagai pendekatan pengembangan web modern yang telah terbukti membantu pengembang di seluruh dunia menciptakan proyek berkualitas tinggi.

Mari kita pelajari bagaimana kombinasi metodologi ini dapat membantu Anda meningkatkan kualitas, produktivitas, dan pengalaman pengembangan Anda!

---

- [**BEM (Block Element Modifier)**](#bem-block-element-modifier)
  - [**1. Struktur BEM:**](#1-struktur-bem)
  - [**2. Menggunakan BEM dengan Tailwind CSS**](#2-menggunakan-bem-dengan-tailwind-css)
- [**Atomic Design**](#atomic-design)
- [**SMACSS (Scalable and Modular Architecture for CSS)**](#smacss-scalable-and-modular-architecture-for-css)
- [**ITCSS (Inverted Triangle CSS)**](#itcss-inverted-triangle-css)
- [**Utility-First (Tailwind CSS Default)**](#utility-first-tailwind-css-default)
- [**Component-Driven Development (CDD)**](#component-driven-development-cdd)
- [**Rekomendasi Memilih Metodologi**](#rekomendasi-memilih-metodologi)
- [**Lebih Detail Component-Driven Development (CDD)**](#lebih-detail-component-driven-development-cdd)
  - [**Mengapa Menggunakan CDD?**](#mengapa-menggunakan-cdd)
  - [**Arsitektur CDD**](#arsitektur-cdd)
  - [**Prinsip Dasar CDD**](#prinsip-dasar-cdd)
  - [**Contoh Implementasi CDD**](#contoh-implementasi-cdd)
  - [**Best Practices dalam CDD**](#best-practices-dalam-cdd)
  - [**Manfaat CDD dalam Proyek Skala Besar**](#manfaat-cdd-dalam-proyek-skala-besar)
- [Menggunakan **Component-Driven Development (CDD)** dengan **Plain JavaScript**](#menggunakan-component-driven-development-cdd-dengan-plain-javascript)
  - [**Pendekatan Utama CDD dengan Plain JavaScript**](#pendekatan-utama-cdd-dengan-plain-javascript)
  - [**Pengorganisasian Folder Komponen**](#pengorganisasian-folder-komponen)
  - [**Best Practices CDD dengan Plain JavaScript**](#best-practices-cdd-dengan-plain-javascript)
- [**Implementasi CDD, HTML, Tailwind css, Plain Javascript**](#implementasi-cdd-html-tailwind-css-plain-javascript)
  - [**Struktur Folder Proyek**](#struktur-folder-proyek)

### **BEM (Block Element Modifier)**

**BEM (Block Element Modifier)** adalah metodologi penamaan kelas CSS yang dirancang untuk menciptakan kode yang bersih, mudah dipelihara, dan terstruktur dalam pengembangan web. BEM terdiri dari tiga bagian utama: **Block**, **Element**, dan **Modifier**. Berikut adalah penjelasan mendetail masing-masing bagian dan bagaimana BEM dapat digunakan dalam proyek dengan **HTML**, **Tailwind CSS**, dan **JavaScript**.

---

#### **1. Struktur BEM:**

**a. Block (Blok)**

- **Definisi:** Bagian utama dari antarmuka yang berdiri sendiri dan bermakna.
- **Penamaan:** Nama deskriptif dalam huruf kecil menggunakan tanda hubung (`-`).
- **Contoh:**
  ```html
  <div class="card"></div>
  ```

**b. Element (Elemen)**

- **Definisi:** Bagian dari Block yang tidak dapat berdiri sendiri.
- **Penamaan:** Ditulis setelah tanda ganda underscore (`__`).
- **Contoh:**
  ```html
  <div class="card">
    <h2 class="card__title">Judul</h2>
    <p class="card__description">Deskripsi konten.</p>
  </div>
  ```

**c. Modifier (Modifikator)**

- **Definisi:** Variasi atau status dari Block atau Element.
- **Penamaan:** Ditambahkan setelah tanda ganda hubung (`--`).
- **Contoh:**
  ```html
  <div class="card card--featured">
    <h2 class="card__title">Judul</h2>
    <p class="card__description">Deskripsi konten.</p>
  </div>
  ```

---

#### **2. Menggunakan BEM dengan Tailwind CSS**

Tailwind CSS tidak secara langsung mendukung BEM karena menggunakan kelas utilitas. Namun, untuk struktur dan pemeliharaan yang baik, kita bisa tetap menggunakan BEM dalam proyek berbasis Tailwind.

**Contoh Implementasi:**

```html
<div class="card bg-white p-6 rounded-lg shadow-md">
  <h2 class="card__title text-xl font-bold">Judul</h2>
  <p class="card__description text-gray-600">Deskripsi konten.</p>
  <button
    class="card__button bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
  >
    Klik Saya
  </button>
</div>
```

---

**3. Menggunakan BEM dengan JavaScript**

Dalam proyek JavaScript, BEM mempermudah manipulasi DOM. Misalnya, menambahkan kelas CSS sesuai kondisi.

**Contoh:**

```html
<div class="card card--featured" id="myCard">
  <h2 class="card__title">Judul</h2>
  <p class="card__description">Deskripsi konten.</p>
</div>

<button id="toggleButton">Toggle Featured</button>
```

```javascript
document.getElementById('toggleButton').addEventListener('click', () => {
  const card = document.getElementById('myCard');
  card.classList.toggle('card--featured');
});
```

---

### **Atomic Design**

**Atomic Design** adalah pendekatan desain antarmuka yang memecah UI menjadi komponen yang dapat digunakan kembali dengan lima tingkat hierarki:

- **Atoms:** Elemen terkecil seperti tombol, input, ikon.
- **Molecules:** Kombinasi atom, seperti form input dengan label.
- **Organisms:** Kumpulan molekul, seperti navigasi lengkap.
- **Templates:** Struktur layout dengan placeholder.
- **Pages:** Implementasi template dengan data nyata.

**Contoh:**

```html
<!-- Atom: Tombol -->
<button class="btn-primary">Submit</button>

<!-- Molecule: Input Form -->
<div class="form-group">
  <label for="username" class="form-label">Username</label>
  <input type="text" id="username" class="form-input" />
</div>

<!-- Organism: Form Login -->
<form class="login-form space-y-4">
  <div class="form-group">
    <label for="email" class="form-label">Email</label>
    <input type="email" id="email" class="form-input" />
  </div>
  <div class="form-group">
    <label for="password" class="form-label">Password</label>
    <input type="password" id="password" class="form-input" />
  </div>
  <button class="btn-primary">Login</button>
</form>
```

---

### **SMACSS (Scalable and Modular Architecture for CSS)**

SMACSS adalah metodologi CSS yang berfokus pada modularitas dan skalabilitas dengan membagi kode CSS menjadi lima kategori:

1. **Base:** Reset dan elemen HTML dasar.
2. **Layout:** Struktur utama halaman (header, footer, sidebar).
3. **Module:** Komponen antarmuka (form, card, dll.).
4. **State:** Variasi antarmuka (aktif, hover, disabled).
5. **Theme:** Gaya khusus atau tema yang dapat berubah.

**Contoh:**

```html
<header class="l-header">
  <nav class="l-nav">...</nav>
</header>

<section class="m-card">
  <h2 class="m-card__title">Judul</h2>
  <p class="m-card__description">Deskripsi konten.</p>
</section>

<button class="btn is-active">Klik Saya</button>
```

---

### **ITCSS (Inverted Triangle CSS)**

ITCSS membantu dalam pengorganisasian CSS dengan pendekatan hirarkis berbentuk segitiga terbalik, dari yang paling umum hingga spesifik. Struktur ini meminimalkan penumpukan aturan CSS.

**Lapisan ITCSS:**

1. **Settings:** Variabel dan konfigurasi (misalnya file Tailwind config).
2. **Tools:** Mixins dan fungsi CSS.
3. **Generic:** Reset dan normalisasi.
4. **Elements:** Elemen HTML dasar (`h1`, `p`, `a`).
5. **Objects:** Komponen layout (container, grid).
6. **Components:** Komponen antarmuka spesifik (form, card).
7. **Utilities:** Kelas utilitas untuk Tailwind CSS (misalnya `mt-4`, `text-center`).

**Contoh:**

```css
/* Settings */
:root {
  --primary-color: #3490dc;
}

/* Generic */
* {
  margin: 0;
  padding: 0;
}

/* Elements */
h1 {
  font-size: 2rem;
}

/* Objects */
.o-container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}

/* Components */
.c-card {
  background: white;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

/* Utilities (Tailwind-like) */
.u-mt-4 {
  margin-top: 1rem;
}
```

---

### **Utility-First (Tailwind CSS Default)**

Tailwind CSS sendiri mendukung metodologi **Utility-First**, yang artinya Anda menulis CSS langsung di kelas HTML menggunakan kelas-kelas utilitas yang telah disediakan.

**Contoh:**

```html
<div class="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg">
  <h2 class="text-2xl font-bold text-gray-800">Judul</h2>
  <p class="text-gray-600 mt-4">Deskripsi konten yang menarik.</p>
  <button
    class="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
  >
    Klik Saya
  </button>
</div>
```

---

### **Component-Driven Development (CDD)**

Metodologi ini digunakan dalam framework seperti React, Vue.js, atau Next.js. UI dibangun dalam bentuk komponen yang dapat digunakan kembali.

**Contoh (React dengan Tailwind CSS):**

```jsx
export default function Card({ title, description }) {
  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md">
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="text-gray-600 mt-2">{description}</p>
    </div>
  );
}
```

---

### **Rekomendasi Memilih Metodologi**

1. **Proyek Kecil atau Prototipe:** Gunakan **Utility-First** (Tailwind CSS default).
2. **Proyek Besar atau Tim Besar:** Gunakan **Atomic Design** atau **ITCSS**.
3. **Komponen Kompleks:** Pertimbangkan **Component-Driven Development (CDD)**.
4. **Pengembangan CSS yang Lebih Luas:** Gunakan **SMACSS** jika mengelola proyek multi-halaman yang besar.

### **Lebih Detail Component-Driven Development (CDD)**

CDD adalah metodologi pengembangan web yang memfokuskan pada pembuatan antarmuka pengguna (UI) dengan membagi aplikasi menjadi komponen yang terisolasi, dapat digunakan kembali, dan dikelola secara independen. CDD sering digunakan dalam framework modern seperti React, Vue.js, Angular, dan Next.js.

---

#### **Mengapa Menggunakan CDD?**

1. **Pemeliharaan Mudah:** Komponen dipisahkan dengan tanggung jawab yang jelas.
2. **Penggunaan Kembali:** Komponen yang dirancang dengan baik dapat digunakan kembali di berbagai bagian aplikasi.
3. **Kolaborasi Lebih Baik:** Tim pengembang dapat bekerja pada komponen yang berbeda secara paralel.
4. **Pengujian Mudah:** Komponen terpisah membuat pengujian unit dan integrasi lebih sederhana.
5. **Desain Konsisten:** Desain UI tetap konsisten karena komponen mengikuti pedoman yang sama.

---

#### **Arsitektur CDD**

Komponen dalam CDD memiliki **hirarki** yang dimulai dari elemen kecil hingga halaman penuh:

1. **Komponen Primitif (Atoms):** Elemen dasar seperti tombol, input, ikon.
2. **Komponen Terkombinasi (Molecules):** Kumpulan komponen primitif, seperti form input dengan label.
3. **Komponen Kompleks (Organisms):** Bagian aplikasi yang kompleks, seperti navigasi atau formulir lengkap.
4. **Templates:** Struktur layout dengan komponen yang terhubung.
5. **Pages:** Halaman lengkap yang siap digunakan.

---

#### **Prinsip Dasar CDD**

1. **Komposabilitas:**
   - Komponen kecil disusun menjadi komponen yang lebih besar.
2. **Isolasi:**

   - Komponen berdiri sendiri dan tidak memiliki ketergantungan langsung pada komponen lain kecuali yang dideklarasikan.

3. **Deklaratif:**

   - UI didefinisikan secara deklaratif melalui properti (props) dan data.

4. **Stateless & Stateful:**
   - Komponen **Stateless** hanya menerima data melalui props.
   - Komponen **Stateful** mengelola data internal dan menyediakan logika UI.

---

#### **Contoh Implementasi CDD**

Berikut adalah contoh penerapan CDD menggunakan **React.js** dan **Tailwind CSS**:

**1. Komponen Primitif (Atom) - Tombol**

```jsx
// components/Button.jsx
export default function Button({ label, onClick }) {
  return (
    <button
      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
      onClick={onClick}
    >
      {label}
    </button>
  );
}
```

---

**2. Komponen Terkombinasi (Molecule) - Input Form**

```jsx
// components/InputField.jsx
export default function InputField({ label, type, value, onChange }) {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 mb-2">{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        className="w-full p-2 border rounded"
      />
    </div>
  );
}
```

---

**3. Komponen Kompleks (Organism) - Form Login**

```jsx
// components/LoginForm.jsx
import { useState } from 'react';
import InputField from './InputField';
import Button from './Button';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login:', { email, password });
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 bg-white shadow rounded">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <InputField
        label="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <InputField
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button label="Login" />
    </form>
  );
}
```

---

**4. Template - Struktur Layout**

```jsx
// components/Layout.jsx
export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      {children}
    </div>
  );
}
```

---

**5. Page - Halaman Lengkap**

```jsx
// pages/index.jsx
import Layout from '../components/Layout';
import LoginForm from '../components/LoginForm';

export default function Home() {
  return (
    <Layout>
      <LoginForm />
    </Layout>
  );
}
```

---

#### **Best Practices dalam CDD**

1. **Buat Komponen Reusable:** Desain komponen yang fleksibel dan dapat digunakan di banyak tempat.
2. **Gunakan Folder Struktur:** Kelompokkan komponen dalam folder sesuai dengan tingkatannya (atoms, molecules, organisms).
3. **Props-Driven:** Buat komponen dinamis dengan memanfaatkan props.
4. **Gunakan Tools Pendukung:** Pertimbangkan penggunaan tools seperti **Storybook** untuk mendokumentasikan dan mengelola komponen UI.
5. **Dokumentasi yang Baik:** Setiap komponen harus didokumentasikan dengan deskripsi dan contoh penggunaan.

---

#### **Manfaat CDD dalam Proyek Skala Besar**

1. **Kolaborasi yang Efisien:** Pengembang frontend dan backend dapat bekerja secara independen dengan kontrak API yang jelas.
2. **Skalabilitas:** Komponen dapat dengan mudah ditambahkan atau diubah tanpa memengaruhi seluruh sistem.
3. **Desain Konsisten:** Komponen yang digunakan ulang memastikan tampilan UI tetap konsisten.
4. **Pengujian Lebih Mudah:** Komponen dapat diuji secara individual sebelum diintegrasikan.

---

### Menggunakan **Component-Driven Development (CDD)** dengan **Plain JavaScript**

CDD dengan Plain/vanila JavaScript memungkinkan pengembangan web yang terorganisir tanpa perlu framework seperti React atau Vue.js. Dalam pendekatan ini, kita membuat komponen menggunakan **Web Components**, **Kelas ES6**, atau bahkan **fungsi JavaScript biasa** untuk membuat elemen yang dapat digunakan kembali.

---

#### **Pendekatan Utama CDD dengan Plain JavaScript**

1. **Komponen Berbasis Fungsi (Functional Components):** Membuat komponen menggunakan fungsi.
2. **Komponen Berbasis Kelas (Class Components):** Menggunakan ES6 class untuk membuat komponen yang lebih kompleks.
3. **Web Components (Custom Elements):** Menggunakan standar HTML5 untuk membuat elemen kustom dengan API Web Components.

---

**1. Komponen Berbasis Fungsi**

Komponen ini cukup sederhana. Kita membuat elemen HTML sebagai fungsi yang mengembalikan elemen DOM.

**Contoh - Tombol Komponen (Atom):**

```javascript
function createButton(label, onClick) {
  const button = document.createElement('button');
  button.textContent = label;
  button.className =
    'px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700';
  button.addEventListener('click', onClick);
  return button;
}

// Contoh Penggunaan:
document.body.appendChild(
  createButton('Klik Saya', () => alert('Tombol Diklik!'))
);
```

---

**2. Komponen Berbasis Kelas (Class Components)**

Menggunakan class untuk membuat komponen yang mendukung state internal dan metode khusus.

**Contoh - Kartu Profil (Molecule):**

```javascript
class ProfileCard {
  constructor(name, job) {
    this.name = name;
    this.job = job;
  }

  render() {
    const card = document.createElement('div');
    card.className = 'p-4 bg-white rounded shadow-lg';

    const title = document.createElement('h2');
    title.className = 'text-xl font-bold';
    title.textContent = this.name;

    const description = document.createElement('p');
    description.className = 'text-gray-600';
    description.textContent = this.job;

    card.appendChild(title);
    card.appendChild(description);
    return card;
  }
}

// Contoh Penggunaan:
const profile = new ProfileCard('John Doe', 'Web Developer');
document.body.appendChild(profile.render());
```

---

**3. Web Components (Custom Elements)**

Menggunakan API Web Components untuk membuat komponen HTML kustom yang dapat digunakan seperti elemen bawaan HTML.

**Contoh - Komponen Input Form (Organism):**

```javascript
class LoginForm extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.render();
  }

  connectedCallback() {
    this.shadowRoot.querySelector('form').addEventListener('submit', (e) => {
      e.preventDefault();
      const email = this.shadowRoot.querySelector('#email').value;
      const password = this.shadowRoot.querySelector('#password').value;
      alert(`Email: ${email}, Password: ${password}`);
    });
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        .form-container {
          padding: 20px;
          background: white;
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0,0,0,0.1);
        }
        .form-group {
          margin-bottom: 10px;
        }
        .form-group label {
          display: block;
          margin-bottom: 5px;
          font-weight: bold;
        }
        .form-group input {
          width: 100%;
          padding: 8px;
          border: 1px solid #ccc;
          border-radius: 4px;
        }
        .submit-btn {
          padding: 10px 20px;
          background: #3490dc;
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }
        .submit-btn:hover {
          background: #2779bd;
        }
      </style>
      <div class="form-container">
        <form>
          <div class="form-group">
            <label for="email">Email:</label>
            <input type="email" id="email" required />
          </div>
          <div class="form-group">
            <label for="password">Password:</label>
            <input type="password" id="password" required />
          </div>
          <button type="submit" class="submit-btn">Login</button>
        </form>
      </div>
    `;
  }
}

// Registrasi Komponen
customElements.define('login-form', LoginForm);

// Contoh Penggunaan:
document.body.innerHTML = `<login-form></login-form>`;
```

---

#### **Pengorganisasian Folder Komponen**

Untuk proyek besar, struktur folder berikut dapat digunakan:

```
/components
  /atoms
    Button.js
    Input.js
  /molecules
    ProfileCard.js
  /organisms
    LoginForm.js
index.html
main.js
```

---

#### **Best Practices CDD dengan Plain JavaScript**

1. **Buat Komponen Reusable:** Komponen harus fokus pada satu tanggung jawab dan dapat digunakan kembali.
2. **Pemisahan File:** Simpan setiap komponen dalam file terpisah untuk memudahkan pemeliharaan.
3. **Modularitas:** Gunakan **ES Modules (import/export)** untuk mengatur komponen jika didukung oleh browser atau menggunakan bundler seperti **Vite** atau **Webpack**.
4. **Isolasi Gaya:** Gunakan **Shadow DOM** untuk melindungi CSS agar tidak berbenturan dengan komponen lain.
5. **Pengujian Unit:** Uji setiap komponen secara terpisah untuk memastikan fungsionalitas yang baik.

---

### **Implementasi CDD, HTML, Tailwind css, Plain Javascript**

Berikut adalah **kode lengkap** untuk proyek **Component-Driven Development (CDD)** menggunakan **Plain JavaScript**, **HTML**, dan **Tailwind CSS**. Anda dapat menyalin kode ini ke proyek Anda dan menjalankannya di browser tanpa konfigurasi tambahan.

---

#### **Struktur Folder Proyek**

```
/cdd-plain-js
  /components
    Button.js
    InputField.js
    ProfileCard.js
    LoginForm.js
  index.html
  main.js
```

---

**1. index.html**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>CDD with Plain JavaScript</title>
    <!-- Tailwind CSS CDN -->
    <script src="https://cdn.tailwindcss.com"></script>
  </head>
  <body class="bg-gray-100 min-h-screen flex items-center justify-center">
    <div id="app"></div>

    <!-- JavaScript Files -->
    <script type="module" src="main.js"></script>
  </body>
</html>
```

---

**2. main.js**

```javascript
// Import Komponen
import Button from './components/Button.js';
import InputField from './components/InputField.js';
import ProfileCard from './components/ProfileCard.js';
import LoginForm from './components/LoginForm.js';

// Tambahkan komponen ke DOM
const app = document.getElementById('app');

// Contoh Penggunaan Komponen
app.appendChild(new ProfileCard('John Doe', 'Web Developer').render());
app.appendChild(new LoginForm());
```

---

**3. Komponen JavaScript (Folder /components)**

**components/Button.js**

```javascript
export default function Button(label, onClick) {
  const button = document.createElement('button');
  button.textContent = label;
  button.className =
    'px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700';
  button.addEventListener('click', onClick);
  return button;
}
```

---

**components/InputField.js**

```javascript
export default function InputField(label, type, value, onChange) {
  const wrapper = document.createElement('div');
  wrapper.className = 'mb-4';

  const inputLabel = document.createElement('label');
  inputLabel.textContent = label;
  inputLabel.className = 'block text-gray-700 mb-2';

  const input = document.createElement('input');
  input.type = type;
  input.value = value;
  input.className = 'w-full p-2 border rounded';
  input.addEventListener('input', (e) => onChange(e.target.value));

  wrapper.appendChild(inputLabel);
  wrapper.appendChild(input);
  return wrapper;
}
```

---

**components/ProfileCard.js**

```javascript
export default class ProfileCard {
  constructor(name, job) {
    this.name = name;
    this.job = job;
  }

  render() {
    const card = document.createElement('div');
    card.className = 'p-6 bg-white rounded-lg shadow-md max-w-sm mb-6';

    const title = document.createElement('h2');
    title.className = 'text-xl font-bold';
    title.textContent = this.name;

    const description = document.createElement('p');
    description.className = 'text-gray-600 mt-2';
    description.textContent = this.job;

    card.appendChild(title);
    card.appendChild(description);
    return card;
  }
}
```

---

**components/LoginForm.js**

```javascript
import InputField from './InputField.js';
import Button from './Button.js';

export default function LoginForm() {
  const form = document.createElement('form');
  form.className = 'p-6 bg-white rounded-lg shadow-md max-w-sm';

  const title = document.createElement('h2');
  title.className = 'text-2xl font-bold mb-4';
  title.textContent = 'Login';

  let email = '';
  let password = '';

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Email: ${email}, Password: ${password}`);
  };

  form.appendChild(title);
  form.appendChild(
    InputField('Email', 'email', email, (value) => (email = value))
  );
  form.appendChild(
    InputField('Password', 'password', password, (value) => (password = value))
  );
  form.appendChild(Button('Login', handleSubmit));

  return form;
}
```
