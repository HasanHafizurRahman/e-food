import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Badge from '@mui/material/Badge';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { NavLink } from 'react-router-dom';


const Header = () => {

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Navbar bg="dark" variant="dark" style={{height: "60px"}}>
        <Container>
          <NavLink to='/' className="text-decoration-none text-light mx-3">Add to cart</NavLink>
          <Nav className="me-auto">
            <NavLink to='/' className="text-decoration-none text-light">Home</NavLink>
          </Nav>

          <Badge badgeContent={4} color="primary"
           id="basic-button"
           aria-controls={open ? 'basic-menu' : undefined}
           aria-haspopup="true"
           aria-expanded={open ? 'true' : undefined}
           onClick={handleClick}
          >
            <i class="fa-solid fa-cart-arrow-down text-light" style={{fontSize: 25, cursor:"pointer"}}></i>
          </Badge>

        </Container>

        <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <div className='card_details d-flex justify-content-center align-items-center' style={{width: "24rem", position: "relative", padding:10}}>
          <i className='fas fa-close smallclose' onClick={handleClose}
          style={{position: 'absolute', top: 2, right: 20, fontSize: 23,cursor: 'pointer'}} ></i>
          
          <p className='text-secondary' style={{fontSize: 22}}>Your cart is empty.</p>
          <img src='./cart.gif' alt='cart' className='emptycart_img' style={{width:"5rem", padding: 10}} />
        </div>
      </Menu>

      </Navbar>
    </>
  )
}

export default Header