import React from 'react';
import '../assets/styles/components/CarouselItem.scss'
import frozen from '../assets/static/frozen.png';
import playIcon from  '../assets/static/play-icon.png';
import plusIcon from  '../assets/static/plus-icon.png';

const CarouselItem = () => (
    <div className='carousel__item'>
        <img className='carousel--item' src={frozen} alt='' />
        <div className="carousel-item__details">
            <img className='carousel-item__details--img' src={playIcon} alt='Play Icon' />
            <img className='carousel-item__details--img' src={plusIcon} alt='Plus Icon' />
            <p className='carousel-item__details--title'>Frozen II</p>
            <p className='carousel-item__details--subtitle'>2019 - 103 minutes</p>
        </div>
    </div>
)




export default CarouselItem;