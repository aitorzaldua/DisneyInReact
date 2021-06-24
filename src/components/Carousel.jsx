import React from 'react';


    const Carousel = ({ children }) => (
        <section className='carousel'>
            <div className='carousel__container'>

            <h2 class="text">checking the Carousel.</h2>

                {children}
            </div>
        </section>
    );




export default Carousel;