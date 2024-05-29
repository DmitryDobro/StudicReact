import './MainInformation.scss';
function MainInformation() {
  return (
    <div className="mainInformation">
      <div className="container">
        <h2 className="mainInformation-title boldTxt">Основная информация</h2>
        <div className="mainInformation-body">
          <div className="mainInformation-unuversStat">
            <div className="mainInformation-card _card">
              <div className="mainInformation-item _item">
                <span className="card-number boldTxt _blue">4 532</span>
                <span className="card-subtitle">платных мест</span>
              </div>
              <div className="mainInformation-item  _item">
                <span className="card-number boldTxt _blue">1 702</span>
                <span className="card-subtitle">бюджетных мест</span>
              </div>
            </div>
            <div className="mainInformation-card _card">
              <div className="mainInformation-item  _item">
                <span className="card-number boldTxt">1 место</span>
                <span className="card-subtitle">в Санкт-Петербурге</span>
              </div>
              <div className="mainInformation-item  _item">
                <span className="card-number boldTxt">12 место</span>
                <span className="card-subtitle">в РФ</span>
              </div>
            </div>
            <div className="mainInformation-card column bigcard">
              <div className="mainInformation-line">
                <span className="line-text mediumTxtOS">Государственный</span>
                <span className="icon green">
                  <img src="./images/check_24px.svg" alt="" />
                </span>
              </div>
              <div className="mainInformation-line">
                <span className="line-text mediumTxtOS">Общежитие</span>
                <span className="icon red">
                  <img src="./images/close_24px.svg" alt="" />
                </span>
              </div>
              <div className="mainInformation-line">
                <span className="line-text mediumTxtOS">Военная кафедра</span>
                <span className="icon green">
                  <img src="./images/check_24px.svg" alt="" />
                </span>
              </div>
            </div>
            <div className="mainInformation-card _card smallcard">
              <div className="mainInformation-item  _item">
                <span className="card-subtitle">Вы представитель УЗ?</span>
                <button className="btn noneColor">получить доступ</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default MainInformation;
