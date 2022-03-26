/* eslint-disable no-restricted-globals */
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { getVideoSource } from '../redux/actions';
import LoadingPage from '../components/LoadingPage';
import '../assets/styles/containers/Player.scss';

function Player() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { playing } = useSelector((state) => state);

  const hasPlaying = !!Object.keys(playing).length;

  useEffect(() => {
    dispatch(getVideoSource(id));
    return () => dispatch(getVideoSource());
  }, []);

  return hasPlaying ? (
    <section className='player'>
      <video
        loop
        controls
        autoPlay
        className='player__video'
      >
        <source
          type='video/mp4'
          src={playing.source}
        />
      </video>
      <section className='player__details'>
        <button
          type='button'
          onClick={() => history.back()}
          className='player-details--back'
        >
          <FaArrowLeft size='25' />
        </button>
        <div className='player__details--information'>
          <div className='information__header'>
            <h3>{playing.title}</h3>
            <p>{playing.contentRating}</p>
          </div>
          <p className='information__description'>{playing.description}</p>
        </div>
      </section>
    </section>
  ) : <LoadingPage />;
}

export default Player;
