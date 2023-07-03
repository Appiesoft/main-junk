import React from 'react';
import './SplashScreen.css';
import popUp from '../../assets/pageOne/popUp.webp'
const SplashScreen = () => {
  return (
    <div className="splash-screen">
  <div className='row'> 
  <div className='col-md-10 mx-auto'>
  <img src={popUp} />
  </div>
  </div>
    </div>
  );
};

export default SplashScreen;