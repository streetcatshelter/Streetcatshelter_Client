const tensDigit = (num) => {
  const formatDigits = num < 10 ? "0" + num : "" + num;
  return formatDigits;
};
export default tensDigit;
