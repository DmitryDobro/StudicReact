import React, {useState, ChangeEvent, FormEvent} from 'react';
import {Link} from 'react-router-dom';
import './Login.scss';
interface LoginProps {
  onLogin: (valuePassword: string, valueEmail: string) => void;
}
function Login({onLogin}: LoginProps) {
  const [valuePassword, setValuePassword] = React.useState('');
  const [valueEmail, setValueEmail] = React.useState('');
  
  const handleChangeValueEmail = (e: ChangeEvent<HTMLInputElement>) => setValueEmail(e.target.value);
  const handleChangeValuePassword = (e: ChangeEvent<HTMLInputElement>) => setValuePassword(e.target.value);

  function handleSubmit(evt: FormEvent<HTMLFormElement>) {
    evt.preventDefault();
    onLogin(valueEmail, valuePassword);
  }
  return (
    <section className="login">
      <h1 className="login__message">Рады видеть!</h1>
      <form className="login__form" onSubmit={handleSubmit}>
        <div className="login__form-container">
          <div className="login__field">
            <label htmlFor="email" className="login__label">
              E-mail
            </label>
            <input
              id="email"
              placeholder="pochta@yandex.ru"
              type="email"
              name="email"
              className="login__input"
              onChange={handleChangeValueEmail}
            />
            {/* <span className={`login__input-error`}>{isShowErrorEmail && validateEmail(valueEmail).message}</span> */}
          </div>
          <div className="login__field">
            <label htmlFor="password" className="login__label">
              Пароль
            </label>
            <input
              id="hidenPassword"
              placeholder="****"
              type="password"
              name="password"
              className="login__input"
              onChange={handleChangeValuePassword}
              required
            />
            {/* <span className={`login__input-error`}>{isShowErrorPassword && validatePassword(valuePassword).message}</span> */}
          </div>
          <button className="btn login__submit">Войти</button>
        </div>
        <div className="login__registration">
          <p className="login__registration-text">Ещё не зарегистрированы?</p>
          <Link to="/signup" className="login__registration-link">
            Регистрация
          </Link>
        </div>
      </form>
    </section>
  );
}
export default Login;
