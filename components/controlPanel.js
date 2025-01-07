/**
 * ControlPanel
 * @description A control panel with multiple action buttons.
 */
class ControlPanel {
  /**
   * @param {string} containerId - The ID of the container element.
   * @param {Array<{label: string, action: Function}>} buttons - List of buttons and their actions.
   */
  constructor(containerId, buttons) {
    this.container = document.getElementById(containerId);
    this.buttons = buttons;
    this.render();
  }

  render() {
    this.container.innerHTML = '';
    this.buttons.forEach(({ label, action }) => {
      const button = document.createElement('button');
      button.innerText = label;
      button.className = 'bg-blue-500 text-white px-4 py-2 rounded m-1';
      button.onclick = action;
      this.container.appendChild(button);
    });
  }
}

// Example Usage
document.addEventListener('DOMContentLoaded', () => {
  new ControlPanel('panel-container', [
    { label: 'Start', action: () => console.log('Started') },
    { label: 'Stop', action: () => console.log('Stopped') },
    { label: 'Reset', action: () => console.log('Reset') },
  ]);
});
