import React from 'react';

const Container = ({ children, style, className }) => {
  // Define default styles for the container
  const defaultStyles = {
    padding: '20px',
    margin: '10px',
    ...style, // allows overriding and extending the styles
  };

  return (
    <div className={className} style={defaultStyles}>
      {children}
    </div>
  );
};

export default Container;
