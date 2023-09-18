import React from 'react'
import Header from './../header/index';
import './index.scss';
import Body from '../body';
import Footer from '../footer';

const Layout = () => {
  return (

      <body id="top">
      <Header/>

      <Body/>

       <Footer/>

        <a
          href="#top"
          class="back-top-btn"
          aria-label="back to top"
          data-back-top-btn
        >
          <ion-icon name="caret-up" aria-hidden="true"></ion-icon>
        </a>
      </body>
  
  );
}

export default Layout
