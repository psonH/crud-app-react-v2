import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Nav, Button } from 'react-bootstrap'

const Navigation = () => {
    return (
        <>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">Customers</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                       <Link to="/" className="m-2">Home</Link>
                       <Button variant="outline-success">
                            <Link to="/adduser">
                                Add User
                            </Link>
                        </Button>
                    </Nav>      
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}

export default Navigation
