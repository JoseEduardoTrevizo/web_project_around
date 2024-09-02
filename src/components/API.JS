class Api {
  constructor({ baseUrl, headers }) {
    this.baseUrl = baseUrl;
    this.headers = headers;
  }
  getUserInfo() {
    return fetch(`${this.baseUrl}/users/me`, {
      headers: this.headers,
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        //Si devuelve error se rechaza el promise
        return Promise.reject(`Error:${res.status}`);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  getInitialCards() {
    return fetch(`${this.baseUrl}/cards`, {
      headers: this.headers,
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Error:${res.status}`);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  updateProfile(name, about) {
    return fetch(`${this.baseUrl}/users/me`, {
      method: "PATCH",
      headers: {
        authorization: "61109ea5-9d4b-40e9-b399-d9be04a9e927",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        about,
      }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Error:${res.status}`);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  createCard(link, name) {
    return fetch(`${this.baseUrl}/cards`, {
      method: "POST",
      headers: this.headers,
      body: JSON.stringify({
        name,
        link,
      }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Error:${res.status}`);
      })
      .catch((error) => {
        console.log(error);
      });
  }
}

const api = new Api({
  baseUrl: "https://around.nomoreparties.co/v1/web-es-15",
  headers: {
    authorization: "61109ea5-9d4b-40e9-b399-d9be04a9e927",
    "Content-Type": "application/json",
  },
});

export default api;
