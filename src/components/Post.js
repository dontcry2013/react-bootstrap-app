import React, { useState, useEffect, useRef } from 'react';
import { Card, Button } from 'react-bootstrap';

const MAX_HEIGHT = 500;
const DESCRIPTION_MAX_HEIGHT = 100;
const colors = ['#f59926', '#4aadde', '#ab75ad'];

export default ({ post, index }) => {
  const ref = useRef();
  const [expanded, setExpanded] = useState(true);

  useEffect(() => {
    if (ref.current.scrollHeight > DESCRIPTION_MAX_HEIGHT) {
      setExpanded(false);
    }
  }, []);

  return (
    <Card style={{
      minHeight: 400, minWidth: 255, width: '100%', backgroundColor: colors[index % 3], margin: 5,
    }}
    >
      <Card.Body>
        <Card.Subtitle className="mb-2">28 Sep, 2018</Card.Subtitle>
        <Card.Title style={{ height: 45 }}>{post.title.length > 40 ? `${post.title.substring(0, 40)} ...` : post.title}</Card.Title>
        <Card.Text as="div" ref={ref}>
          <div
            style={{ maxHeight: expanded ? MAX_HEIGHT : DESCRIPTION_MAX_HEIGHT, overflow: 'hidden' }}
          >
            {post.body}
          </div>
          <br />
        </Card.Text>
      </Card.Body>
      <Card.Footer style={{ borderTop: 0 }}>
        <Button onClick={() => setExpanded(!expanded)} variant="outline-light">
          {expanded ? 'Read Less' : 'Read More'}
        </Button>
      </Card.Footer>
    </Card>
  );
}
