import React, { useContext } from 'react';
import { AppContext } from '../Context/context';
import Hero from '../Component/HomeComponent/Carousels';

const HomePage = () => {
    const { isDark, setProfile, profile, } = useContext(AppContext);

    function doSth(){
      if(profile === true){
        setProfile(false)
  
      }
    }

  return (
    <div onMouseEnter={doSth} className={isDark ? "DarkMode" : null} style={{backgroundColor:"#e5d1c4"}}>
        <Hero/>
    </div>
  )
}

export default HomePage