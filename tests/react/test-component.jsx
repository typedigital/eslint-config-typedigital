import React from 'react';

const MyTitle = () => {
  return (
    <h1>Unparameterized Title</h1>
  );
};

const MyComponent = () => {
  return (
    <div>
      <MyTitle />
    </div>
  );
};

export default MyComponent;
