import {createRef} from 'react';
import './Modal.scss';
import {useDispatch} from 'react-redux';
import {ToggleCities} from '../../store/visableSlicer';

function ModalCitiesList({isVisable, handleFilteredCities, citiesToRender,setIsVisable}) {
  const dispatch = useDispatch();
  let textInput = createRef();
  function handleInput(evt) {
    handleFilteredCities(evt.target.value);
  }
  function test(city) {
    localStorage.setItem('city', JSON.stringify(city));
    dispatch(ToggleCities(false));
    setIsVisable(false)
    textInput.current.value = '';
  }
  return (
    <section className={`modal ${isVisable && 'modal_isVisable'}`}>
      <input className="modal__search" id="inputHeader" type="text" placeholder="Регион" ref={textInput} onChange={handleInput} />
      <div className="modal__list">
        {citiesToRender.length > 0 ? (
          citiesToRender.map(city => (
            <a key={city.id} href="#">
              <span
                onClick={() => {
                  test(city);
                }}
                key={city.id}>
                {city.name}
              </span>
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
