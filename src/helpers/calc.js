const getAverage = (...numbers) => numbers.reduce((pr, cr) => cr + pr, 0) / numbers.length;

export {
  getAverage,
};