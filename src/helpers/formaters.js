const normalizeNumber = (number) => {
  if (number === null || number === undefined) return;
  const strNum = `${number}`;
  return strNum.padStart(2, '0');
};

export {
  normalizeNumber,
};