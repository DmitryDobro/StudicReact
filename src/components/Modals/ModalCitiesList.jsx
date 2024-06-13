'use client';
import {createRef} from 'react';
import './Modal.scss';
import Link from 'next/link';

function ModalCitiesList({isVisable, handleFilteredCities, citiesToRender, setModalCitiesVisable}) {
  let textInput = createRef();
  function handleInput(evt) {
    handleFilteredCities(evt.target.value);
  }
  function test(city) {
    localStorage.setItem('city', JSON.stringify(city));
    setModalCitiesVisable(false);
    textInput.current.value = '';
  }
  return (
    <section className={`modal ${isVisable && 'modal_isVisable'}`}>
      <input className="modal__search" id="inputHeader" type="text" placeholder="Регион" ref={textInput} onChange={handleInput} />
      <div className="modal__list">
        {citiesToRender.length > 0 ? (
          citiesToRender.map(city => (
            <a
              key={city.id}
              href="#"
              onClick={() => {
                test(city);
              }}>
              {city.name}
            </a>
          ))
        ) : (
          <span>Ничего не найдено</span>
        )}
      </div>
    </section>
  );
}
export default ModalCitiesList;
