import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';

const SingleStar = styled.div`
    position: absolute;
    background: #fff;
    border-radius: 50%;
    box-shadow: 0px 0px 6px 2px rgba(#fff, .52);
`;

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

const Stars = () => {
    const [stars, setStars] = useState(new Array(starsAmount).
        fill(null).
        map(() => createStar()));

    const regenerateStars = useCallback(() => {
        setStars((_stars) => ([
            ...stars.map((star) => ({
                ...star, 
                opacity: (star.opacity -= star.changingVelocity * 0.1), 
            })).filter((star) => star.opacity > 0),
                ...new Array(starsAmount - _stars.length).
                    fill(null).
                    map(() => createStar())
            ]
        ))
        setTimeout(regenerateStars, 1000);
    }, [stars]);

    useEffect(() => {
        regenerateStars();
    }, [regenerateStars]);

    return (
        <div>
            {stars.map((star, index) => (
                <SingleStar
                    key={index}
                    style={{ 
                        top:    star.top, 
                        left:   star.left, 
                        height: `${star.size}px`,
                        width:  `${star.size}px`,
                        opacity: star.opacity
                    }} />
            ))}
        </div>
    )
}

export default Stars;
