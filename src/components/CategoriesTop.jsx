import React from 'react';
import '../assets/styles/components/CategoriesTop.scss'

const Categories = ({ children }) => (
  <div className='categoriesTop'>
    <h2 className='text'>This is part of a FrontEnd Developer Portfolio, no other thing is intended. Is no related to Disney Company.</h2>
    {children}
  </div>

);

export default Categories;
 