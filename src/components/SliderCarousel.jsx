import React from 'react';
import '../assets/styles/components/SliderCarousel.scss'


    const SliderCarousel = ({ children }) => (
        <section className='sliderCarousel'>
            <div className='sc__container'>
            {children}
            </div>
        </section>
    );


export default SliderCarousel;