import React from 'react';
import '../assets/styles/components/CarouselItem.scss'

const ChannelsCarouselItem = ({ title, year, duration, cover }) => (
    <div className='carousel__item'>
        <img className='carousel--item' src={cover} alt={title} />
    </div>
)




export default ChannelsCarouselItem;