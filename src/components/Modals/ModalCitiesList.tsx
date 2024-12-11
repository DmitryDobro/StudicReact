import './Modal.scss';
import {useDispatch} from 'react-redux';
import {ToggleCities} from '../../store/visableSlicer';
import React from 'react';

interface ModalCitiesListProps {
  isVisable: boolean;
  handleFilteredCities: (param: string) => void;
  citiesToRender: {
    id: number;
    name: string;
  }[];
  setIsVisable: (param: boolean) => void;
}
function ModalCitiesList({isVisable, handleFilteredCities, citiesToRender, setIsVisable}: ModalCitiesListProps) {
  const [inputValue, setInputValue] = React.useState<string>('');
  const dispatch = useDispatch();
  function handleInput(evt: {target: {value: string}}) {
    handleFilteredCities(evt.target.value);
  }
  function test(city: {}) {
    console.log(city);
    localStorage.setItem('city', JSON.stringify(city));
    dispatch(ToggleCities(false));
    setIsVisable(false);
    setInputValue('');
  }
  return (
    <section className={`modal ${isVisable && 'modal_isVisable'}`}>
      <input className="modal__search" id="inputHeader" type="text" placeholder="Регион" value={inputValue} onChange={handleInput} />
      <div className="modal__list">
        {citiesToRender.length > 0 ? (
          citiesToRender.map(city => (
            <a key={city.id} href="#">
              <span
                onClick={() => {
                  test(city);
                }}>
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
