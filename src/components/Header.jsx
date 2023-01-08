import { AppBar,Button, Toolbar, Typography } from '@mui/material'
import { IconButton } from '@mui/material';
import { Badge } from '@mui/material';
import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { Box } from '@mui/system';
import { useSelector } from 'react-redux';
import { getItemCount } from '../utils';

import {styled,alpha} from '@mui/material/styles'
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

const Search =styled("section")(({theme})=>({
    position:"relative",
    borderRadius:theme.shape.borderRadius,
    display:"flex",
    backgroundColor:alpha(theme.palette.common.white,0.15),
    "&:hover":{
        backgroundColor:alpha(theme.palette.common.white,0.15)
    },
    marginRight:theme.spacing(2),
    marginLeft:0,
    width:"100%"
}));
function SearchBar(){
    const products=useSelector((state)=>state.products.value)
    return <Search>
        <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={Array.from(products,(prod)=>({id:prod.id,label:prod.title}))}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} />}
        />
    </Search>
}

export default function Header() {
    const cartItmes=useSelector(state=>state.cart?.value)
    const count=getItemCount(cartItmes)
  return (
    <AppBar position="sticky">
        <Toolbar>
            <Typography variant='h6' color="inherit" sx={{flexGrow:1}}>COBSHOP</Typography>
            <Box sx={{display:{md:"flex"}}}>
                <SearchBar/>
                <IconButton size="large" aria-label="Show cart Items Count" color="inherit">
                    <Badge badgeContent={count} color="error">
                        <ShoppingCartIcon/>
                    </Badge>
                </IconButton>
            </Box>
            <Button color="inherit">LogIn</Button>
        </Toolbar>
    </AppBar>
  )
}
