import React, { Fragment, useState } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Login from './pages/Login/Login';
import Comanda from './pages/Comanda/Comanda';
import Mesas from './pages/Mesas/Mesas';
import Pago from './pages/Pago/Pago';
import Pedido from './pages/Pedido/Pedido'
import Navbar from './components/NavBar/Navbar';



const App = () => {

    //Estado de productos
    const [productos, setProductos] = useState([
        { id: 1, nombre: 'Cafe Americano', precio: 1000 },
        { id: 2, nombre: 'Cafe con Leche', precio: 1200 },
        { id: 3, nombre: 'Sandwich de jamón y queso', precio: 1200 },
        { id: 4, nombre: 'Jugo de Frutas Natural', precio: 1000 }
    ])

    //Estado de pedido
    const [comanda, setComanda] = useState([])

    return (
        <Fragment>
            <Router>
                <Navbar />
                <main>

                    <Switch>
                        <Route path="/" exact>
                            <Login />
                        </Route>
                        <Route path="/pedido" exact>
                            <h2>Desayuno</h2>
                            {productos.map((pedido) => (
                                <Pedido
                                    key={pedido.id}
                                    pedido={pedido}
                                    comanda={comanda}
                                    setComanda={setComanda}
                                    productos={productos}
                                />
                            ))}
                            <Comanda
                                comanda={comanda}
                            />
                        </Route>
                        <Route path="/mesas" exact>
                            <Mesas />
                        </Route>
                        <Route path="/pago" exact>
                            <Pago />
                        </Route>
                        <Redirect to="/" />
                    </Switch>
                </main>
            </Router>
        </Fragment>
    )
}

export default App
