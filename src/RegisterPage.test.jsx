import React from 'react';
import {render, screen, within} from '@testing-library/react';
import RegisterPage from './RegisterPage';
import userEvent from '@testing-library/user-event';
import * as registerApi from './apis/registerApi';

jest.mock('./apis/registerApi');

describe('RegisterPage', () => {
	afterEach(() => {
		jest.resetAllMocks();
	});

	test('should show input fields and submit button', () => {
		render(<RegisterPage/>);

		expect(screen.getByRole('textbox', {name: 'Username'})).toBeInTheDocument();
		expect(screen.getByRole('textbox', {name: 'Password'})).toBeInTheDocument();
		expect(screen.getByRole('button', {name: 'Register'})).toBeInTheDocument();
	});

	test('should show success message when submit', () => {
		const username = 'test-username';
		registerApi.register.mockReturnValue(true);

		render(<RegisterPage />);

		userEvent.type(screen.getByRole('textbox', {name: 'Username'}), username);
		userEvent.type(screen.getByRole('textbox', {name: 'Password'}), 'test-password');
		userEvent.click(screen.getByRole('button', {name: 'Register'}));

		const dialog = screen.getByRole('dialog', {});
		expect(within(dialog).getByText(`${username} has been successfully registered`)).toBeInTheDocument();
	});

	test('should call register with input username and password when submit', () => {
		const username = 'some-username';
		const password = 'some-password';

		render(<RegisterPage />);

		userEvent.type(screen.getByRole('textbox', {name: 'Username'}), username);
		userEvent.type(screen.getByRole('textbox', {name: 'Password'}), password);
		userEvent.click(screen.getByRole('button', {name: 'Register'}));

		expect(registerApi.register).toHaveBeenCalledTimes(1);
		expect(registerApi.register).toHaveBeenCalledWith(username, password);
	});
});
