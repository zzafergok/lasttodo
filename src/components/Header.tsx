import React from "react";
import { Navbar, Container } from "react-bootstrap";

interface IProps {
  projectName: string;
}

// #
const Header: React.StatelessComponent<IProps> = ({ projectName }) => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container className="justify-content-center">
          <Navbar.Brand href="#home">{projectName}</Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
