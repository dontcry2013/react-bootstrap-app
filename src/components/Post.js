import React from 'react';

export default ({
  date, title, description, color = '#007bff',
}) => {
  const titleSubSstring = title.length > 40 ? `${title.substring(0, 40)} ...` : title;
  const descriptionSubstring = description.length > 300 ? `${description.substring(0, 300)} ...` : description;

  return (
    <div className="card text-white text-left p-3" style={{ backgroundColor: `${color}` }}>
      <small>{ date }</small>
      <blockquote className="blockquote mb-0">
        <p>{titleSubSstring}</p>
        <div className="blockquote-footer text-white">
          <small>{descriptionSubstring}</small>
        </div>
        <button type="button" className="btn btn-outline-light mt-4">Read More</button>
      </blockquote>
    </div>
  );
}
