import { normalizeNumber } from './formaters';

/**
 * This function convert number from 16-th sys (string) to 10-th sys
 * @param string
 * @returns {number}
 */
const toNumber = (string) => parseInt(string, 16);

/**
 * This function convert number from 10-th sys to 16-th sys
 * @param {number} number
 * @returns {string}
 */
const toString = (number) => number.toString(16).toUpperCase();

/**
 * Convert hex color to RGB format
 * @param {string} hexString
 * @returns {[number, number, number]} - [red, green, blue]
 */
const hexToRGB = (hexString) => hexString.split(/(.{2})/).filter(itm => !!itm).map(toNumber);

/**
 * Convert RGB color to hex format
 * @param {number} r - red
 * @param {number} g - green
 * @param {number} b - blue
 * @returns {string} - hex color format
 */
const RGBToHex = (r, g, b) => {
  return [r, g, b].map(itm => normalizeNumber(toString(itm))).join('');
};

export {
  toNumber,
  toString,
  hexToRGB,
  RGBToHex,
};