import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { string, number } from 'prop-types';
import PlayIcon from '../assets/static/play-icon.png';
import PlusIcon from '../assets/static/plus-icon.png';
import RemoveIcon from '../assets/static/remove-icon.png';
import '../assets/styles/components/CarouselItem.scss';
import { deleteFavorite, setFavorite } from '../redux/actions';

function CarouselItem({ id, slug, title, language, year, contentRating, duration, cover, isList }) {
  const dispatch = useDispatch();
  const handleSetFavorite = () => {
    dispatch(setFavorite({
      id, cover, title, year, contentRating, duration,
    }));
  };
  const handleDeleteFavorite = (itemId) => {
    dispatch(deleteFavorite(itemId));
  };
  return (
    <div className='carousel-item'>
      <img
        alt={slug}
        src={cover}
        className='carousel-item__img'
      />
      <div className='carousel-item__details'>
        <div className='carousel-item__icons'>
          <Link to={`/player/${id}`}>
            <img
              src={PlayIcon}
              alt='Play Icon'
              className='carousel-item__details--img'
            />
          </Link>
          {!isList ? (
            <img
              src={PlusIcon}
              alt='Plus Icon'
              className='carousel-item__details--img'
              onClick={() => handleSetFavorite(id)}
            />
          ) : (
            <img
              src={RemoveIcon}
              alt='Remove Icon'
              className='carousel-item__details--img'
              onClick={() => handleDeleteFavorite(id)}
            />
          )}
        </div>
        <p className='carousel-item__details--title'>{title}</p>
        <p className='carousel-item__details--subtitle'>
          {`${year} ${contentRating} ${Math.round(duration / 60)} hs`}
        </p>
      </div>
    </div>
  );
}

CarouselItem.propTypes = {
  id: number,
  slug: string,
  title: string,
  language: string,
  year: number,
  contentRating: string,
  duration: number,
  cover: string,
};

export default CarouselItem;
