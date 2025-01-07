/**
 * Notification
 * @description Displays notification messages.
 */
class Notification {
  /**
   * @param {string} containerId - The ID of the container element.
   * @param {string} message - Notification message.
   * @param {"info"|"warning"|"error"} type - Type of notification.
   */
  constructor(containerId, message, type = 'info') {
    this.container = document.getElementById(containerId);
    this.message = message;
    this.type = type;
    this.render();
  }

  render() {
    const typeClasses = {
      info: 'bg-blue-500',
      warning: 'bg-yellow-500',
      error: 'bg-red-500',
    };

    this.container.innerHTML = `
      <div class="${typeClasses[this.type]} text-white p-4 rounded">
        ${this.message}
      </div>
    `;
  }
}

// Example Usage
document.addEventListener('DOMContentLoaded', () => {
  new Notification('notification-container', 'System Overheated!', 'warning');
});
