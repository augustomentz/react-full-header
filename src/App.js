import React from 'react';
import FullHeader from './Components/FullHeader';

import AllOver10Seconds from './assets/videos/all_over_10_seconds.mp4'

import './App.css';

const App = () => {
  return (
    <FullHeader title='TDD' subtitle='What tested may never break' video={AllOver10Seconds} />
  );
}

export default App;
