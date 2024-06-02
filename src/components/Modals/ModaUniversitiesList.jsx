import {useState, useEffect, useMemo} from 'react';
import {Link} from 'react-router-dom';
import './Modal.scss';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
function ModaUniversitiesList({isVisable, universities}) {
  function addUniversityToLS(university) {
    localStorage.setItem('university', JSON.stringify(university));
  }

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Modal className={`modal modal_type_universitiesList ${isVisable && 'modal_isVisable'}`} show={isVisable} backdrop={false}>
      <Modal.Body className="modal__list">
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
      </Modal.Body>
    </Modal>

    // <section className={`modal modal_type_universitiesList ${isVisable && 'modal_isVisable'}`}>
    //   <div className="modal__list">
    //     {universities.length > 0 ? (
    //       universities.map(university => (
    //         <Link key={university.id} to={`/univers/${university.id}`}>
    //           <span
    //             onClick={() => {
    //               addUniversityToLS(university);
    //             }}
    //             key={university.id}>
    //             {university.text}
    //           </span>
    //         </Link>
    //       ))
    //     ) : (
    //       <span>Ничего не найдено</span>
    //     )}
    //   </div>
    // </section>
  );
}
export default ModaUniversitiesList;
