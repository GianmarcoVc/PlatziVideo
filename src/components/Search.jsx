import React from 'react';
import classNames from 'classnames';
import '../assets/styles/components/Search.scss';

function Search({ isHome }) {
  const inputClass = classNames('search__input', { isHome });
  return (
    <section className='search'>
      <h2 className='search__title'>¿Qué quieres ver hoy?</h2>
      <input type='text' className={inputClass} placeholder='Buscar...' />
    </section>
  );
}

export default Search;
