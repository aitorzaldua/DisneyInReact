import React from 'react';
import '../assets/styles/components/SliderCategories.scss'

const SliderCategories = ({ children }) => (
  <div className='sliderCategories'>
    <h2 className='text'>This is part of a FrontEnd Developer Portfolio, no other thing is intended. Is no related to Disney Company.</h2>
    {children}
  </div>

);

export default SliderCategories;
