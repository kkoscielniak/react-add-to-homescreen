/* global describe it expect jest */
import React from 'react';
import assert from 'assert';
import { shallow } from 'enzyme';

import AddToHomescreen from '../index';

describe('AddToHomescreen Component', () => {
  it('should render on iOS', done => {
    navigator.__defineGetter__('userAgent', () => 'iPhone');

    const wrapper = shallow(<AddToHomescreen />);
    assert.strictEqual(wrapper.exists('.add-to-home-banner'), true);

    done();
  });

  it('should not render on another platform', done => {
    navigator.__defineGetter__('userAgent', () => 'android');

    const wrapper = shallow(<AddToHomescreen />);
    assert.strictEqual(wrapper.exists('.add-to-home-banner'), false);

    done();
  });

  it('should call a function on Add To Homescreen button click', done => {
    navigator.__defineGetter__('userAgent', () => 'iPhone');

    const mockFunction = jest.fn();

    const wrapper = shallow(
      <AddToHomescreen onAddToHomescreenClick={mockFunction} />,
    );

    wrapper.find('.add-to-home-text a').simulate('click');
    expect(mockFunction).toHaveBeenCalledTimes(1);

    done();
  });

  it('should hide the Component on clise button click', done => {
    const wrapper = shallow(<AddToHomescreen />);
    assert.strictEqual(wrapper.exists('.add-to-home-banner'), true);

    wrapper.find('.add-to-home-close-btn').simulate('click');

    assert.strictEqual(wrapper.exists('.add-to-home-banner'), false);

    done();
  });
});
