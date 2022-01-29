import { hexToRGB } from './colorConverting';

/**
 * Mix colors in RGB or hex formats
 * @param {([number, number, number]|string)[]} colors - array of colors
 * @returns {[number, number, number]} - mix color in RGB format
 */
const mixColors = (...colors) => colors
  .reduce((rgbArr, initColor) => {
    const [r, g, b] = typeof initColor === 'string' ? hexToRGB(initColor) : initColor;
    const [prR, prG, prB] = rgbArr;
    return [prR + r, prG + g, prB + b];
  }, [0, 0, 0])
  .map(spec => Math.trunc(spec / colors.length));

export {
  mixColors,
};