import React from 'react'
import './Comanda.css'
import Pedido from '../Pedido/Pedido'


const Comanda = ({comanda, setComanda}) => {

    
    return (
        <div className="comanda">
            <h3>Comanda </h3>
            


        {comanda.length === 0 ? (
        <p>0</p>
        ) : (
            comanda.map((pedido => 
            <Pedido 
            key={pedido.id} 
            pedido={pedido} 
            comanda={comanda} 
            setComanda={setComanda} 
            />
            ))
            ) }

        </div>
    )
}

export default Comanda
