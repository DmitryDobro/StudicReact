import {useState, useEffect, useMemo} from 'react';
import {Link} from 'react-router-dom';
import './Modal.scss';
function ModaUniversitiesList({isVisable, universities}) {
  function test() {
    console.log(123);
  }
  return (
    <section className={`modal modal_type_universitiesList ${isVisable && 'modal_isVisable'}`}>
      <div className="modal__list">
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
export default ModaUniversitiesList;
