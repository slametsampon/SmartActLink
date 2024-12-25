export default function LogActivity(data = [], titleText) {
  const logActivityComp = document.createElement('div');

  // Template judul
  const title = document.createElement('h2');
  title.className = 'text-lg font-bold';
  title.textContent = titleText;
  logActivityComp.appendChild(title);

  // Membuat elemen list
  const logList = document.createElement('ul');
  logList.id = 'log-list';
  logList.className = 'list-disc ml-6 mt-4';

  // Menambahkan data ke dalam list
  data.forEach((activity) => {
    const listItem = document.createElement('li');
    listItem.className = 'text-left';
    listItem.textContent = `${activity.message} pada ${activity.time}`;
    logList.appendChild(listItem);
  });

  // Tambahkan list ke komponen utama
  logActivityComp.appendChild(logList);

  return logActivityComp;
}
