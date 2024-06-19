import {api} from '../../../utils/Api';
function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  export async function getUniversityFaculties(university) {
    let data = await api.getUniversityFaculties(university.id);
    data.map(item => {
      let price = Math.round(getRandom(50000, 150000) / 1000) * 1000;
      let score = getRandom(100, 200);
      let place = getRandom(20, 70);
      item.priсe = price;
      item.score = score;
      item.place = place;
    });
    return data;
  }