import React from 'react';
import Footer from './Bars/Footer';
import Nav from './Bars/Navbar'
import FirstPage from './First/First';

export default function Layout({children}) {
      return (
        <>
          <Nav/>
          <main>{children}</main>
          <Footer/>
        </>
      )

  }