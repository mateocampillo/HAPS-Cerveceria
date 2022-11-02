import React from 'react';

function MainContainerTarjetaDescripcion () {

    return (
        <div class="container col-xxl-8 px-4 py-5 mx-auto">
        <div class="row flex-lg-row-reverse align-items-center g-5">
          <div class="col-10 col-sm-8 col-md-8 col-lg-8 mx-auto">
            <img src="/img/barriles-placeholder.jpg" class="d-block mx-lg-auto img-fluid rounded" alt="Bootstrap Themes" width="700" height="500" loading="lazy"></img>
          </div>
          <div class="col-lg-4">
            <h1 class="display-5 fw-bold lh-1 mb-3">Ejemplo de cuadro de texto con imagen.</h1>
            <p class="lead">Descripcion del cuadro de texto que puede ir acompañanado de una imagen y que tiene un boton que te lleva a donde indica el contexto.</p>
            <div class="d-grid gap-2 d-md-flex justify-content-md-center">
              <button type="button" class="btn btn-primary btn-lg px-4 me-md-2">Enlace</button>
            </div>
          </div>
        </div>
      </div>
    )

}

export default MainContainerTarjetaDescripcion;