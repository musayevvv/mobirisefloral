import React from 'react'
import Banner from './banner/Banner'
import Services from './services/Services'
import Flowers from './flowers/Flowers'
import Event from './event/Event'
import Ourteam from './ourteam/Ourteam'

const Home = () => {
  return (
    <div>
      <Banner />
      <Services />
      <Flowers />
      <Event />
      <Ourteam/>
    </div>
  )
}

export default Home