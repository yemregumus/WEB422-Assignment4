import React from 'react';
import Link from 'next/link';
import { Navbar, Nav, Form, Button, FormControl, Container } from 'react-bootstrap';
import { useRouter } from 'next/router';

export default function MainNav() {
  const router = useRouter();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const searchField = formData.get('searchField');
    router.push(`/artwork?title=true&q=${searchField}`);
  };
  
  return (
    <>
      <Navbar fixed="top" expand="md" className="fixed-top bg-dark navbar-dark">
      <Container fluid>
        <Navbar.Brand>
        <Link href="https://www.linkedin.com/in/jonasgumusyyz/" target="_blank" rel="noopener noreferrer" className="rainbow-link">
                <span className="rainbow-text">Yunus Gumus</span>
              </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/" legacyBehavior passHref>Home</Nav.Link>
            <Nav.Link href="/search" legacyBehavior passHref>Advanced Search</Nav.Link>
          </Nav>
          <Form className="d-flex" onSubmit={handleSearchSubmit}>
            <FormControl
              type="text"
              placeholder="Search"
              name="searchField"
            />
            &nbsp;
            <Button variant="success" type="submit">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      <br /><br />
    </>
  );
};
