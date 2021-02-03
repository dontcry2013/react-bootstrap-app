import React, { useState } from 'react';
import { Container, Row, Button } from 'react-bootstrap';
import Header from './components/Header';
import Posts from './components/Posts';
import data from './data';

const title = 'Related Articles';
const description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';

export default function App() {
  const [show, setShow] = useState(3)
  const [showMoreCards, setShowMoreCards] = useState(false)
  const handleShowMoreCards = () => {
    setShow(data.length)
    setShowMoreCards(true)
  }
  const handleShowLessCards = () => {
    setShow(3)
    setShowMoreCards(false)
  }

  return (
    <Container>
      <Header title={title} description={description} />
      <Posts data={data} show={show} />
      <Row className="justify-content-md-center" style={{ marginTop: 40 }}>
        {!showMoreCards
          ? <Button variant="outline-danger" onClick={handleShowMoreCards}>Read More</Button>
          : <Button variant="outline-danger" onClick={handleShowLessCards}>Read Less</Button>}
      </Row>
    </Container>
  );
}
