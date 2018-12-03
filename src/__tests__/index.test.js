/* global describe it */
import React from 'react';
import assert from 'assert';
import { shallow } from 'enzyme';

import AddToHomescreen from '../index';

describe('AddToHomescreen Component', () => {
  it('should render on iOS', done => {
    navigator.__defineGetter__('userAgent', () => 'iPhone');

    const wrapper = shallow(<AddToHomescreen />);
    assert.strictEqual(
      wrapper.exists('.add-to-home-banner'),
      true
    );

    done();
  });

  it('should not render on another platform', done => {
    navigator.__defineGetter__('userAgent', () => 'android');

    const wrapper = shallow(<AddToHomescreen />);
    assert.strictEqual(
      wrapper.exists('.add-to-home-banner'),
      false
    );

    done();
  });
});
