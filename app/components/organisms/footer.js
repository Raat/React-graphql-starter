import React from 'react';
import HighLight from 'react-highlight';

const Footer = () => (
  <footer>
    <p>Copyright @year @name</p>
    <HighLight className='js'>
      {'Edit the <Footer> in ui/components/organisms/footer '}
    </HighLight>
  </footer>
);

export default Footer;
