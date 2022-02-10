import { Routes, Route, Navigate, NavLink } from 'react-router-dom'
import routes from '../../routes'
import { Nav, Navbar, Container } from 'react-bootstrap'

const App = () => {
    return (
        <>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">Travel Advisor</Navbar.Brand>
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
            <Routes>
                {routes.map(({ path, Component }, idx) => (
                    <Route
                        exact
                        path={path}
                        element={<Component />}
                        key={idx}
                    />
                ))}
                <Route
                    path="/"
                    element={<Navigate to="/hotels" />}
                />
            </Routes>
        </>
    )
}

export default App
