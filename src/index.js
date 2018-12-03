import React from 'react';

import { isIos } from './utils';

class AddToHomescreen extends React.Component {
  render () {
    const isRunningOnIos = isIos();

    return (
      <div>
        {isRunningOnIos ? (
          <div className='add-to-home-banner'>
            OMG, this is so iOS!
          </div>
        ) : null}
      </div>
    );
  }
}
export default AddToHomescreen;
