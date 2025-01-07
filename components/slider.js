/**
 * Slider
 * @description Interactive slider to control a parameter.
 */
class Slider {
  /**
   * @param {string} containerId - The ID of the container element.
   * @param {number} min - Minimum value.
   * @param {number} max - Maximum value.
   * @param {number} initialValue - Initial slider value.
   * @param {Function} onChange - Callback when the value changes.
   */
  constructor(containerId, min, max, initialValue, onChange) {
    this.container = document.getElementById(containerId);
    this.min = min;
    this.max = max;
    this.value = initialValue;
    this.onChange = onChange;
    this.render();
  }

  render() {
    this.container.innerHTML = `
      <input type="range" min="${this.min}" max="${this.max}" value="${this.value}" 
        class="slider w-full" />
      <p>Value: <span id="slider-value">${this.value}</span></p>
    `;
    const slider = this.container.querySelector('input');
    const valueDisplay = this.container.querySelector('#slider-value');

    slider.oninput = () => {
      this.value = slider.value;
      valueDisplay.innerText = this.value;
      this.onChange(this.value);
    };
  }
}

// Example Usage
document.addEventListener('DOMContentLoaded', () => {
  new Slider('slider-container', 0, 100, 50, (value) => {
    console.log(`Slider value: ${value}`);
  });
});
