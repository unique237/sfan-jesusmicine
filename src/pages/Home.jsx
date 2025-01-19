import React from 'react'
import Hero from '../components/Hero'
import LatestNews from '../components/LatestNews'
import LatestPredication from '../components/LatestPredication'
import LatestMedia from '../components/LatestMedia'
import Carousel from '../components/Carousel'


const Home = () => {
  return (
    <div>
      <Hero />
      <br />
      <Carousel />
      <LatestNews />
      <h2 className="text-4xl font-bold text-center mb-6 text-yellow-400">PREDICATIONS ET PRIERES</h2>
      <LatestPredication />
      <h2 className="text-4xl font-bold text-center mb-3 text-blue-500 pt-7">MEDIATHEQUE</h2>
      <LatestMedia />
    </div>
  )
}

export default Home