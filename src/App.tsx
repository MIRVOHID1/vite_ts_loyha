import React from 'react';
import MyComponent from './MyComponent';

const App: React.FC = () => {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <div>
      <h1>Hello Vite + React + TypeScript!</h1>
      <MyComponent 
        title="My Custom Component" 
        count={42} 
        isVisible={true} 
        onClick={handleClick} 
      />
    </div>
  );
};

export default App;
