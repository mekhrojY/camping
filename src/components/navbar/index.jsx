import React from 'react'
import { Container, LogoWrapper, NavMiddle, NavRight, Navlink } from '../styles/navbarStyle'
import logo from "../../assets/Camper.logo.png"
import cart from "../../assets/cart.png"
import saram from "../../assets/saram.png"


const Navbar = () => {
  return (
    <Container>
      <LogoWrapper>
      <Navlink to="/">
        <img style={{width:"150px"}} src={logo} alt='logo-img' />
        </Navlink>
      </LogoWrapper>
      <NavMiddle>
      <Navlink to="/motor">
        <p>Motor</p>
        </Navlink>
        <Navlink to="/caravan">
        <p>Caravan</p>
        </Navlink>
        <Navlink to="/tuning">
        <p>Tuning</p>
        </Navlink>
        <Navlink to="/used-car">
        <p>Used Car</p>
        </Navlink>
        <Navlink to="/camping-place">
        <p>Camping Place</p>
        </Navlink>
      </NavMiddle>
      <NavRight>
       <img src={cart} alt='cart-img' />
       <img src={saram} alt='person-img' />
       <p>En</p>

      </NavRight>
    </Container>
  )
}

export default Navbar
