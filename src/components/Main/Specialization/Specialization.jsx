import './Specialization.scss';
import SpecializationCard from './SpecializationCard';
function Specialization({faculties}) {
    console.log(faculties);
  return (
    <div class="specialization">
      <div class="specialization-header">
        <h2 class="specialization-title boldTxt">Специальности</h2>
        <span class="specialization-subtile smallTxtOS">432 специальности</span>
      </div>
      <div class="specialization-filter">
        <ul>
          <span>Сортировать:</span>
          <li>
            <button id="payment">по оплате в год</button>
          </li>
          <li>
            <button id="2">по отзывам</button>
          </li>
          <li>
            <button id="points">по прозодному баллу</button>
          </li>
          <li>
            <button id="places">по количеству бюджетных мест</button>
          </li>
        </ul>
      </div>
      <div class="specialization-body">
        <div class="specialization-row">
          {faculties.map(faculty => (
            <SpecializationCard faculty={faculty} key={faculty.id}/>
          ))}
        </div>
        <div class="specialization-link">
          <button class="btn whiteBlue">Показать все специальности</button>
        </div>
      </div>
    </div>
  );
}

export default Specialization;
