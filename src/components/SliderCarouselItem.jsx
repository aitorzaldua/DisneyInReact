import React from 'react';
import '../assets/styles/components/SliderCarouselItem.scss'
import frozen from '../assets/static/disney-frozen-2.jpg';
import avengers from '../assets/static/avengers.png';
import monsters from '../assets/static/monster4.png';
import mandalorian from '../assets/static/mandalorian.png';
import dolphins from '../assets/static/dolphins.png';
import trops from '../assets/static/trops.jpg';


const SliderCarouselItem = () => (
    <div className='sliderCarouselItem'>

        <input className="sc__activator" type="radio" name="sc" id="F" defaultChecked />
        <input className="sc__activator" type="radio" name="sc" id="G"/>
        <input className="sc__activator" type="radio" name="sc" id="H"/>
        <input className="sc__activator" type="radio" name="sc" id="I"/>
        <input className="sc__activator" type="radio" name="sc" id="J"/>
        <div className="sc__controls">
            <label className="sc__control sc__control--backward" htmlFor="J"></label>
            <label className="sc__control sc__control--forward" htmlFor="G"></label>
        </div>
        <div className="sc__controls">
            <label className="sc__control sc__control--backward" htmlFor="F"></label>
            <label className="sc__control sc__control--forward" htmlFor="H"></label>
        </div>
        <div className="sc__controls">
            <label className="sc__control sc__control--backward" htmlFor="G"></label>
            <label className="sc__control sc__control--forward" htmlFor="I"></label>
        </div>
        <div className="sc__controls">
            <label className="sc__control sc__control--backward" htmlFor="H"></label>
            <label className="sc__control sc__control--forward" htmlFor="J"></label>
        </div>
        <div className="sc__controls">
            <label className="sc__control sc__control--backward" htmlFor="I"></label>
            <label className="sc__control sc__control--forward" htmlFor="F"></label>
        </div>
        <div className="sc__track">
            <li className="sc__slide">
                <h1> 1 - F</h1>
                <img className='sc--item' src={trops}/>
            </li>
            <li className="sc__slide">
                <img className='sc--item' src={monsters}/>
                <h1>2 - G</h1>
            </li>
            <li className="sc__slide">
                <img className='sc--item' src={avengers}/>
                <h1>3 - H</h1>
            </li>
            <li className="sc__slide">
                <img className='sc--item' src={mandalorian}/>
                <h1>4 - I</h1>
            </li>
            <li className="sc__slide">
                <img className='sc--item' src={dolphins}/>
                <h1> 5 - J</h1>
            </li>
        </div>
        <div className="sc__indicators">
            <label className="sc__indicator" htmlFor="F"></label>
            <label className="sc__indicator" htmlFor="G"></label>
            <label className="sc__indicator" htmlFor="H"></label>
            <label className="sc__indicator" htmlFor="I"></label>
            <label className="sc__indicator" htmlFor="J"></label>
        </div>

    </div>
)




export default SliderCarouselItem;