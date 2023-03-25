import { AppBar, Button, Toolbar, Typography, useTheme } from "@mui/material";
import { IconButton } from "@mui/material";
import { Badge } from "@mui/material";
import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Box } from "@mui/system";
import { useSelector } from "react-redux";
import { getItemCount } from "../utils";

import { styled, alpha } from "@mui/material/styles";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { Link, useNavigate } from "react-router-dom";
import Modal from "@mui/material/Modal";
import Cart from "../pages/Cart";

const Search = styled("section")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  display: "flex",
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.15),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
}));
function SearchBar() {
  const products = useSelector((state) => state.products.value);
  const theme = useTheme();
  return (
    <Search>
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={Array.from(products, (prod) => ({
          id: prod.id,
          label: prod.title,
        }))}
        sx={{
          width: "100%",
          [theme.breakpoints.up("md")]: {
            display: "flex",
          },
        }}
        renderInput={(params) => <TextField {...params} />}
      />
      <IconButton
        size="large"
        aria-label="Show cart Items Count"
        color="inherit"
      >
        <SearchOutlinedIcon sx={{}} />
      </IconButton>
    </Search>
  );
}

const style = {
  position: "absolute",
  top:"50%",
  left: "50%",
  transform: "translate(-50%)",
  width: "100%",
  height: '50%',
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,

  p: 1,
};

function BasicModal({ cartItmes, count }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const theme = useTheme();

  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <IconButton
        size="large"
        aria-label="Show cart Items Count"
        color="inherit"
        onClick={handleOpen}
      >
        <Badge badgeContent={count} color="error">
          <ShoppingCartIcon />
        </Badge>
      </IconButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            ...style,
            [theme.breakpoints.up("md")]: {
              width: "50%",
              height:"100%",
              transform: "translate(-50%, -50%)",
            },
          }}
        >
          {/* <Typography id="modal-modal-title" variant="h6" component="h2">
              Text in a modal
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography> */}
          <Cart cartItmes={cartItmes} />
        </Box>
      </Modal>
    </div>
  );
}

export default function Header() {
  const cartItmes = useSelector((state) => state.cart?.value);
  const count = getItemCount(cartItmes);
  const navigate = useNavigate();
  return (
    <AppBar position="sticky">
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box>
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            <Typography variant="h6" color="inherit" sx={{ flexGrow: 1 }}>
              COBSHOP
            </Typography>
          </Link>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", width: "500px" }}>
          <SearchBar sx={{ display: { md: "flex" } }} />
          {/* <IconButton size="large" aria-label="Show cart Items Count" color="inherit">
                    <Badge badgeContent={count} color="error">
                        <ShoppingCartIcon/>
                    </Badge>
                </IconButton> */}
          <BasicModal cartItmes={cartItmes} count={count} />
          <Button
            color="inherit"
            onClick={() => {
              navigate("/login");
            }}
          >
            LogIn
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
