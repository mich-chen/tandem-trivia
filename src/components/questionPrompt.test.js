import React from 'react';
import { render, screen } from '@testing-library/react';

import Question from './questionPrompt';

test('show number and question', () => {
  const q = {'question': 'test question'};
  render(<Question current={q}
                   number={1} />);
  expect(screen.getByTestId('question')).toHaveTextContent('1. test question');
});