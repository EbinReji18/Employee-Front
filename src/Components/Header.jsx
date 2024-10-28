import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
function Header() {
  return (
    <>
    <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
          <i className="fa-solid fa-school fa-xl" />
            {' '}
            Employee Management
          </Navbar.Brand>
          <Link to={'/'} className='btn btn-dark' style={{textDecoration:"none",border:"2px solid #15b7a4"}}>Home</Link>
        </Container>
    </Navbar> 
    </>
  )
}

export default Header