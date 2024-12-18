import React from 'react';
import './Modal.scss';
import {useAppDispatch, useAppSelector} from '../../hooks/redux';
import {ModalMobileMenu} from './ModalMobileMenu';
import {ToggleModalUserInfo} from '../../store/visableSlicer';
import {Link} from 'react-router-dom';
import {logo} from '../../img/_img';
function ModalUserInfo() {
  const dispatch = useAppDispatch();
  const isVisable = useAppSelector(state => state.visable.modalUserInfo);
  const userInfo = useAppSelector(state => state.userInfo);
  function handleClose() {
    dispatch(ToggleModalUserInfo());
  }

  return (
    <section className={`modal modal_type_userInfo mobileMenu ${isVisable && 'modal_isVisable'}`}>
      <span className="modal__closeIcon" onClick={handleClose}>
        &times;
      </span>
      <div className="mobile-menu_conteiner">
        <div className="mobileMenu__profile">
          <Link className="mobileMenu__logo" to="/" onClick={handleClose}>
            <img src={logo} alt="Логотип" />
          </Link>
          <div className="mobileMenu__profile_avatar">
            <img src={userInfo.imgUrl} alt="Фото пользователя" />
          </div>
          <div className="mobileMenu__profile_name">{userInfo.name}</div>
        </div>
      </div>
    </section>
  );
}
export default ModalUserInfo;
function dispatch(arg0: any) {
  throw new Error('Function not implemented.');
}
