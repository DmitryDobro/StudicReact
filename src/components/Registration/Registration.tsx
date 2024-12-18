import React, {useState, ChangeEvent, FormEvent} from 'react';
import {Link} from 'react-router-dom';
import './Registration.scss';
interface RegistrationProps {
  onRegister: (valueName: string, valuePassword: string, valueEmail: string, valueImgUrl: string) => void;
}
function Registration({onRegister}: RegistrationProps) {
  const [valuePassword, setValuePassword] = useState('');
  const [valueEmail, setValueEmail] = useState('');
  const [valueName, setValueName] = useState('');
  const [valueImgUrl, setValueImgUrl] = useState('');

  const handleChangeValueEmail = (e: ChangeEvent<HTMLInputElement>) => setValueEmail(e.target.value);
  const handleChangeValuePassword = (e: ChangeEvent<HTMLInputElement>) => setValuePassword(e.target.value);
  const handleChangeValueName = (e: ChangeEvent<HTMLInputElement>) => setValueName(e.target.value);
  const handleChangeValueImgUrl = (e: ChangeEvent<HTMLInputElement>) => setValueImgUrl(e.target.value);

  function handleSubmit(evt: FormEvent<HTMLFormElement>) {
    evt.preventDefault();
    onRegister(valueName, valuePassword, valueEmail, valueImgUrl);
  }
  return (
    <section className="registration">
      <h1 className="registration__message">Добро пожаловать!</h1>

      <form className="registration__form" onSubmit={handleSubmit}>
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
            <label htmlFor="email" className="registration__label">
              Ссылка на фото
            </label>
            <input
              id="imgUrl"
              placeholder="https://unsplash.com/"
              type="imgUrl"
              name="imgUrl"
              className="registration__input"
              onChange={handleChangeValueImgUrl}
              required
            />
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
          <Link to="/signin" className="registration__login-link">
            Войти
          </Link>
        </div>
      </form>
    </section>
  );
}

export default Registration;
function setValueName(value: string) {
  throw new Error('Function not implemented.');
}
