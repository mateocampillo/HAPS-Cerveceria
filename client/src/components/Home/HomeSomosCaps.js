import React from 'react';

function HomeSomosHaps() {

    return (
        <section id='homeSomosHaps' className='position-relative'>
            <div className='container' id='container-somos-haps'>
                <div className='d-flex h-100 align-items-center justify-content-around' id='flex-somos-haps'>
                    <div id='somos-haps-div-foto'>
                        <img src='/img/600x400-beer.jpg' alt='fondo'/>
                    </div>
                    <div className='text-white px-2 d-flex flex-column align-items-center' id='container-somos-haps_descripcion'>
                        <h2 className='fs-1 mb-3'>SOMOS HAPS</h2>
                        <p className='fs-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tempus nulla quis egestas aliquam. Mauris feugiat posuere consectetur. Aliquam in orci et ante aliquam finibus. Phasellus cursus, diam lobortis egestas tempus, metus.</p>
                        <button type='button' className='btn btn-outline-light fs-4 fw-bold mt-3'>SABER MÁS</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomeSomosHaps