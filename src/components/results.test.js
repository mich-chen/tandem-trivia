import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import Results from './results';

test('setQuestions called in onClick', () => {
  const setQuestions = jest.fn();
  render(<Results setQuestions={setQuestions}
                  setEndGame={jest.fn()}
                  setResults={jest.fn()} />);
  fireEvent.click(screen.getByTestId("play-again"));
  expect(setQuestions).toHaveBeenCalled();
});

test('setEndGame called in onClick', () => {
  const setEndGame = jest.fn();
  render(<Results setQuestions={jest.fn()}
                  setEndGame={setEndGame}
                  setResults={jest.fn()} />);
  fireEvent.click(screen.getByTestId("play-again"));
  expect(setEndGame).toHaveBeenCalled();
});

test('setResults called in onClick', () => {
  const setResults = jest.fn();
  render(<Results setQuestions={jest.fn()}
                  setEndGame={jest.fn()}
                  setResults={setResults} />);
  fireEvent.click(screen.getByTestId("play-again"));
  expect(setResults).toHaveBeenCalled();
});