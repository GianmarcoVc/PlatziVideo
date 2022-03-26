/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import Header from '../components/Header';
import Search from '../components/Search';
import Carousel from '../components/Carousel';
import Categories from '../components/Categories';
import CarouselItem from '../components/CarouselItem';
import { setVideos } from '../redux/actions';
import '../assets/styles/App.scss';

function Home() {

  const dispatch = useDispatch();
  const { myList, trends, originals } = useSelector((state) => state);

  useEffect(() => {
    (!trends.length || !originals.length) && dispatch(setVideos());
  }, []);

  return (
    <>
      {/* <Header /> */}
      <Search isHome />
      {myList?.length ? (
        <Categories title='Mi lista'>
          <Carousel>
            {myList?.map((video) => <CarouselItem key={video.id} {...video} isList />)}
          </Carousel>
        </Categories>
      ) : null}
      <Categories title='Tendencias'>
        <Carousel>
          {trends?.map((video) => <CarouselItem key={video.id} {...video} />)}
        </Carousel>
      </Categories>
      <Categories title='Originales de PlatziVideo'>
        <Carousel>
          {originals?.map((video) => <CarouselItem key={video.id} {...video} />)}
        </Carousel>
      </Categories>
    </>
  );
}

export default Home;
