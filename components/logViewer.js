/**
 * LogViewer
 * @description Displays logs with scrolling support.
 */
class LogViewer {
  /**
   * @param {string} containerId - The ID of the container element.
   * @param {Array<string>} initialLogs - Initial logs to display.
   */
  constructor(containerId, initialLogs = []) {
    this.container = document.getElementById(containerId);
    this.logs = initialLogs;
    this.render();
  }

  addLog(log) {
    this.logs.push(log);
    this.render();
  }

  render() {
    this.container.innerHTML = `
      <div class="bg-gray-100 p-4 rounded max-h-60 overflow-y-auto">
        ${this.logs.map((log) => `<p>${log}</p>`).join('')}
      </div>
    `;
  }
}

// Example Usage
document.addEventListener('DOMContentLoaded', () => {
  const logViewer = new LogViewer('log-container', ['System Initialized']);
  setInterval(
    () => logViewer.addLog(`Log at ${new Date().toLocaleTimeString()}`),
    2000
  );
});
