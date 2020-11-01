import { render, screen } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

test('renders welcome message', () => {
  render(<App />);
  expect(screen.getByText('Welcome to Tandem Trivia For 400!')).toBeInTheDocument();  
});
