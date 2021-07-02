import React from 'react';
import '../assets/styles/components/Categories.scss'

const Categories = ({ children }) => (
  <div className='categories'>
    <h2 className='text'>This is part of a FrontEnd Developer Portfolio, no other thing is intended. Is no related to Disney Company.</h2>
    <h2 className='text2'>Just click on the videos for Play/Pause the official Movie Trailers.</h2>
    {children}
  </div>

);

export default Categories;
 