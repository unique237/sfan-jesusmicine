import React from 'react'
import AboutJesusmicine from '../components/AboutJesusmicine'
import Testimonies from '../components/Testimonies'
import LatestNews from '../components/LatestNews'
//import LatestJesusmicine from '../components/LatestJesusmicine'


const Jesusmicine = () => {
  return (
    <div>
      <AboutJesusmicine />
      {/*<LatestJesusmicine />*/}
      <Testimonies />
      <LatestNews />
    </div>
  )
}

export default Jesusmicine