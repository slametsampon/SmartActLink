export default function LogActivity() {
  const LogActivity = document.getElementById('log-activity');
  LogActivity.innerHTML = `
        <h2 class="text-lg font-bold">Log Aktivitas</h2>
        <ul id="log-list" class="list-disc ml-6">
            <li>Perangkat diaktifkan pada 07:00</li>
            <li>Perangkat dimatikan pada 12:30</li>
        </ul>
    `;
  return LogActivity;
}
