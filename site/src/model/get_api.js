// faz a requisição da API
const config_api = {
  fix_url: "https://api-request.nova-work.cloud",
  get: function (url) {
    return new Promise((resolve, reject) => {
      //=============================================
      fetch(config_api.fix_url + url)
        .then((e) => e.json())
        .then((e) => resolve(e))
        .then((e) => reject("erro"));
      //=============================================
    });
  },
  //=============================================
  getstatic: function (url) {
    return new Promise((resolve, reject) => {
      //=============================================
      fetch(url)
        .then((e) => e.json())
        .then((e) => resolve(e))
        .then((e) => reject("erro"));
      //=============================================
    });
  },
};
export { config_api };
