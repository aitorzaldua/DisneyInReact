import React, {useState, useEffect } from 'react';
import SliderCategories from '../components/SliderCategories';
import SliderCarousel from '../components/SliderCarousel';
import SliderCarouselItem from '../components/SliderCarouselItem';
import ChannelsCategories from '../components/ChannelsCategories';
import ChannelsCarousel from '../components/ChannelsCarousel';
import ChannelsCarouselItem from '../components/ChannelsCarouselItem';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import useDisneyData from '../Hooks/useDisneyData';
import '../assets/styles/App.scss';


const API = 'http://localhost:3000/disneyData';

const Home = () => {

const disneyData = useDisneyData(API);


  return (
    <div className='Home'>
      <SliderCategories title='Slider'>
        <SliderCarousel>
          <SliderCarouselItem>
          </SliderCarouselItem>
        </SliderCarousel>
      </SliderCategories>

      <ChannelsCategories title='Channels'>
        <ChannelsCarousel>
          {
           disneyData.Channels.map((item) => <ChannelsCarouselItem key={item.id} {...item} />)
          }

        </ChannelsCarousel>
      </ChannelsCategories>
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
      
    </div>
);
  }

export default Home;
