import React from 'react'
import Studio from './Studio'
import Soundboard from './Soundboard'

const Container = () => {
  return (
    <main className="main">
      <div className="main__container">
        <Studio />
        <Soundboard />
      </div>
    </main>
  )
}

export default Container
