import React, {useState} from 'react';
import {Button, Container, Dialog, DialogTitle, TextField} from '@mui/material';

const RegisterPage = () => {
	const [showDialog, setShowDialog] = useState(false);
	const [, setUsername] = useState('');
	const [, setPassword] = useState('');

	const handleSubmit = () => {
		setShowDialog(true);
	};

	return (
		<>
			<Dialog open={showDialog} onClose={() => setShowDialog(false)}>
				<DialogTitle>Success</DialogTitle>
			</Dialog>
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
