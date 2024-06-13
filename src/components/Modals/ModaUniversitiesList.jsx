'use client';
import Link from 'next/link';
import './Modal.scss';
function ModaUniversitiesList({isVisable, closeModalUnivers, universities}) {
  function addUniversityToLS(university) {
    localStorage.setItem('university', JSON.stringify(university));
    closeModalUnivers();
  }
  return (
    <section className={`modal modal_type_universitiesList ${isVisable && 'modal_isVisable'}`}>
      <div className="modal__list">
        {universities.length > 0 ? (
          universities.map(university => (
            <Link
              key={university.id}
              href={`/univers/${university.id}`}
              onClick={() => {
                addUniversityToLS(university);
              }}>
              {university.text}
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
