import React, {useState} from 'react';
import {Button, Container, TextField} from '@mui/material';
import {register} from './apis/registerApi';
import RegisterStatusDialog from './RegisterStatusDialog';

const RegisterPage = () => {
	const [showDialog, setShowDialog] = useState(false);
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [dialogMsg, setDialogMsg] = useState('');

	const handleSubmit = () => {
		const registerResult = register(username, password);
		const msg = registerResult ? `${username} has been successfully registered` : `Sorry, unable to register ${username}`;

		setDialogMsg(msg);
		setShowDialog(true);
	};

	return (
		<>
			<RegisterStatusDialog showDialog={showDialog} onClose={() => setShowDialog(false)} dialogMsg={dialogMsg} />
			<Container component="main" maxWidth="xs">
				<TextField
					margin="normal"
					required
					fullWidth
					id="username"
					label="Username"
					name="username"
					autoComplete="username"
					autoFocus
					onChange={event => setUsername(event.target.value)}
				/>
				<TextField
					margin="normal"
					required
					fullWidth
					id="password"
					label="Password"
					name="password"
					autoComplete="password"
					onChange={event => setPassword(event.target.value)}
				/>
				<Button
					type="submit"
					fullWidth
					variant="contained"
					onClick={handleSubmit}
				>
					Register
				</Button>
			</Container>
		</>
	);
};

export default RegisterPage;
