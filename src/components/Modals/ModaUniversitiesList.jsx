import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import './Modal.scss';
function ModaUniversitiesList({isVisable, closeModalUnivers}) {
  const universities = useSelector(state => state.universities.universities);
  function addUniversityToLS(university) {
    localStorage.setItem('university', JSON.stringify(university));
    closeModalUnivers();
  }
  return (
    <section className={`modal modal_type_universitiesList ${isVisable && 'modal_isVisable'}`}>
      <div className="modal__list">
        {universities.length > 0 ? (
          universities.map(university => (
            <Link key={university.id} to={`/univers/${university.id}`}>
              <span
                onClick={() => {
                  addUniversityToLS(university);
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
