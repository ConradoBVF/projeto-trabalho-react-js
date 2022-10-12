/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Typography } from '@mui/material'
import './Body.css'
import Produtos from './produtos/Produtos2'


function Example(props) {
    var items = [
        {
            name: "./img/carousel-1.JPG",
        },
        {
            name: "./img/carousel-2.png",
        },
        {
            name: "./img/carousel-3.png",
        }
    ]



    return (
        <>
            <Carousel>
                {
                    items.map((item, i) => <Item key={i} item={item} />)
                }
            </Carousel>
            <Typography variant="h4" component="h2" className='titulo-produtos'>Conheça nossa linha de produtos</Typography>
            <Produtos></Produtos>
        </>
    )
}

function Item(props) {
    return (
        <div className="carousel-background">
            <Paper>
                <div className="img-carousel">
                    <img src={props.item.name} className='carrossel' />
                </div>
            </Paper>
        </div>
    )
}

export default Example