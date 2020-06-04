import React from 'react';
import Menu from './components/menu';
import Footer from './components/footer';

function layout(props) {
  return (
    <>
      <Menu />
      {props.children}
      <Footer />
    </>
  );
}

export default layout;
