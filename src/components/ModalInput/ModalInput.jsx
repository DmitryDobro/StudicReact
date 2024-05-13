import './ModalInput.scss';
import {useState, useEffect, useMemo} from 'react';
import {Link} from 'react-router-dom';
function ModalInput({isVisable, universities}) {
  function test() {
    console.log(123);
  }
  return (
    <section className={`ModalInput ${isVisable && 'ModalInput_type_isVisable'}`}>
      <div className="ModalInput__university-list">
        {universities.length > 0 ? (
          universities.map(university => (
            <Link key={university.id} to={`${university.id}`}>
              <span
                onClick={() => {
                  test(university);
                }}
                key={university.id}>
                {university.text}
              </span>
            </Link>
          ))
        ) : (
          <span>Ничего не найдено</span>
        )}
      </div>
    </section>
  );
}
export default ModalInput;
