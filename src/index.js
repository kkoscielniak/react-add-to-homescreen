import './style.scss';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { MdClose } from 'react-icons/md';

import { isIos, isInStandaloneMode } from './utils';

class AddToHomescreen extends Component {
  propTypes = {
    onAddToHomescreenClick: PropTypes.func,
    title: PropTypes.string,
    icon: PropTypes.string,
  };

  state = {
    bannerVisible: true,
  };

  onAddToHomescreenClick = () => {
    this.props.onAddToHomescreenClick();
  };

  handleCloseBannerBtnClick = () => this.setState({ bannerVisible: false });

  render() {
    const { title, icon } = this.props;
    const { bannerVisible } = this.state;
    const shouldRender = bannerVisible && isIos() && !isInStandaloneMode();

    return (
      <div>
        {shouldRender ? (
          <div className="add-to-home-banner">
            <div className="add-to-home-content">
              {icon ? <img className="add-to-home-icon" src={icon} /> : null}
              <div className="add-to-home-text">
                <a onClick={this.onAddToHomescreenClick}>
                  {title || 'Add to home screen'}
                </a>
              </div>
            </div>
            <MdClose
              className="add-to-home-close-btn"
              onClick={this.handleCloseBannerBtnClick}
            />
          </div>
        ) : null}
      </div>
    );
  }
}

export default AddToHomescreen;
