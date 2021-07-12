import React, {useState, useEffect } from 'react';
import Header from '../components/Header';
import Categories from '../components/Categories';
import CategoriesTop from '../components/CategoriesTop';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import CarouselTop from '../components/CarouselTop';
import CarouselItemTop from '../components/CarouselItemTop';
import Footer from '../components/Footer';
import Prefooter from '../components/PreFooter';
import Postfooter from '../components/PostFooter';
import useDisneyData from '../Hooks/useDisneyData';
import '../assets/styles/App.scss';

const API = 'http://localhost:3001/disneyData';

const Home = () => {

const disneyData = useDisneyData(API);


  return (
    <div className='Home'>
      <Header />
      <CategoriesTop title='Top'>
        <CarouselTop>
          {
           disneyData.Top.map((item) => <CarouselItemTop key={item.id} {...item} />)
          }

        </CarouselTop>
      </CategoriesTop>
      <Categories title='Channels'>
        <Carousel>
          {
           disneyData.Channels.map((item) => <CarouselItem key={item.id} {...item} />)
          }

        </Carousel>
      </Categories>
        <Categories title='Movies'>
        <Carousel>
          {
           disneyData.Movies.map((item) => <CarouselItem key={item.id} {...item} />)
          }

        </Carousel>
      </Categories>
      <Categories title='Series'>
        <Carousel>
          {
           disneyData.Series.map((item) => <CarouselItem key={item.id} {...item} />)
          }

        </Carousel>
      </Categories>
      <Prefooter />
      <Footer />
      <Postfooter />
    </div>
);
  }

export default Home;
