import React, { useState, useEffect } from 'react';
import SplashScreen from '../splash/SplashScreen'
import Footer from '../footer/Footer'
import MenuSection from '../navLinks/menuSection/MenuSection'
import NavLinks from '../navLinks/NavLinks'
import NavSection from '../navSection/NavSection'
import MainSection from './mainSection/MainSection';
import FoodItems from './foodItemsSection/FoodItems';

const Dashboard = () => {
    const [loading, setLoading] = useState(true);
    
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    },2000);
  }, []);
    return (
        <div>
             {loading ? (
          <>
          <SplashScreen />
         <NavSection />
       <NavLinks />
       <MainSection/>
       <FoodItems/>
       <Footer />
      
       </>
      ) : (
        <>
          <NavSection />
        <NavLinks />
        <MainSection/>
       <FoodItems/>
        <Footer />
        </>
      
      )}
          
        </div>
    )
}

export default Dashboard