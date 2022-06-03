import React from 'react';
import { Parallax } from 'react-parallax';

const HomeImage = () => (
        <Parallax  className='image'
            strength={800}>
                <div className='content'>
                <div className="home-container">
                </div>
                    <span className='img-txt'></span>
                </div>
        </Parallax>
    )

export default HomeImage;