import React, { useState } from "react"
import asteroid from "./asteroid.png"

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min
}

const Asteroids = () => {
  const [asteroids, setAsteroids] = useState([
    {
      left: 10,
      top: 20,
      offset: 50,
    },
  ])
  useState(() => {
    if (typeof navigator !== "undefined") {
      const _asteroids = []
      for (let i = 0; i < 6; i++) {
        _asteroids.push({
          left: getRandomArbitrary(0, window.innerWidth),
          top: getRandomArbitrary(0, window.innerHeight),
          offset: getRandomArbitrary(-100, 100),
        })
      }
      setAsteroids(_asteroids)
    }
  }, [])

  console.log(asteroids)

  return asteroids.map((asteroidObj, index) => (
    <img
      style={{
        left: `${asteroidObj.left}px`,
        position: "absolute",
        top: `${asteroidObj.top}px`,
        transfrom: `translateY(${asteroidObj.offset}%)`,
      }}
      src={asteroid}
      key={index}
    />
  ))
}

export default Asteroids
