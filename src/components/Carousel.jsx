import React from 'react';
import '../assets/styles/components/Carousel.scss'


    const Carousel = ({ children }) => (
        <section className='carousel'>
            <div className='carousel__container'>

            <h2 className='text'>This is part of a FrontEnd Developer Portfolio, no other thing is intended. Is no related to Disney Company.</h2>
            <h2 className='text2'>Just click on the videos for Play/Pause the official Movie Trailers.</h2>

            {children}
            </div>
        </section>
    );




export default Carousel;