import React, {useState, useEffect } from 'react';
import Header from '../components/Header';
import SliderCategories from '../components/SliderCategories';
import SliderCarousel from '../components/SliderCarousel';
import SliderCarouselItem from '../components/SliderCarouselItem';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';
import Prefooter from '../components/PreFooter';
import Postfooter from '../components/PostFooter';
import useDisneyData from '../Hooks/useDisneyData';
import '../assets/styles/App.scss';


const API = 'http://localhost:3000/disneyData';

const Home = () => {

const disneyData = useDisneyData(API);


  return (
    <div className='Home'>
      <Header />
      <SliderCategories title='Slider'>
        <SliderCarousel>
          <SliderCarouselItem>
          </SliderCarouselItem>
        </SliderCarousel>
      </SliderCategories>

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
