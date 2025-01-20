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
      <LatestPredication />
      <LatestMedia />
    </div>
  )
}

export default Home