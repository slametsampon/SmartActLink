export default function LoginContent() {
  const main = document.createElement('main');
  main.className = 'flex-1 container mx-auto p-8 text-center pt-20';

  main.innerHTML = `
    <div class="bg-white shadow-lg rounded-lg p-8 w-full max-w-md mx-auto">
      <div class="text-center mb-6">
        <img 
          src="./../../public/images/iconSmartActIcon.webp" 
          alt="SmartActLink Logo" 
          class="w-16 h-16 mx-auto mb-2"
        />
        <h1 class="text-2xl font-bold text-gray-800">SmartActLink</h1>
        <p class="text-sm text-gray-500">Login to your account</p>
      </div>
      <form id="loginForm" class="space-y-6">
        <div>
          <label 
            class="block text-gray-700 text-sm font-semibold mb-2" 
            for="username">Username</label>
          <input 
            id="username" 
            type="text" 
            placeholder="Enter your username" 
            class="shadow-sm appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 focus:ring focus:ring-blue-300 focus:outline-none" 
            required>
        </div>
        <div>
          <label 
            class="block text-gray-700 text-sm font-semibold mb-2" 
            for="password">Password</label>
          <input 
            id="password" 
            type="password" 
            placeholder="Enter your password" 
            class="shadow-sm appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 focus:ring focus:ring-blue-300 focus:outline-none" 
            required>
        </div>
        <button 
          type="submit" 
          class="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring focus:ring-blue-300">
          Login
        </button>
      </form>
      <p id="status" class="text-center text-sm text-red-500 mt-4 hidden"></p>
      <div class="mt-6 text-center">
        <p class="text-sm text-gray-500">Don't have an account? <a href="#" class="text-blue-500 hover:text-blue-600 font-semibold">Sign up</a></p>
      </div>
    </div>
  `;
  return main;
}
