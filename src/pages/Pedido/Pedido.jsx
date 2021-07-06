import React from 'react'
import './Pedido.css'

const Pedido = ({ pedido, comanda, setComanda, productos }) => {

    //Guarda las propiedades del estado
    const { nombre, precio, id } = pedido

    //Funcion para agregar productos
    const addPedido = id => {
        const pedido = productos.filter((pedido) => pedido.id === id)
        setComanda([...comanda, ...pedido])
    };
    //Funcion eliminar
    const delPedido = (id) => {
        const productos = comanda.filter((pedido) => pedido.id !== id)
        setComanda(productos)
    };

    return (

        <div>
            <div className="menu">
                <ul>
                    <li>{nombre}</li>
                    <li>${precio}</li>

                    {productos ? (
                        (
                            <button type="button" onClick={() => addPedido(id)}>
                                Agregar producto a la Comanda
                            </button>
                        )
                    )
                        : (
                            <div>
                                <button type="button" onClick={() => addPedido(id)}>
                                    Confirmar pedido
                                </button>

                                <button type="button" onClick={() => delPedido(id)}>
                                    Eliminar pedido
                                </button>

                            </div>
                        )}


                </ul>
            </div>

        </div>


    )
}


export default Pedido
