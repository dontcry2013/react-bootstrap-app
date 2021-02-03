import React from 'react';
import { Card, CardDeck, Col } from 'react-bootstrap';
import Description from './Description';

const colors = ['#f59926', '#4aadde', '#ab75ad'];

export default ({ data, show }) => {
  return (
    <div style={{ color: 'white' }}>
      <CardDeck>
        {
          data.map((card, index) => {
            if (index < show) {
              return (
                <Col xs={12} md={6} lg={4} key={card.id}>
                  <Card style={{
                    minWidth: 255, width: '100%', backgroundColor: colors[index % 3], margin: 5,
                  }}
                  >
                    <Card.Body>
                      <Card.Subtitle className="mb-2">{card.date}</Card.Subtitle>
                      <Card.Title style={{ height: 45 }}>{card.title}</Card.Title>
                      <Description maxHeight={170}>{card.description}</Description>
                    </Card.Body>
                  </Card>
                </Col>
              )
            }
            return null;
          })
        }
      </CardDeck>
    </div>
  );
}
