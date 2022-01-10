import Head from "next/head";
import Container from "react-bootstrap/Container"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import NavbarMenu from "./NavbarMenu";

const Layout = ({children}) => (
  <Container>
    <Head>
      <meta charset="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>My Next App</title>
    </Head>
    <header>
      <NavbarMenu />
    </header>
    <main>{children}</main>
  </Container>
);

export default Layout;
