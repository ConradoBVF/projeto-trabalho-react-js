import { React, useState } from 'react'
import { products, categories } from '../body/produtos/Produtos';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import { useParams } from 'react-router-dom'
import { Typography, Button, Grid, IconButton, TextField } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import './PaginaProduto.css'

const PaginaProduto = () => {
    const { id } = useParams()
    const [quantity, setQuantity] = useState(1)
    const changeQuantityButton = (value) => {
        if (quantity >= 0) {
            let result = quantity + value;
            if (result === -1) {
                result = 0;
            }
            setQuantity(result);
        }
    }


    return (
        <>
            <Header />
            <Grid container spacing={0} className='caixa-produto'>
                <Grid xs={12} sm={12} md={6} textAlign='center'>
                    <Typography variant="h3" component="h1" align='center'>{products[id].name}</Typography>
                    <img src={products[id].images[0]} alt={products[id].name} className='img-produto' />
                </Grid>
                <Grid xs={12} sm={12} md={6} className='texto-produto'>
                    <Typography variant="h4" component="h2">Preço: {products[id].price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</Typography>
                    <Typography>{products[id].description}</Typography>
                    <div className='botao'>
                        <Typography variant="h6" component="h3">{products[id].categories.map(categoryId => {
                            return <span className='category-label'>{categories[categoryId].name}</span>
                        })}</Typography>

                        <Button variant="contained">Adicionar ao Carrinho</Button>
                    </div>
                    <div id="productItem__quantity">
                        <IconButton onClick={() => changeQuantityButton(-1)}>
                            <RemoveIcon color='primary' />
                        </IconButton>
                        <TextField size="small" type="number" value={quantity} onChange={(event) => { setQuantity(event.target.value) }} />
                        <IconButton onClick={() => changeQuantityButton(1)}>
                            <AddIcon color='primary' />
                        </IconButton>
                    </div>
                </Grid>
            </Grid>
            <Footer />
        </>
    )
}

export default PaginaProduto