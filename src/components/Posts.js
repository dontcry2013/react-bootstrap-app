import React from 'react';
import { CardDeck, Col } from 'react-bootstrap';
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
