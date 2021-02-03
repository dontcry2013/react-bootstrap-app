import { useEffect, useState, useRef } from 'react';

export default (url) => {
  const isCurrent = useRef(true);
  const [state, setState] = useState({ data: null, loading: true });

  useEffect(() => {
    return () => {
      // called when the component is going to unmount
      isCurrent.current = false;
    };
  }, []);

  useEffect(() => {
    setState((pre) => ({ data: pre.data, loading: true }));
    fetch(url)
      .then((x) => x.json())
      .then((y) => {
        if (isCurrent.current) {
          setState({ data: y, loading: false });
        }
      });
  }, [url, setState]);

  return state;
};
