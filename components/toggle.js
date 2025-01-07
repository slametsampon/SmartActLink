/**
 * ToggleSwitch
 * @description Interactive toggle switch for device control.
 */
class ToggleSwitch {
  /**
   * @param {string} containerId - The ID of the container element.
   * @param {boolean} initialState - Initial state of the switch (true = ON, false = OFF).
   * @param {Function} onToggle - Callback when switch is toggled.
   */
  constructor(containerId, initialState = false, onToggle) {
    this.container = document.getElementById(containerId);
    this.state = initialState;
    this.onToggle = onToggle;
    this.render();
  }

  toggle() {
    this.state = !this.state;
    this.onToggle(this.state);
    this.render();
  }

  render() {
    this.container.innerHTML = `
      <button class="bg-${
        this.state ? 'green' : 'red'
      }-500 text-white px-4 py-2 rounded">
        ${this.state ? 'ON' : 'OFF'}
      </button>
    `;
    this.container.querySelector('button').onclick = () => this.toggle();
  }
}

// Example Usage
document.addEventListener('DOMContentLoaded', () => {
  new ToggleSwitch('toggle-container', false, (state) => {
    console.log(`Switch is now ${state ? 'ON' : 'OFF'}`);
  });
});
