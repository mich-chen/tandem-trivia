import React from 'react';
import { render, screen } from '@testing-library/react';
import CorrectAnswer from './correctAnswer';

test('renders correct answer', () => {
    render(<CorrectAnswer answer={'correct test'} />);
    expect(screen.getByTestId('correct-answer')).toHaveTextContent('correct test'); 
});