import React from 'react';
import ErrorImg from './error404.png';

const Page404 = () => {
  return (
    <div
      style={{
        display: 'flex',
        position: 'absolute',
        width: '100%',
        height: '100%',
      }}
    >
      <img
        src={ErrorImg}
        style={{
          width: '320px',
          height: '120px',
          margin: 'auto',
        }}
        alt="error 404"
      />
    </div>
  );
};

export default Page404;
