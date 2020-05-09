import React from 'react';

import loader from '../assets/img/loader.svg';

function Preloader() {
  return (
    <div id="preloader">
      <div id="loading-center">
        <div id="loading-center-absolute">
          <img src={loader} alt="Loader" className="loader-loading"/>
        </div>
      </div>

    </div>
  );
}

export default Preloader;
