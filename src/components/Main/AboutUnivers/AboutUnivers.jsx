import {useState} from 'react';
import './AboutUnivers.scss';
import photoUniverLG from '../../../img/Univers/fotoUniverBG.jpg';
import photoUniver from '../../../img/Univers/fotoUnivers.jpg';
import photoUniver2 from '../../../img/Univers/fotoUnivers2.jpg';
import photoUniver3 from '../../../img/Univers/fotoUnivers3.jpg';
import photoUniver4 from '../../../img/Univers/fotoUnivers4.jpg';
export default function AboutUnivers() {
  const [isVisable, setIsVisable] = useState(false);
  function showText() {
    setIsVisable(!isVisable);
  }
  return (
    <div className="univers">
      <h2 className="univers-title boldTxt">Об университете</h2>
      <div className="univers-body">
        <div className="univers-gallery">
          <div className="gallery-item big_item">
            <img src={photoUniverLG} alt="Фото университета" />
          </div>
          <div className="gallery-item">
            <img src={photoUniver4} alt="Фото университета" />
          </div>
          <div className="gallery-item">
            <img src={photoUniver} alt="Фото университета" />
          </div>
          <div className="gallery-item">
            <img src={photoUniver2} alt="Фото университета" />
          </div>
          <div className="gallery-item">
            <img src={photoUniver3} alt="Фото университета" />
          </div>
        </div>
        <div className="univers-text mediumTxtOS">
          <span>
            <p>
              Московский университет ― это один из самых старейших университетов России, был основан в 1755 году. Университет известен во
              мире и занимает лидирующие места в рейтингах вузов самых различных направлений.
            </p>
            <p>
              В 2008 году он получил награду «Европейское качество» «за стремление достичь высокого качества образовательных услуг в
              соответствии с международными стандартами». МГТУ им. Н. Э. Баумана в течение более чем 14 лет является головным вузом
              Ассоциации технических университетов, в состав которой входят более 130 российских университетов.
            </p>
          </span>
          <div className={`univers-text _hideBlock mediumTxtOS ${isVisable && 'hideBlock_visability'}`}>
            <span>
              <h3 className="boldTxt">Преимущества обучения в НИУ МЭИ (Москва)</h3>
              <p>
                Сотрудничество с крупнейшими работодателями. В числе первостепенных задач Национального исследовательского института —
                помощь выпускникам в трудоустройстве. Среди партнёров-работодателей — Россети, Газпром энергохолдинг, Норильский никель.
              </p>
              <p>
                Всё для комфорта учащихся. Каждый иногородний и иностранный студент вуза МЭИ обеспечивается местом в общежитии. К услугам
                учащихся — собственный санаторий, оздоровительно-спортивный студенческий лагерь, радио и Дом культуры.
              </p>
            </span>
          </div>
          <span className="univers-seeMore" onClick={showText}>
            {isVisable ? 'Свернуть' : 'Развернуть'}
          </span>
        </div>
      </div>
    </div>
  );
}
