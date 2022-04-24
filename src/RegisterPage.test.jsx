import React from 'react';
import {render, screen, within} from '@testing-library/react';
import RegisterPage from './RegisterPage';
import userEvent from '@testing-library/user-event';

describe('RegisterPage', () => {
	test('should show input fields and submit button', () => {
		render(<RegisterPage/>);

		expect(screen.getByRole('textbox', {name: 'Username'})).toBeInTheDocument();
		expect(screen.getByRole('textbox', {name: 'Password'})).toBeInTheDocument();
		expect(screen.getByRole('button', {name: 'Register'})).toBeInTheDocument();
	});

	test('should show success message when submit', () => {
		const username = 'test-username';

		render(<RegisterPage />);

		userEvent.type(screen.getByRole('textbox', {name: 'Username'}), username);
		userEvent.type(screen.getByRole('textbox', {name: 'Password'}), 'test-password');
		userEvent.click(screen.getByRole('button', {name: 'Register'}));

		const dialog = screen.getByRole('dialog', {});
		expect(within(dialog).getByText('Success')).toBeInTheDocument();
	});
});
