import React from 'react';
import {
  Card, CardDeck, Col, Button,
} from 'react-bootstrap';
import Description from './Description';
import Post from './Post';

export default ({ data, show }) => {
  return (
    <div style={{ color: 'white' }}>
      <CardDeck>
        {
          data.map((post, index) => {
            if (index < show) {
              return (
                <Col xs={12} md={6} lg={4} key={post.id}>
                  <Post post={post} index={index} />
                  {/* <Card style={{
                    minHeight: 400,
                    minWidth: 255,
                    width: '100%',
                    backgroundColor: colors[index % 3],
                    margin: 5,
                  }}
                  >
                    <Card.Body>
                      <Card.Subtitle className="mb-2">28 Sep, 2018</Card.Subtitle>
                      <Card.Title style={{ height: 45 }}>
                        {post.title.length > 40 ? `${post.title.substring(0, 40)} ...` : post.title}
                      </Card.Title>
                      <Description maxHeight={100}>{post.body}</Description>
                    </Card.Body>
                    <Card.Footer style={{ borderTop: 0 }}>
                      <Button variant="outline-light">Read More</Button>
                    </Card.Footer>
                  </Card> */}
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
