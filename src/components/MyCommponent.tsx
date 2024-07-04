import React from 'react';

// Props turlarini aniqlaymiz
interface MyComponentProps {
  title: string;
  count: number;
  isVisible: boolean;
  onClick: () => void;
}

const MyComponent: React.FC<MyComponentProps> = ({ title, count, isVisible, onClick }) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>Count: {count}</p>
      <p>Visibility: {isVisible ? 'Visible' : 'Hidden'}</p>
      <button onClick={onClick}>Click me</button>
    </div>
  );
};

export default MyComponent;
