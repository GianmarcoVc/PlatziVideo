import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { loginRequest, registerRequest } from '../redux/actions';
import '../assets/styles/containers/FormSession.scss';
import googleIcon from '../assets/static/google-icon.png';
import twitterIcon from '../assets/static/twitter-icon.png';

function FormSession({ isLogin, isRegister }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [form, setValues] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleInputChange = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(isLogin ?
      loginRequest(form) :
      registerRequest(form));
    navigate('/');
  };

  return (
    <section className='formSession'>
      <section className='formSession__container'>
        <h2>{isLogin ? 'Inicia sesión' : 'Regístrate'}</h2>
        <form
          onSubmit={handleSubmit}
          onChange={handleInputChange}
          className='formSession__container--form'
        >
          {isRegister ? (
            <input
              name='name'
              type='text'
              className='input'
              placeholder='Nombre'
            />
          ) : null}
          <input
            type='text'
            name='email'
            className='input'
            placeholder='Correo'
          />
          <input
            type='password'
            name='password'
            className='input'
            placeholder='Contraseña'
          />
          <label
            htmlFor='cbox1'
            className='formSession__container--remember-me'
          >
            <input
              id='cbox1'
              type='checkbox'
              value='first_checkbox'
              className='remember-checkbox'
            />
            Recuérdame
          </label>
          <button
            type='submit'
            className='button'
          >
            {isLogin ? 'Iniciar sesión' : 'Regístrarte'}
          </button>
          {isLogin ? (
            <Link
              to='/'
              className='formSession__container--reset-password'
            >
              Olvidé mi contraseña
            </Link>
          ) : null}
        </form>
        {isLogin ? (
          <section className='formSession__container--social-media'>
            <div>
              <img
                src={googleIcon}
                alt='IconGoogle'
              />
              Inicia sesión con Google
            </div>
            <div>
              <img
                src={twitterIcon}
                alt='IconTwitter'
              />
              Inicia sesión con Twitter
            </div>
          </section>
        ) : null}
        <p className='formSession__container--change-mode'>
          {`${isLogin ? 'Aún no' : 'Ya'} tienes cuenta?`}
          <Link to={isLogin ? '/register' : '/login'}>
            {isLogin ? 'Regístrate' : 'Inicia Sesion'}
          </Link>
        </p>
      </section>
    </section>
  );
};

export default FormSession;
