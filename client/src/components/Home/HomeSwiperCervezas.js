import React from 'react';
import {Pagination} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';

function HomeSwiperCervezas() {

    return (
        <section id='HomeSwiperCervezas'>
            <Swiper id='Swiper-Container' modules={[Pagination]} spaceBetween={50} onSlideChange={() => {console.log('cambio el slide')}} slidesPerView={1} pagination={{clickable: true}} onSwiper={(swiper) => console.log(swiper)}>
                <SwiperSlide className='container-slide' id='container-slide1'>
                    <h2>Titulo Cerveza</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam diam mi, fringilla in orci vitae, viverra sagittis dolor. Proin luctus, mi ac gravida vestibulum, est augue tristique ipsum, consequat mattis tellus odio non lacus. Duis.</p>
                    <button type='button' className='btn btn-outline-light fs-5 fw-bold mt-3 boton-swiper'>ENLACE</button>
                </SwiperSlide>
                <SwiperSlide className='container-slide' id='container-slide2'>
                    <h2>Titulo Cerveza</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam diam mi, fringilla in orci vitae, viverra sagittis dolor. Proin luctus, mi ac gravida vestibulum, est augue tristique ipsum, consequat mattis tellus odio non lacus. Duis.</p>
                    <button type='button' className='btn btn-outline-light fs-5 fw-bold mt-3 boton-swiper'>ENLACE</button>
                </SwiperSlide>
                <SwiperSlide className='container-slide' id='container-slide3'>
                    <h2>Titulo Cerveza</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam diam mi, fringilla in orci vitae, viverra sagittis dolor. Proin luctus, mi ac gravida vestibulum, est augue tristique ipsum, consequat mattis tellus odio non lacus. Duis.</p>
                    <button type='button' className='btn btn-outline-light fs-5 fw-bold mt-3 boton-swiper'>ENLACE</button>
                </SwiperSlide>
                <SwiperSlide className='container-slide' id='container-slide4'>
                    <h2>Titulo Cerveza</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam diam mi, fringilla in orci vitae, viverra sagittis dolor. Proin luctus, mi ac gravida vestibulum, est augue tristique ipsum, consequat mattis tellus odio non lacus. Duis.</p>
                    <button type='button' className='btn btn-outline-light fs-5 fw-bold mt-3 boton-swiper'>ENLACE</button>
                </SwiperSlide>
            </Swiper>
        </section>
    )
}

export default HomeSwiperCervezas;