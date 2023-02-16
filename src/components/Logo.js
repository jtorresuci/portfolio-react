import React from 'react'
import { Container } from 'react-bootstrap'

function Logo({ imageUrl, altText }) {
  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
    <img src={imageUrl} alt={altText} className="width:100%" />
  </Container>
)
}

export default Logo
