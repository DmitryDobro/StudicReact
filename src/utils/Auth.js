class Auth {
  constructor() {
    this._url = 'http://localhost:3000';
  }
  _getResonce(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(new Error('Ошибка!'));
  }
  register(name, password, email, img) {
    return fetch(`${this._url}/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({name, password, email, img}),
    }).then(this._getResonce);
  }
  login(email, password) {
    return fetch(`${this._url}/signin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({email, password}),
    }).then(this._getResonce);
  }
  getDataUser(jwt) {
    return fetch(`${this._url}/users/me`, {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${jwt}`,
      },
    }).then(this._getResonce);
  }
}
const authApi = new Auth();
export {authApi};
