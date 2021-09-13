import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Header.scss';
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
            <div className = 'linkGroup'>
              <Link to='/'>
                <img className = 'icon' src={home3} alt="" />
              </Link>
              <Link to='/'>
                <div className = 'headerText'>HOME</div>
              </Link>
              <img className = 'icon' src={search2} alt="" />
              <div className= 'headerText'>SEARCH</div>
              <img className = 'icon' src={plus} alt="" />
              <div className = 'headerText'>WATCHLITS</div>
              <img className = 'icon' src={star} alt="" />
              <div className = 'headerText'>ORIGINALS</div>
              <img className = 'icon' src={film} alt="" />
              <div className = 'headerText'>MOVIES</div>
              <img className = 'icon' src={tv2} alt="" />
              <div className = 'headerText'>SERIES</div>
            </div>
            <div className = 'linkGroup'>
              <img className = 'imageMickey' src={mickey} alt="" />
              <li>
                <Link to='/login'>
                <div className = 'headerText'>login</div>
                </Link>
                <div className = 'headerText'>logout</div>
              </li>
            </div>
    </header>

);

export default Header;
