import React from 'react';

export default ({ title, description }) => {
  return (
    <div className="row mt-2">
      <div className="col">
        <h1 className="text-danger">{ title }</h1>
        <p>{ description }</p>
      </div>
    </div>
  );
}
