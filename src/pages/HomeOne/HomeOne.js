import React from 'react';
import Header from '../Header/Header';
import PageHelmet from '../../components/shared/PageHelmet';

const HomeOne = () => {
  return (
      <>
          <PageHelmet pageTitle="HomeOne" />
          <Header />
          <div className="mt-200">
              <h1>HomeOne</h1>
          </div>
        
      </>
  )
}

export default HomeOne;