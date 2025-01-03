export default function RegisterContent() {
  const main = document.createElement('main');
  main.className = 'flex-1 container mx-auto p-8 text-center pt-20';

  main.innerHTML = `
    <!-- File: registerUser.html -->
    <div id="register-user" class="max-w-md mx-auto bg-white shadow-md rounded-lg p-6">
      <h2 class="text-2xl font-bold mb-4 text-center">Register User</h2>

      <form id="registerForm" class="space-y-4">
        <!-- Username Input -->
        <div>
          <label for="username" class="block text-sm font-medium text-gray-700">Username</label>
          <input
            type="text"
            id="username"
            class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            placeholder="Enter username"
            required
          />
        </div>

        <!-- Password Input -->
        <div>
          <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            id="password"
            class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            placeholder="Enter password"
            required
          />
        </div>

        <!-- Confirm Password Input -->
        <div>
          <label for="confirmPassword" class="block text-sm font-medium text-gray-700">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            placeholder="Confirm password"
            required
          />
        </div>

        <!-- Role Dropdown -->
        <div>
          <label for="userRole" class="block text-sm font-medium text-gray-700">User Role</label>
          <select
            id="userRole"
            class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            required
          >
            <option value="">Select a role</option>
            <option value="admin">Admin</option>
            <option value="user">User</option>
            <option value="device">Device</option>
            <option value="guest">Guest</option>
          </select>
        </div>

        <!-- Buttons -->
        <div class="flex justify-between">
          <button
            type="submit"
            class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            Submit
          </button>
          <button
            type="button"
            id="cancelButton"
            class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  `;

  const userRole = {
    admin: ['CRUD'],
    user: ['Register', 'Update'],
    device: ['Register', 'SendData'],
    guest: ['Public'],
  };

  // Handle form submission
  const submitButton = document.getElementById('registerForm');
  submitButton.addEventListener('submit', (e) => {
    e.preventDefault();

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const role = document.getElementById('userRole').value;

    // Validate inputs
    if (!username || !password || !confirmPassword || !role) {
      alert('Please fill out all fields.');
      return;
    }

    if (password !== confirmPassword) {
      alert('Passwords do not match. Please try again.');
      return;
    }

    const user = {
      username,
      password, // Note: Hashing is recommended in production
      role,
      permissions: userRole[role],
    };

    console.log('User registered:', user);
    alert(`User registered successfully as ${role}`);

    // Clear form
    document.getElementById('registerForm').reset();
  });

  // Handle cancel button
  document.getElementById('cancelButton').addEventListener('click', () => {
    if (confirm('Are you sure you want to cancel registration?')) {
      document.getElementById('registerForm').reset();
    }
  });
  return main;
}
