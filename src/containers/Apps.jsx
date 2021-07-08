import React, {useState, useEffect } from 'react';
import Header from '../components/Header';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';
import Prefooter from '../components/PreFooter';
import Postfooter from '../components/PostFooter';
import useDisneyData from '../Hooks/useDisneyData';
import '../assets/styles/App.scss';

const API = 'http://localhost:3000/disneyData';

const App = () => {

  const disneyData = useDisneyData(API);


  return (
    <div className='App'>
      <Header />
      <Categories title='movieTrailers'>
        <Carousel>
          {
           disneyData.movieTrailers.map((item) => <CarouselItem key={item.id} {...item} />)
          }

        </Carousel>
      </Categories>
      <Prefooter />
      <Footer />
      <Postfooter />
    </div>
);
  }

export default App;
