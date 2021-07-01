import React from 'react';
import Header from '../components/Header';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';
import Prefooter from '../components/PreFooter';
import Postfooter from '../components/PostFooter';
import '../assets/styles/App.scss';

const App = () => (
  <div className='App'>
    <Header />
    <Categories>
      <Carousel>
        <CarouselItem />
      </Carousel>
    </Categories>
    <Prefooter />
    <Footer />
    <Postfooter />
  </div>
);

export default App;
