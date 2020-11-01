import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Homepage from './homepage';

test('welcome message', () => {
    render(<Homepage />);
    expect(screen.getByText('Welcome to Tandem Trivia For 400!')).toBeInTheDocument();
});

test('start button clicked', () => {
  const setStartGame = jest.fn();
  const setQuestions = jest.fn();
  render(<Homepage setStartGame={setStartGame}
                   setQuestions={setQuestions} />);
  fireEvent.click(screen.getByTestId("start-btn"));
});

test('setStartGame called in handleClick', () => {
  const setStartGame = jest.fn();
  const setQuestions = jest.fn();
  render(<Homepage setStartGame={setStartGame}
                   setQuestions={setQuestions} />);
  fireEvent.click(screen.getByTestId("start-btn"));
  return expect(Promise.resolve(setStartGame)).resolves.toHaveBeenCalled();
});

// test('setQuestions called in handleClick', async () => {
//   const setQuestions = jest.fn();
//   const setStartGame = jest.fn();
//   render(<Homepage setQuestions={setQuestions}
//                    setStartGame={setStartGame} />);
//   fireEvent.click(screen.getByTestId("start-btn"));
//   await expect(Promise.resolve(setQuestions)).resolves.toHaveBeenCalledWith();
// });



