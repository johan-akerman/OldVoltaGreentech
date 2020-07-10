class Api {
  constructor() {
    this.basePath = "https://voltagreentech.herokuapp.com/";
  }

  async GetIsAuthorized() {
    try {
      if (this.token) {
        if ((await this.ValidateToken()).message) {
          return true;
        } else {
          console.log("Refresh token has been used");
          console.log(await this.UseRefreshToken());
          return false;
        }
      } else {
        return false;
      }
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  async GetResponse(method, url, data = null) {
    var requestUrl = this.basePath + url;
    var token = this.token;
    return new Promise(function (resolve, reject) {
      let xhr = new XMLHttpRequest();
      xhr.open(method, requestUrl);
      xhr.onload = function () {
        resolve(xhr.response);
      };
      xhr.onerror = function () {
        reject({
          status: this.status,
          statusText: xhr.statusText,
        });
      };
      if (token) {
        xhr.setRequestHeader("Authorization", "bearer " + token);
      }
      if (data != null) {
        xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        xhr.send(JSON.stringify(data));
      } else {
        xhr.send();
      }
    });
  }

  async GetArticles() {
    var path = "articles";
    return JSON.parse(await this.GetResponse("GET", path));
  }
}
