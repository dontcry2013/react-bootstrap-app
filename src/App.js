import React from 'react';
import Header from './components/Header';
import PostGrid from './components/PostGrid';

export default function App() {
  const title = 'Related Articles';
  const description = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.';

  return (
    <div className="container">
      <Header title={title} description={description} />
      <PostGrid />
    </div>
  );
}
