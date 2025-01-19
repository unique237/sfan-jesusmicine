import React from 'react'
import AboutJesusmicine from '../components/AboutJesusmicine'
import Testimonies from '../components/Testimonies'
import LatestNews from '../components/LatestNews'
import LatestJesusmicine from '../components/LatestJesusmicine'


const Jesusmicine = () => {
  return (
    <div>
      <AboutJesusmicine />
      <h2 className="text-4xl font-bold text-center mb-3 text-red-600 pt-7">LE DERNIER FESTIVAL JESUSMICINE EN IMAGE</h2>
      <LatestJesusmicine />
      <Testimonies />
      <LatestNews />
    </div>
  )
}

export default Jesusmicine