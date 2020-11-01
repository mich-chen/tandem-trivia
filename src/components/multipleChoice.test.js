import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import MultipleChoices from './MultipleChoice';

test('4 answer choices on screen', () => {
  const currentQ = {'choices': [1, 2, 3, 4], 'correct': 1};
  render(<MultipleChoices current={currentQ} />);
  expect(screen.getByText('1')).toBeInTheDocument();
  expect(screen.getByText('2')).toBeInTheDocument();
  expect(screen.getByText('3')).toBeInTheDocument();
  expect(screen.getByText('4')).toBeInTheDocument();
});

test('useEffect updated shuffle state', () => {
  const currentQ = {'choices': [1, 2, 3, 4], 'correct': 1};
  const result = render(<MultipleChoices current={currentQ} />);
  expect(result.state).not.toEqual([]);
});

// test('update selected on click', () => {
//   const spy = jest.spyOn(MultipleChoices, 'getColor');
//   const currentQ = {'choices': [1, 2, 3, 4], 'correct': 1};
//   render(<MultipleChoices current={currentQ} />)
//   fireEvent.change(screen.getByTestId("3"));
//   expect(spy).toHaveBeenCalled();
// });