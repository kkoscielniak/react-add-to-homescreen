import './style.scss';
import React from 'react';
import PropTypes from 'prop-types';
import { MdClose } from 'react-icons/md';

import { isIos, isInStandaloneMode } from './utils';

class AddToHomescreen extends React.Component {
  propTypes = {
    onAddToHomescreenClick: PropTypes.func,
  };

  state = {
    bannerVisible: true,
  };

  onAddToHomescreenClick = () => {
    this.props.onAddToHomescreenClick();
  };

  handleCloseBannerBtnClick = () => this.setState({ bannerVisible: false });

  render() {
    const { bannerVisible } = this.state;
    const shouldRender = bannerVisible && isIos() && !isInStandaloneMode();

    return (
      <div>
        {shouldRender ? (
          <div className="add-to-home-banner">
            <div className="add-to-home-text">
              <a onClick={this.onAddToHomescreenClick}>Add to home screen</a>
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
