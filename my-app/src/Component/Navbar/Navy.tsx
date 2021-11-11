import React from "react";
import styles from "./Navy.module.css"
import "bootstrap/dist/css/bootstrap.css";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { GrLanguage } from "react-icons/gr";


export default function Navy() {
  return (
    <Navbar
      className={styles.Navy}
      variant="light"
      sticky="top"
      expand="lg"
      collapseOnSelect
    >
      <Navbar.Brand></Navbar.Brand>{" "}
      <img
        src={
          "https://ambevtech.com.br/wp-content/themes/ambevtech/assets/img/ambev-tech-logo.svg"
        }
        width="400px"
        height="40px"
      />
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Nav>
          <NavDropdown title="Ambev Tech">
            <NavDropdown.Item href="Ambev Tech/Item1">Item1</NavDropdown.Item>
            <NavDropdown.Item href="Ambev Tech/Item2">Item2</NavDropdown.Item>
            <NavDropdown.Item href="Ambev Tech/Item3">Item3</NavDropdown.Item>
          </NavDropdown>

          <NavDropdown title="Para Você">
            <NavDropdown.Item href="Para Você/Item1">Item1</NavDropdown.Item>
            <NavDropdown.Item href="Para Você/Item2">Item2</NavDropdown.Item>
            <NavDropdown.Item href="Para Você/Item3">Item3</NavDropdown.Item>
          </NavDropdown>

          <NavDropdown title="Bem-estar">
            <NavDropdown.Item href="Bem-estar/Item1">Item1</NavDropdown.Item>
            <NavDropdown.Item href="Bem-estar/Item2">Item2</NavDropdown.Item>
            <NavDropdown.Item href="Bem-estar/Item3">Item3</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Indicadores">
            <NavDropdown.Item href="Indicadores/Item1">Item1</NavDropdown.Item>
            <NavDropdown.Item href="Indicadores/Item2">Item2</NavDropdown.Item>
            <NavDropdown.Item href="Indicadores/Item3">Item3</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
      <div className={styles.language}>
        <GrLanguage />
        PT-BR
      </div>
    </Navbar>
  );
}


