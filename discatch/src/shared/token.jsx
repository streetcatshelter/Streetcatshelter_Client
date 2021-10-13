export const getToken = () => {
  return localStorage.getItem("token");
};

export const setToken = (TOKEN) => {
  localStorage.setItem("token", TOKEN);
};

export const removeToken = () => {
  localStorage.removeItem("token");
};

export const setCookie = (name, value) => {
  let date = new Date();
  date.setTime(date.getTime() + 5.5 * 60 * 60 * 1000);
  document.cookie =
    name + "=" + value + "; expires=" + date.toUTCString + "; path=/";
};
