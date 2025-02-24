import React from 'react'
// import { Navbar, Hero } from '../../components/import'
import { Hero, Events, Newrooms, Works, Success, Popularrooms, Businesscard, Trustus, Rent } from '../../components/import'
import { Talkaboutus } from '../../components/events/Events'

const Home = () => {
  return (
    <div>
      <Hero />
      <Events />
      <Newrooms />
      <Works />
      <Success />
      <Popularrooms />
      <Businesscard />
      <Trustus />
      <Rent />
      <Talkaboutus />
    </div>
  )
}

export default Home