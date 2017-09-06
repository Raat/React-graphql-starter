import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import App from './app';

export default () =>
  describe('App', () => {
    it('should render a div', () => {
      const wrapper = mount(<App />);
      expect(wrapper.find('div').exists()).to.be.true;
    });
  });
