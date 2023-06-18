import React from 'react';
import Header from '../Header/Header';
import PageHelmet from '../../components/shared/PageHelmet';

const Blogs = () => {
  return (
      <>
          <PageHelmet pageTitle="Blogs" />
          <Header />
          <div className="mt-200">
              <h1>Blogs</h1>
          </div>
        
      </>
  )
}

export default Blogs;