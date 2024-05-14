import './MainInformation.scss';
function MainInformation() {
  return (
    <div class="mainInformation">
      <div className="container">
        <h2 class="mainInformation-title boldTxt">Основная информация</h2>
        <div class="mainInformation-body">
          <div class="mainInformation-unuversStat">
            <div class="mainInformation-card _card">
              <div class="mainInformation-item _item">
                <span class="card-number boldTxt _blue">4 532</span>
                <span class="card-subtitle">платных мест</span>
              </div>
              <div class="mainInformation-item  _item">
                <span class="card-number boldTxt _blue">1 702</span>
                <span class="card-subtitle">бюджетных мест</span>
              </div>
            </div>
            <div class="mainInformation-card _card">
              <div class="mainInformation-item  _item">
                <span class="card-number boldTxt">1 место</span>
                <span class="card-subtitle">в Санкт-Петербурге</span>
              </div>
              <div class="mainInformation-item  _item">
                <span class="card-number boldTxt">12 место</span>
                <span class="card-subtitle">в РФ</span>
              </div>
            </div>
            <div class="mainInformation-card column bigcard">
              <div class="mainInformation-line">
                <span class="line-text mediumTxtOS">Государственный</span>
                <span class="icon green">
                  <img src="./images/check_24px.svg" alt="" />
                </span>
              </div>
              <div class="mainInformation-line">
                <span class="line-text mediumTxtOS">Общежитие</span>
                <span class="icon red">
                  <img src="./images/close_24px.svg" alt="" />
                </span>
              </div>
              <div class="mainInformation-line">
                <span class="line-text mediumTxtOS">Военная кафедра</span>
                <span class="icon green">
                  <img src="./images/check_24px.svg" alt="" />
                </span>
              </div>
            </div>
            <div class="mainInformation-card _card smallcard">
              <div class="mainInformation-item  _item">
                <span class="card-subtitle">Вы представитель УЗ?</span>
                <button class="btn noneColor">получить доступ</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default MainInformation;
