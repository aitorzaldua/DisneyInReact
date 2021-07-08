import React from 'react';
import '../assets/styles/components/CarouselItem.scss'
import playIcon from  '../assets/static/play-icon.png';
import plusIcon from  '../assets/static/plus-icon.png';

const CarouselItem = ({ title, year, duration, cover, description, source }) => (
    <div className='carousel__item'>
        <img className='carousel--item' src={cover} alt={title} />
        <div className="carousel-item__details">
            <img className='carousel-item__details--img' src={playIcon} alt='Play Icon' />
            <img className='carousel-item__details--img' src={plusIcon} alt='Plus Icon' />
            <p className='carousel-item__details--title'>{title}</p>
            <p className='carousel-item__details--subtitle'>
                {`${year} - ${duration} minutes`}
            </p>
        </div>
    </div>
)




export default CarouselItem;