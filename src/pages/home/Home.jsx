import React from 'react'
import { Hero, Events, Newrooms, Works, Success, Popularrooms, Businesscard, Trustus, Rent, Footer } from '../../components/import'
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
      <Footer />
    </div>
  )
}

export default Home