import React from 'react';

function HomeCarousel() {

    return (
        <div id="carouselPrimero" class="carousel slide carousel-fade" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                <img src="/img/1920x1080-placeholder.jpg" class="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item">
                <img src="/img/1920x1080-placeholder-b.jpg" class="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item">
                <img src="/img/1920x1080-placeholder.jpg" class="d-block w-100" alt="..."/>
                </div>
            </div>
            <button class="carousel-control-prev boton-carousel" type="button" data-bs-target="#carouselPrimero" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next boton-carousel" type="button" data-bs-target="#carouselPrimero" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default HomeCarousel;