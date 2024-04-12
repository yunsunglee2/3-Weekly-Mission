const getToken = (key) => {
  let result = null;
  let cookie = document.cookie.split(";");
  cookie.some((item) => {
    item = item.replace(" ", "");

    let dic = item.split("=");

    if (key === dic[0]) {
      result = dic[1];
      return true;
    }
  });
  return result;
};

export default getToken;
