import React from 'react';
import spacechainsStyles from './spacechains-landing.module.scss';

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

const starsAmount = 60;

const createStar = () => ({
    left: getRandomArbitrary(0, window.innerWidth),
    top:  getRandomArbitrary(0, window.innerHeight),
    size: getRandomArbitrary(4, 10),
    changingVelocity: Math.random(),
    opacity: 1,
})

class Stars extends React.Component {
    state = {
        stars: new Array(starsAmount).fill(null).map(() => createStar())
    }
    componentDidMount() {
        this.regenerateStars();
    }
    regenerateStars = () => {
        this.setState(({ stars }) => ({
            stars: [ ... stars.map(star => ({
                        ...star, 
                        opacity: star.opacity -= star.changingVelocity * 0.1, 
                    })).filter(star => star.opacity > 0),
                    ...new Array(starsAmount - stars.length).fill(null).map(() => createStar())
                   ]
        }))
        setTimeout(this.regenerateStars, 1000);
    }
    render() {
        return (
            <div>
                {this.state.stars.map((star, index) => (
                <div
                    key={index}
                    style={{ 
                        top:    star.top, 
                        left:   star.left, 
                        height: star.size + 'px',
                        width:  star.size + 'px',
                        opacity: star.opacity
                    }}
                    className={spacechainsStyles['singleStar']} />
                ))}
            </div>
        )
    }
}


export default Stars;