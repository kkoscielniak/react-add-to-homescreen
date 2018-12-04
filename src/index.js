import './style.scss';
import React from 'react';

import { isIos } from './utils';

class AddToHomescreen extends React.Component {
  render() {
    const isRunningOnIos = isIos();

    return (
      <div>
        {isRunningOnIos ? (
          <div className="add-to-home-banner">
            <div className="add-to-home-text">
              Add to home screen
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}

export default AddToHomescreen;
