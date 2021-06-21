import React from 'react';
import '../assets/components/Header.scss';
import logo from '../assets/static/logo.png';
import home3 from '../assets/static/home3.png';
import search2 from '../assets/static/search2.png';
import plus from '../assets/static/plus.png';
import star from '../assets/static/star.png';
import film from '../assets/static/film.png';
import tv2 from '../assets/static/tv2.png';
import mickey from '../assets/static/mickey.png';

const Header = () => (
    <header className='header'>
            <img className='imageDisney' src={logo} alt="" />
            <img className = 'icon' src={home3} alt="" />
            <div>HOME</div>
            <img className = 'icon' src={search2} alt="" />
            <div>SEARCH</div>
            <img className = 'icon' src={plus} alt="" />
            <div>WATCHLITS</div>
            <img className = 'icon' src={star} alt="" />
            <div>ORIGINALS</div>
            <img className = 'icon' src={film} alt="" />
            <div>MOVIES</div>
            <img className = 'icon' src={tv2} alt="" />
            <div>SERIES</div>
            <img className = 'imageMickey' src={mickey} alt="" />
    </header>

);

export default Header;

