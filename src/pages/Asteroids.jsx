import React from 'react';
import asteroid from './asteroid.png';

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

class Asteroids extends React.Component {
    state = {
        asteroids: [{
            left: 10,
            top: 20,
            offset: 50
        }]
    }
    componentDidMount() {
        let asteroids = [];
        for(let i =0; i < 6; i++) {
            asteroids.push({
                left: getRandomArbitrary(0, window.innerWidth),
                top: getRandomArbitrary(0, window.innerHeight),
                offset: getRandomArbitrary(-100, 100)
            })
        }
        this.setState({ asteroids })
    }
    render() {
        return this.state.asteroids.map((asteroidObj, index) => 
            <>
                <img style={{ 
                    left: asteroidObj.left + 'px',
                    position: 'absolute',
                    top: asteroidObj.top,
                    transfrom: `translateY(${asteroidObj.offset}%)`
                }} src={asteroid} key={index} />
            </>
        )
    }
}

export default Asteroids