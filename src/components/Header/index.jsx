import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Header = () => {

   let activeStyle = {
      color: "#FFF",
   };

   return (
      <div className="header">
         <Navbar expand="lg" fixed="top">
            <Container>
               <Navbar.Brand>Иван Басов</Navbar.Brand>
               <Navbar.Toggle />
               <Navbar.Collapse className="justify-content-end">
                  <Nav className="ml-auto">
                     <NavLink
                        to="/"
                        style={({ isActive }) => (isActive ? activeStyle : undefined)}
                        className="nav-link"
                     >
                        Главная
                     </NavLink>
                     <NavLink
                        to="/projects"
                        style={({ isActive }) => (isActive ? activeStyle : undefined)}
                        className="nav-link"
                     >
                        Проекты
                     </NavLink>
                     <NavLink
                        to="/About"
                        style={({ isActive }) => (isActive ? activeStyle : undefined)}
                        className="nav-link"
                     >
                        О себе
                     </NavLink>
                     <NavLink
                        to="/Contact"
                        style={({ isActive }) => (isActive ? activeStyle : undefined)}
                        className="nav-link"
                     >
                        Контакты
                     </NavLink>
                  </Nav>
               </Navbar.Collapse>
            </Container>
         </Navbar>
      </div>
   );
};

export default Header;
