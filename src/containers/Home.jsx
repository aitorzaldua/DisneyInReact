import React, {useState, useEffect } from 'react';
import { connect } from 'react-redux';
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



const Home = ({ Channels, Movies, Series }) => {

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
           Channels.map((item) => <ChannelsCarouselItem key={item.id} {...item} />)
          }

        </ChannelsCarousel>
      </ChannelsCategories>
        <Categories title='Movies'>
        <Carousel>
          {
           Movies.map((item) => <CarouselItem key={item.id} {...item} />)
          }

        </Carousel>
      </Categories>
      <Categories title='Series'>
        <Carousel>
          {
           Series.map((item) => <CarouselItem key={item.id} {...item} />)
          }

        </Carousel>
      </Categories>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    Channels: state.Channels,
    Movies: state.Movies,
    Series: state.Series,
};


  export default connect(mapStateToProps, null)(Home);
