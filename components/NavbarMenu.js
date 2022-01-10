import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Link from "next/link";

export default function NavbarMenu() {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand>My Next App</Navbar.Brand>
      <Nav>
      <Link href="/" passHref>
          <Nav.Link>Home</Nav.Link>
        </Link>
        <Link href="/posts" passHref>
          <Nav.Link>Posts</Nav.Link>
        </Link>
        <Link href="/jokes/random" passHref>
          <Nav.Link>Jokes</Nav.Link>
        </Link>
        <Link href="/about" passHref>
          <Nav.Link>About</Nav.Link>
        </Link>
      </Nav>
    </Navbar>
  );
}
