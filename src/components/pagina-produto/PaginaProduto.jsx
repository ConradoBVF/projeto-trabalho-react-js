import React from 'react'
import { products, categories } from '../body/produtos/Produtos';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import { useParams } from 'react-router-dom'
import { Typography, Button, Grid } from '@mui/material';

const PaginaProduto = () => {
    const { id } = useParams()
    return (
        <>
            <Header />
            <Grid container spacing={0}>
                <Grid xs={12} sm={12} md={4}>
                    <Typography variant="h3" component="h1">{products[id].name}</Typography>
                    <img src={products[id].images[0]} alt={products[id].name} />
                    <Typography>{products[id].description}</Typography>
                    <Typography>{products[id].price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</Typography>
                </Grid>
            </Grid>
            <Grid container spacing={0}>
                <Grid xs={12} sm={12} md={4}>
                    <Typography variant="h6" component="h3">{products[id].categories.map(categoryId => {
                        return <span className='category-label'>{categories[categoryId].name}</span>
                    })}</Typography>
                </Grid>
            </Grid>
            <Button variant="contained">Adicionar ao Carrinho</Button>
            <Footer />
        </>
    )
}

export default PaginaProduto