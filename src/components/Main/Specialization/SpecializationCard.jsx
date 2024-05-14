import './Specialization.scss';
function SpecializationCard({faculty}) {
  return (
    <div class="specialization-card">
      <div class="specialization-item itemImg">
        <picture>
          <source srcset="./images/specialization/library.jpg" media="(max-width: 768px)" />
          <img src="./images/cardPhoto.jpg" alt="" />
        </picture>
      </div>
      <div class="specialization-item _line borderRight">
        <div class="specialization-code">бакалавриат · 01.03.00</div>
        <div class="specialization-name">{faculty.name}</div>
        <div class="specialization-format">
          <span>Очно</span>
          <span>Заочно</span>
          <span>Очно-заочно</span>
          <span>Дистанционно</span>
        </div>
        <div class="specialization-description">
          Программное обеспечение вычислительных систем · Математическое и программное обеспечение защиты информации · Экономика ·
          Организация педагогическо...
        </div>
        <div class="specialization-all">
          <a href="#">Все 43 профиля</a>
        </div>
      </div>
      <div class="specialization-item rowMobile">
        <div class="specialization-icons">
          <div class="icon grey">
            <img src="./images/flag.svg" alt="" />
          </div>
          <div class="icon grey">
            <img src="./images/bank.svg" alt="" />
          </div>
          <div class="icon grey">
            <img src="./images/Zzz.svg" alt="" />
          </div>
        </div>

        <div class="specialization-line">
          <span class="line-text specialization-line_text  smallTxtOS">Бюджетных мест</span>
          <span class="line-text specialization-line_text mediumTxtFormular places">260</span>
        </div>
        <div class="specialization-line">
          <span class="line-text specialization-line_text  smallTxtOS">Проходной балл</span>
          <span class="line-text specialization-line_text points mediumTxtFormular">152</span>
        </div>
        <div class="specialization-line">
          <span class="line-text specialization-line_text  smallTxtOS">Оплата в год</span>
          <span class="line-text specialization-line_text mediumTxtFormular payment">от 90 000 &#8381</span>
        </div>
      </div>
    </div>
  );
}
export default SpecializationCard;
