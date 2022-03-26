import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logoutRequest } from '../redux/actions';
import gravatar from '../utils/gravatar';
import UserIcon from '../assets/static/user-icon.png';
import Logo from '../assets/static/logo-platzi-video-BW2.png';
import '../assets/styles/components/Header.scss';

function Header({ isLogin, isRegister }) {

  const dispatch = useDispatch();
  const { user } = useSelector((state) => state);
  const hasUser = !!Object.keys(user).length;

  const headerClass = classNames('header', {
    isLogin,
    isRegister,
  });

  return (
    <header className={headerClass}>
      <Link to='/'>
        <img
          src={Logo}
          alt='Platzi Video'
          className='header__logo'
        />
      </Link>
      <div className='header__menu'>
        <div className='header__menu--profile'>
          <img
            alt={user.name}
            src={user.email ? gravatar(user.email) : UserIcon}
          />
          <p>{user.name || 'Cuenta'}</p>
        </div>
        <ul className='header__menu--options'>
          <li>
            {hasUser ? (
              <a
                href='#logout'
                onClick={() => dispatch(logoutRequest())}
              >
                Cerrar Sesión
              </a>
            ) : <Link to='/login'>Iniciar Sesión</Link>}
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
