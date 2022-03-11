import dateFormat from "./dateFormat";
import timeForToday from "./timeForToday";

const checkedOverDay = (activity) => {
  const lastActivity = dateFormat(activity);
  const hourDiff = timeForToday(lastActivity);
  const sendtime = hourDiff > 24 ? lastActivity : hourDiff;
  return sendtime;
};

export default checkedOverDay;
