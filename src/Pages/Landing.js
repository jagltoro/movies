import React, {useEffect} from 'react';

import NowPlaying from '../Pages/NowPlaying';

function Landing() {

  useEffect(() => {
    document.body.style.backgroundImage = '';
  }, []);

  return (
      <NowPlaying/>
  );
}

export default Landing;
