import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Prefooter from './PreFooter';
import Postfooter from './PostFooter';

const Layout = ({ children }) => (

  <div className='App'>
    <Header />
    {children}
    <Prefooter />
    <Footer />
    <Postfooter />
  </div>

);

export default Layout;
