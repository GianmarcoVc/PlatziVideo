import React from 'react';
import ReactLoading from 'react-loading';
import '../assets/styles/components/LoadingPage.scss';

function LoadingPage() {
  return (
    <section className='loadingPage'>
      <ReactLoading type='spin' width='100px' height='100px' />
    </section>
  );
}

export default LoadingPage;
