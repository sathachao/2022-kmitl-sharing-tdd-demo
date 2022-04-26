import React from 'react';
import {render, screen} from '@testing-library/react';
import WordCountPage from './WordCountPage';
import userEvent from '@testing-library/user-event';

describe('WordCountPage', () => {
	test('should show input field and submit button', () => {
		render(<WordCountPage />);

		expect(screen.getByRole('textbox', {name: 'Input'})).toBeInTheDocument();
	});

	test('should show word counts when input text and click count button', () => {
		const input = 'apple banana';

		render(<WordCountPage />);

		userEvent.type(screen.getByRole('textbox', {name: 'Input'}), input);

		expect(screen.getByText('apple: 1')).toBeInTheDocument();
		expect(screen.getByText('banana: 1')).toBeInTheDocument();
	});
});
