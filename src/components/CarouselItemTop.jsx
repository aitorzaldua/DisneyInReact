import React from 'react';
import '../assets/styles/components/CarouselItemTop.scss'


const CarouselItem = ({ title, cover, description }) => (
    <div className='carousel__item'>
        <img className='carousel--item' src={cover} alt={title} />

    </div>
)




export default CarouselItem;