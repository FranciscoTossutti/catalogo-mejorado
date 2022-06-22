import React, {useEffect, useState} from "react";
import ItemList from "./ItemList";
import jbl from '../imagenes/jbl.png';
import jbl4 from '../imagenes/jbl4.png';
import jbP from '../imagenes/jblP.png';

const productos = [
{
    id : 1,
    img : jbl,
    titulo : "Jbl Charge",
    precio: 22.99
},
{
    id : 2,
    img : jbl4,
    titulo : "Jbl Charge2",
    precio: 18.99
},
{
    id : 3,
    img : jbP,
    titulo : "Jbl Charge3",
    precio: 35.99
},
];

const ItemListConteiner = ({ texto }) => {

    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(productos);
            }, 3000)
        });
        getData.then(res => setData(res) );
    }, [])

    return (
        <ItemList data={data} />
    )
}

export default ItemListConteiner;
