import React from 'react';
import { Parallax } from 'react-parallax';
import mountain from '../images/mountain.jpg'

const HomeImage = () => (
        <Parallax bgImage={mountain} className='image'
            strength={800}>
                <div className='content'>
                <div className="home-container">
                </div>
                    <span className='img-txt'></span>
                </div>
        </Parallax>
    )

export default HomeImage;