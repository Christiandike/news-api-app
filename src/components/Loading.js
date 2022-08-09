import React from 'react';
import loading from '../media/loading.gif';

const Loading = () => {
  const style = {
    display: 'block',
    margin: '0 auto',
    marginTop: '10rem',
  };
  return (
    <div>
      <img src={loading} style={style} />
      <p
        style={{
          textAlign: 'center',
          textTransform: 'uppercase',
          paddingTop: '1rem',
        }}
      >
        {' '}
        Fetching Results
      </p>
    </div>
  );
};

export default Loading;
