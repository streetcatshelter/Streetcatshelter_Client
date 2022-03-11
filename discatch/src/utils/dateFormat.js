import tenDigit from "./tensDigit";
const dateFormat = (date) => {
  const formatDate = new Date(Date.parse(date));
  const newDate = `${formatDate.getFullYear()}-${tenDigit(
    formatDate.getMonth() + 1
  )}-${tenDigit(formatDate.getDate())} ${tenDigit(
    formatDate.getHours()
  )}:${tenDigit(formatDate.getMinutes())}`;
  return newDate;
};
export default dateFormat;
