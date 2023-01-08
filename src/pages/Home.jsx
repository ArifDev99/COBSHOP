import { Button, Card, CardActions, CardContent,  CardMedia, Container, Grid,  Rating, Typography, useTheme } from '@mui/material'
import ShoppingCart from '@mui/icons-material/ShoppingCart';
import React from 'react'
// import { useState,useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../features/cart-slice';
import { getAllProducts } from '../features/product-slice';

export default function Home() {
    const theme=useTheme();
    const state = useSelector((state)=>state.products);
    const {value:products,loading}=state??{};
    const dispatch=useDispatch();

    if(!products?.length){
      dispatch(getAllProducts());
    }
    // useEffect(() => {
    //     getAllProducts();
    // }, [])

    function addProductToCart(product){
      //dispatch an action
      dispatch(addToCart({product,quantity:1}))
    }
  return (
    // <pre>{JSON.stringify(products,null,2)}</pre> view the Json of Product in web
    <Container maxWidth="lg" sx={{py:8}} >
      <Grid container spacing={4}>
        {products?.map(({title,id,price,description,rating,image})=>
          (<Grid item key={id} xs={12} sm={6} md={3}>
            <Card sx={{height:"100%",display:"flex",flexDirection:"column"}}>
              <CardMedia component="img" sx={{alignSelf:"center",width:theme.spacing(30),height:theme.spacing(30),objectFit:"contain", pt:theme.spacing()}} image={image} alt={title}/>
              <CardContent>
                <Typography variant="h5" component="h2" gutterBottom sx={{overflow:"hidden",textOverflow:"ellipsis",display:"-webkit-box",WebkitLineClamp:"1",WebkitBoxOrient:"vertical"}}>{title}</Typography>
                <Typography color="text-secondary" sx={{overflow:"hidden",textOverflow:"ellipsis",display:"-webkit-box",WebkitLineClamp:"2",WebkitBoxOrient:"vertical"}}>{description}</Typography>
                <Typography fontSize="large" paragraph>{price}</Typography>
                <Rating readOnly precision={0.5} value={rating.rate}/>
              </CardContent>
              <CardActions sx={{px:"10px",gap:"14px"}}>
                <Button variant="contained" size="small" onClick={()=>addProductToCart({title,id,price,description,rating,image})} >
                  <ShoppingCart/>Add To Cart
                </Button>
                <Button variant="contained" size="small">
                  Buy Now
                </Button>
              </CardActions>
            </Card>
          </Grid>)
          )}
      </Grid>
    </Container>
  )
}
