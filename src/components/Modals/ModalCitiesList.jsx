import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import './Modal.scss';

function ModalCitiesList({isVisable, closeModalSities, handleFilteredCities, citiesToRender, setChooseCity}) {
  function handleInput(evt) {
    handleFilteredCities(evt.target.value);
  }
  function test(city) {
    localStorage.setItem('city', JSON.stringify(city));
    closeModalSities();
    setChooseCity(city.name);
  }
  return (
    <section className={`modal ${isVisable && 'modal_isVisable'}`}>
      <input className="modal__search" id="inputHeader" type="text" placeholder="Регион" onChange={handleInput} />
      <div className="modal__list">
        {citiesToRender.length > 0 ? (
          citiesToRender.map(city => (
            <Link key={city.id} to={`region/${city.id}`}>
              <span
                onClick={() => {
                  test(city);
                }}
                key={city.id}>
                {city.name}
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
export default ModalCitiesList;
