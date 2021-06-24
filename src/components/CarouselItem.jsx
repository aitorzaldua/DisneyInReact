import React from 'react';

const CarouselItem = () => {

    <div className='carousel__item'>
            <video id='video' className ="carousel--item" poster="assets\frozen.png">
                    <source src="assets\frozen.mp4" type="video/mp4" />
            </video>
            <video id="video2" className="carousel--item" poster="assets\avengers.png">
                <source src="assets\avengers.mp4" type="video/mp4" />
            </video>
                <video id="video3" className="carousel--item" poster="assets\monster4.png">
                    <source src="assets\monster.mp4" type="video/mp4" />
            </video>
            <video id="video4" className="carousel--item" poster="assets\mandalorian.png">
                <source src="assets\mandalorian.mp4" type="video/mp4" />
            </video>
    </div>

}


export default CarouselItem;