import { Grid,Typography,useTheme } from "@mui/material";
import Paper from "@mui/material/Paper";
import { Box, Container } from "@mui/system";
import { styled, alpha } from "@mui/material/styles";
import React from "react";
import { useSelector } from "react-redux";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Cart() {
  const theme=useTheme();
  const state = useSelector((state) => state.cart);
  const {value:cartProduct,loading}=state??{};
  console.log(cartProduct);
  return (
    <Container sx={{display:"flex",flexDirection:"column",justifyContent:"space-between",height:"95%"}}>
      <Box  sx={{overflow:"scroll",height:"65%",padding:0}}>
        <Box sx={{overflowY:"hidden"}}>
        <Grid container spacing={2}>
          {cartProduct.map((prod)=>
          <Grid item xs={6} md={4} key={prod.product.id}>
            <Item>
              <img src={prod.product.image} style={{width:"120px",height:"120px"}}/>
              
              <Button variant="contained" size="small" color="error">
                <DeleteIcon/>
              </Button>
            </Item>
          </Grid>)}
        </Grid>
        </Box> 
      </Box>
      <Box sx={{display:"flex",justifyContent:"flex-end" ,alignItems:"flex-end" ,width:"100%",height:"30%"}}>
        <Box sx={{display:"flex",justifyContent:"flex-end" ,alignItems:"flex-end",flexDirection:"column", width:"70%",}}>
          <Box sx={{display:"flex",alignItems:"center",gap:2,height:"100px"}}>
          <Typography variant="h6" >Total Amaount :</Typography>
          <Typography  variant="h4" sx={{color:"green"}}>100$</Typography>
          </Box>
          <Button variant="contained" size="large" color="success">Buy Now</Button>
        </Box>
      </Box>
    </Container>
  );
}
