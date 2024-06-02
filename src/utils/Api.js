class Api {
  constructor(config) {
    this._urlCity = `https://api.hh.ru/areas`;
    this._urlUniversity = `https://api.hh.ru/suggests/educational_institutions?text=`;
    this._urlUniversityFacultet = `https://api.hh.ru/educational_institutions`;
  }
  _getResponce(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(new Error('Ошибка!'));
  }
  getCities() {
    return fetch(this._urlCity, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(this._getResponce);
  }
  getUniversity(param){
    return fetch(this._urlUniversity + param, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(this._getResponce);
  }
  getUniversityFaculties(id){
    return fetch(`${this._urlUniversityFacultet}/${id}/faculties`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(this._getResponce);
  }
}

const api = new Api();
export {api};
