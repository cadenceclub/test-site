import React from 'react';
import Header from '../Header/Header';
import PageHelmet from '../../components/shared/PageHelmet';

const About = () => {
  return (
      <>
          <PageHelmet pageTitle="About" />
          <Header />
          <div className="mt-200">
              <h1>About</h1>
          </div>
        
      </>
  )
}

export default About;