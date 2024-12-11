import './Modal.scss';
import React, {ChangeEvent, FormEvent} from 'react';
import { useAppSelector, useAppDispatch } from '../../hooks/redux';
function Registration({onRegister}: {onRegister: (valueName: string, valuePassword: string, valueEmail: string) => void}) {
  const dispatch = useAppDispatch();
  const isVisable = useAppSelector(state => state.visable.modalRegistration);
  const [valuePassword, setValuePassword] = React.useState('');
  const [valueEmail, setValueEmail] = React.useState('');
  const [valueName, setValueName] = React.useState('');
  const handleChangeValueEmail = (e: ChangeEvent<HTMLInputElement>) => setValueEmail(e.target.value);
  const handleChangeValuePassword = (e: ChangeEvent<HTMLInputElement>) => setValuePassword(e.target.value);
  const handleChangeValueName = (e: ChangeEvent<HTMLInputElement>) => setValueName(e.target.value);
  function handleSubmit(evt:FormEvent<HTMLFormElement>) {
    evt.preventDefault();
    onRegister(valueName, valuePassword, valueEmail);
  }
  return (
    <section className={`modal modal_type_registration mobileMenu ${isVisable && 'modal_isVisable'}`}>
      <h1 className="registration__message">Добро пожаловать!</h1>
      <form className="modal__form" onSubmit={handleSubmit}>
        <div className="registration__form-container">
          <div className="registration__field">
            <label htmlFor="name" className="registration__label">
              Имя
            </label>
            <input
              id="name"
              placeholder="Александр"
              type="text"
              name="name"
              className="registration__input"
              onChange={handleChangeValueName}
              required
            />
            {/* <span className={`registration__input-error`}>{isShowErrorName && validateName(valueName).message}</span> */}
          </div>
          <div className="registration__field">
            <label htmlFor="email" className="registration__label">
              E-mail
            </label>
            <input
              id="email"
              placeholder="pochta@yandex.ru"
              type="email"
              name="email"
              className="registration__input"
              onChange={handleChangeValueEmail}
              required
            />
            {/* <span className={`registration__input-error`}>{isShowErrorEmail && validateEmail(valueEmail).message}</span> */}
          </div>
          <div className="registration__field">
            <label htmlFor="password" className="registration__label">
              Пароль
            </label>
            <input
              id="hidenPassword"
              placeholder="****"
              type="password"
              name="password"
              className="registration__input"
              onChange={handleChangeValuePassword}
              required
            />
            {/* <span className={`registration__input-error`}>{isShowErrorPassword && validatePassword(valuePassword).message}</span> */}
          </div>
          <button className="btn registration__submit">Зарегистрироваться</button>
        </div>
        <div className="registration__login">
          <p className="registration__login-text">Уже зарегистрированы?</p>
          <p className="registration__login-link">Войти</p>
        </div>
      </form>
    </section>
  );
}

export default Registration;
