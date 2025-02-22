import React from 'react'
// import { Navbar, Hero } from '../../components/import'
import { Hero, Events, Newrooms, Works, Success, Popularrooms } from '../../components/import'

const Home = () => {
  return (
    <div>
      <Hero />
      <Events />
      <Newrooms />
      <Works />
      <Success />
      <Popularrooms />
    </div>
  )
}

export default Home