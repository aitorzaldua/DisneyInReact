import React from 'react';
import '../assets/styles/components/Carousel.scss'


    const ChannelsCarousel = ({ children }) => (
        <section className='carousel'>
            <div className='carousel__container'>
            {children}
            </div>
        </section>
    );


export default ChannelsCarousel;