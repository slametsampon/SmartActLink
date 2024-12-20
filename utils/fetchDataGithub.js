const jsonUrl =
  'https://raw.githubusercontent.com/username/repository/branch/data.json';

// Fetch Data dari File JSON
fetch(jsonUrl)
  .then((response) => response.json())
  .then((data) => {
    const userList = document.getElementById('user-list');
    data.users.forEach((user) => {
      const li = document.createElement('li');
      li.textContent = `${user.id} - ${user.name}`;
      userList.appendChild(li);
    });
  })
  .catch((error) => console.error('Gagal memuat data:', error));
