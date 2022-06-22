import React from "react";

const Item = ({ info }) => {
    return (
        <div className="conteiner">
            <section className="card">
                <h1>{info.titulo}</h1>
                <img src={info.img}></img>
                <br></br>
                <span>${info.precio}</span>
            </section>
            <section className="card">
                <h1>{info.titulo}</h1>
                <img src={info.img}></img>
                <br></br>
                <span>${info.precio}</span>
            </section>
        </div>
    );
}

export default Item;