// Exponential Moving Average (EMA)
/**
 * @module signalConditioning
 * Modul ini menyediakan berbagai metode untuk penyaringan sinyal, termasuk filter EMA, SMA, Median, Kalman, dan WMA.
 */

/**
 * Menghitung Exponential Moving Average (EMA).
 *
 * @param {number} alpha - Koefisien penghalusan (0 < alpha <= 1).
 * @param {number} prevValue - Nilai sebelumnya.
 * @param {number} newValue - Nilai terbaru.
 * @returns {number} Nilai EMA yang diperbarui.
 */
export function emaFilter(alpha, prevValue, newValue) {
  return alpha * newValue + (1 - alpha) * prevValue;
}

/**
 * Menghitung Simple Moving Average (SMA).
 *
 * @param {number} windowSize - Jumlah data dalam jendela SMA.
 * @param {number[]} dataWindow - Array nilai terbaru untuk SMA.
 * @param {number} newValue - Nilai baru yang akan ditambahkan ke SMA.
 * @returns {number} Nilai rata-rata dari jendela SMA.
 */
export function smaFilter(windowSize, dataWindow, newValue) {
  dataWindow.push(newValue);
  if (dataWindow.length > windowSize) {
    dataWindow.shift(); // Buang nilai tertua
  }
  const sum = dataWindow.reduce((a, b) => a + b, 0);
  return sum / dataWindow.length;
}

/**
 * Menghitung Median Filter.
 *
 * @param {number} windowSize - Jumlah data dalam jendela Median Filter.
 * @param {number[]} dataWindow - Array nilai terbaru untuk Median Filter.
 * @param {number} newValue - Nilai baru yang akan ditambahkan ke filter.
 * @returns {number} Median dari jendela data.
 */
export function medianFilter(windowSize, dataWindow, newValue) {
  dataWindow.push(newValue);
  if (dataWindow.length > windowSize) {
    dataWindow.shift(); // Buang nilai tertua
  }
  const sorted = [...dataWindow].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  return sorted.length % 2 !== 0
    ? sorted[mid]
    : (sorted[mid - 1] + sorted[mid]) / 2;
}

/**
 * Kelas untuk Kalman Filter, digunakan untuk penyaringan sinyal dinamis.
 */
export class KalmanFilter {
  /**
   * Membuat sebuah instance KalmanFilter.
   *
   * @param {number} [q=1] - Varians noise proses.
   * @param {number} [r=1] - Varians noise pengukuran.
   * @param {number} [x=0] - Nilai awal.
   * @param {number} [p=1] - Kovarians kesalahan estimasi awal.
   * @param {number} [k=1] - Gain Kalman awal.
   */
  constructor(q = 1, r = 1, x = 0, p = 1, k = 1) {
    this.q = q; // Variance of the process noise
    this.r = r; // Variance of the measurement noise
    this.x = x; // Value
    this.p = p; // Estimation error covariance
    this.k = k; // Kalman gain
  }

  /**
   * Memperbarui nilai filter berdasarkan pengukuran baru.
   *
   * @param {number} measurement - Nilai pengukuran baru.
   * @returns {number} Nilai Kalman yang diperbarui.
   */
  update(measurement) {
    // Prediction update
    this.p = this.p + this.q;

    // Measurement update
    this.k = this.p / (this.p + this.r);
    this.x = this.x + this.k * (measurement - this.x);
    this.p = (1 - this.k) * this.p;

    return this.x;
  }
}

/**
 * Menghitung Weighted Moving Average (WMA).
 *
 * @param {number[]} weights - Array bobot untuk setiap elemen dalam jendela.
 * @param {number[]} dataWindow - Array nilai terbaru untuk WMA.
 * @param {number} newValue - Nilai baru yang akan ditambahkan ke WMA.
 * @returns {number} Rata-rata berbobot dari jendela data.
 */
export function wmaFilter(weights, dataWindow, newValue) {
  dataWindow.push(newValue);
  if (dataWindow.length > weights.length) {
    dataWindow.shift(); // Buang nilai tertua
  }
  const weightedSum = dataWindow.reduce(
    (sum, value, index) => sum + value * weights[index],
    0
  );
  const weightSum = weights
    .slice(0, dataWindow.length)
    .reduce((a, b) => a + b, 0);
  return weightedSum / weightSum;
}
