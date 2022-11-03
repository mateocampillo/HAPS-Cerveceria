import React, {useState, useEffect} from 'react';
import apiSettings from '../../apiSettings.json';

function DashboardCervezasList () {

    const [cervezas, setCervezas] = useState([]);

    useEffect(() =>{
        fetch(`${apiSettings.base}api/main/list`)
            .then(res => res.json())
            .then(data => setCervezas(data.data))
    }, [])

    return (
        <div>
            <h2 className='mb-2'>Listado de Cervezas</h2>
            <table className="table">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Descripcion</th>
                    <th scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {cervezas.map((cerveza) => {
                        return (
                            <tr key={cerveza.id}>
                                <th scope="row"><strong>{cerveza.id}</strong></th>
                                <td><strong>{cerveza.nombre}</strong></td>
                                <td className='w-70'>{cerveza.descripcion}</td>
                                <td>
                                <button type="button" className="btn btn-primary mx-1 my-1">Detalle</button>
                                <button type="button" className="btn btn-success mx-1 my-1">Editar</button>
                                <button type="button" className="btn btn-danger mx-1 my-1">Borrar</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )

}

export default DashboardCervezasList;