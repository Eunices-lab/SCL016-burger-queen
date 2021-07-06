import React, { Fragment } from 'react'
import './Mesas.css'

const Mesas = () => {
    return (
        <Fragment className="container">
        <div style={{width:"90%", justifyContent:"center", display: "flex"}}>
            <div class="btn-group col-8" role="group" aria-label="First group">
                <button type="button" class="btn btn-success mx-1 ">1</button>
                <button type="button" class="btn btn-success mx-1 ">2</button>
                <button type="button" class="btn btn-success mx-1 ">3</button>
                <button type="button" class="btn btn-success mx-1 ">4</button>
            </div>
        </div>
        </Fragment>
    )
}

export default Mesas
