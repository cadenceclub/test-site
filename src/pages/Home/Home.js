import React from 'react';

import Header from '../Header/Header';
import Hero from '../../components/Hero/Hero';
import PageHelmet from '../../components/shared/PageHelmet';
import Services from '../Services/Services';
import SecondServices from '../SecondServices/SecondServices';
import Testimonial from '../Testimonial/Testimonial';
import Projects from '../Projects/Projects';
import FAQs from '../FAQs/FAQs';
import Contact from '../../components/Contact/Contact';
import Footer from '../../components/Footer/Footer';

const Home = () => {
  return (
    <>
      <PageHelmet pageTitle=""/>
      <Header/>
      <Hero />
      <Services />
      <SecondServices />
      <Testimonial />
      <Projects />
      <FAQs />
      <Contact />
      <Footer/>
    </>
  )
}

export default Home