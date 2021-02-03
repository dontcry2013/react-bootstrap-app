import React, { useState, useEffect, useRef } from 'react';
import { Card, Button } from 'react-bootstrap';

const MAX_HEIGHT = 500;

export default ({ maxHeight, children }) => {
  const ref = useRef();
  const [expanded, setExpanded] = useState(true);

  useEffect(() => {
    if (ref.current.scrollHeight > maxHeight) {
      setExpanded(false);
    }
  }, [maxHeight]);

  return (
    <Card.Text as="div" ref={ref}>
      <div
        style={{ maxHeight: expanded ? MAX_HEIGHT : maxHeight, overflow: 'hidden' }}
      >
        {children}
      </div>
      <br />
      <Button onClick={() => setExpanded(!expanded)} variant="outline-light">{expanded ? 'Read Less' : 'Read More'}</Button>
    </Card.Text>
  );
}
