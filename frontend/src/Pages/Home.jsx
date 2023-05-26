import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();
  const goToAddpage = () => {
    navigate("/add");
  };
    return (

    <div>
        <Container className="d-flex justify-content-center">
        <h1 className="mx-3">Products</h1>
        <Button variant="success" onClick={goToAddpage}>Add +</Button>
        </Container>
    </div>
  )
}
