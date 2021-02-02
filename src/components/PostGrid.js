import React from 'react';
import Post from './Post';
import posts from '../data';

const colors = ['#f59926', '#4aadde', '#ab75ad'];

export default () => {
  const first3Posts = posts.slice(0, 3);
  const morePosts = posts.slice(3, posts.length);
  const [showMorePosts, setshowMorePosts] = React.useState(false);
  const showMore = () => {
    setshowMorePosts(!showMorePosts)
  };
  return (
    <div>
      <div className="card-columns">
        {
          first3Posts.map((post, index) => (
            <Post
              key={index} //eslint-disable-line
              color={colors[index % 3]}
              date={post.date}
              title={post.title}
              description={post.description}
            />
          ))
        }
      </div>
      <div className="card-columns">
        {
          showMorePosts && morePosts.map((post, index) => (
            <Post
              key={index} //eslint-disable-line
              color={colors[index % 3]}
              date={post.date}
              title={post.title}
              description={post.description}
            />
          ))
        }
      </div>
      <div className="row">
        <div className="col text-center">
          <button
            type="button"
            onClick={showMore}
            className="btn btn-outline-danger"
          >
            Read More
          </button>
        </div>
      </div>
    </div>
  );
}
