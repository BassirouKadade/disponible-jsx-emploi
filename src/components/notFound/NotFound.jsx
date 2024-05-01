import React from 'react';
import './NotFound.css';

const NotFound = () => {
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <h1>404 - Not Found</h1>
        <p>La page que vous recherchez n'existe pas.</p>
      </div>
    </div>
  );
};

export default NotFound;
