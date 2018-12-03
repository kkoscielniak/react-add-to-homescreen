/* global describe it expect */
import React from 'react';
import { shallow } from 'enzyme';

import AddToHomescreen from '../index.js';

describe('AddToHomescreen Component', () => {
  it('should render', done => {
    const wrapper = shallow(<AddToHomescreen />);
    expect(wrapper).toMatchSnapshot();

    done();
  });
});
