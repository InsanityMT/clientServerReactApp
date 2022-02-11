import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

const Header = ({ routes, title, root }) => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href={root}>{title}</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        {routes.map(({path, name}, idx) =>
                            <Nav.Item>
                                <NavLink
                                    key={idx}
                                    to={path}
                                    className={({ isActive }) => `${isActive && 'active-nav-link'} nav-link`}
                                >
                                    {name}
                                </NavLink>
                            </Nav.Item>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header