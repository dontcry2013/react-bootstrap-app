import React from 'react';
import { Card, CardDeck, Col } from 'react-bootstrap';
import Description from './Description';

const colors = ['#f59926', '#4aadde', '#ab75ad'];

export default ({ data, show }) => {
  return (
    <div style={{ color: 'white' }}>
      <CardDeck>
        {
          data.map((post, index) => {
            if (index < show) {
              return (
                <Col xs={12} md={6} lg={4} key={post.id}>
                  <Card style={{
                    minHeight: 200, minWidth: 255, width: '100%', backgroundColor: colors[index % 3], margin: 5,
                  }}
                  >
                    <Card.Body>
                      <Card.Subtitle className="mb-2">28 Sep, 2018</Card.Subtitle>
                      <Card.Title style={{ height: 45 }}>{post.title.length > 40 ? `${post.title.substring(0, 40)} ...` : post.title}</Card.Title>
                      <Description maxHeight={100}>{post.body}</Description>
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
