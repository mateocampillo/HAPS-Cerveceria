import React from 'react';
import HomeCarousel from './HomeCarousel';
import HomeBannerCervezaAnimada from './HomeBannerCervezaAnimada';
import Navbar from '../utils/Navbar/Navbar';

function HomeContainer() {

    return (
        <div className='position-relative'>
            <Navbar />
            <main>
                <HomeCarousel />
                <HomeBannerCervezaAnimada />
            </main>
        </div>
    )
}

export default HomeContainer;