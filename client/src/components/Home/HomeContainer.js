import React from 'react';
import HomeCarousel from './HomeCarousel';
import HomeSomosCaps from './HomeSomosCaps';
import Navbar from '../utils/Navbar/Navbar';

function HomeContainer() {

    return (
        <div className='position-relative'>
            <Navbar />
            <main>
                <HomeCarousel />
                <HomeSomosCaps />
            </main>
        </div>
    )
}

export default HomeContainer;