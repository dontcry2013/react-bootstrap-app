import React, { useState, useEffect } from 'react';
import { Container, Row, Button } from 'react-bootstrap';
import Header from './components/Header';
import Posts from './components/Posts';
import useFetch from './hooks/useFetch';

const title = 'Related Articles';
const description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';

export default function App() {
  const { data, loading } = useFetch('https://jsonplaceholder.typicode.com/posts');
  const [show, setShow] = useState(3)
  const [showMoreCards, setShowMoreCards] = useState(false)
  const handleShowMoreCards = () => {
    setShow(data.length > 10 ? 10 : data.length)
    setShowMoreCards(true)
  }
  const handleShowLessCards = () => {
    setShow(3)
    setShowMoreCards(false)
  }
  return (
    <Container>
      { loading && <p>Loading </p> }
      { !loading
        && (
          <>
            <Header title={title} description={description} />
            <Posts data={data} show={show} />
            <Row className="justify-content-md-center" style={{ margin: 40 }}>
              {!showMoreCards
                ? <Button variant="outline-danger" onClick={handleShowMoreCards}>Read More</Button>
                : <Button variant="outline-danger" onClick={handleShowLessCards}>Read Less</Button>}
            </Row>
          </>
        )}
    </Container>
  );
}
