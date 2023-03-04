import { AppBar,Button, Toolbar, Typography,useTheme } from '@mui/material'
import { IconButton } from '@mui/material';
import { Badge } from '@mui/material';
import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
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
    const theme=useTheme()
    return <Search>
        <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={Array.from(products,(prod)=>({id:prod.id,label:prod.title}))}
        sx={{ width: "100%" ,[theme.breakpoints.up('md')]: {
           display:"flex",
          },}}
        renderInput={(params) => <TextField {...params} />}
        />
        <IconButton size="large" aria-label="Show cart Items Count" color="inherit"><SearchOutlinedIcon sx={{}}/></IconButton>
    </Search>
}

export default function Header() {
    const cartItmes=useSelector(state=>state.cart?.value)
    const count=getItemCount(cartItmes)
  return (
    <AppBar position="sticky">
        <Toolbar sx={{display:"flex", justifyContent:"space-between"}}>
            <Box>
            <Typography variant='h6' color="inherit" sx={{flexGrow:1}}>COBSHOP</Typography>
            </Box>
            <Box sx={{display:"flex",alignItems:"center" , width:"500px"}}>
                <SearchBar sx={{display:{md:"flex"}}}/>
                <IconButton size="large" aria-label="Show cart Items Count" color="inherit">
                    <Badge badgeContent={count} color="error">
                        <ShoppingCartIcon/>
                    </Badge>
                </IconButton>
                <Button color="inherit">LogIn</Button>
            </Box>
        </Toolbar>
    </AppBar>
  )
}
