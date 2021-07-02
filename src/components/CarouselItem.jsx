import React from 'react';
import '../assets/styles/components/CarouselItem.scss'
//import frozen from  '../assets/static/frozen.mp4';

const CarouselItem = () => (
    <div className='carousel__item'>
            <video id='video' className ="carousel--item" poster='../assets/static/frozen.png'>
                    <source src='../assets/static/frozen.mp4' type="video/mp4" />
            </video>
            <video id="video2" className="carousel--item" poster='../assets/static/avengers.png'>
                <source src="assets/static/avengers.mp4" type="video/mp4" />
            </video>
                <video id="video3" className="carousel--item" poster='../assets/static/monster4.png'>
                    <source src="assets/static/monster.mp4" type="video/mp4" />
            </video>
            <video id="video4" className="carousel--item" poster='../assets/static/mandalorian.png'>
                <source src="assets/static/mandalorian.mp4" type="video/mp4" />
            </video>
    </div>
)




export default CarouselItem;