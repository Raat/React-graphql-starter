import React from 'react';
import HighLight from 'react-highlight';
import Menu from './menu';

const Header = () => (
  <header>
    <nav>
      <Menu />
    </nav>
    <HighLight className='js'>
      {'Edit the <Header> in ui/components/organisms/header '}
    </HighLight>
  </header>
);

export default Header;
