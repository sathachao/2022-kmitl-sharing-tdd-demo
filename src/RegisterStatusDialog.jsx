import React from 'react';
import {Dialog, DialogContent} from '@mui/material';

// eslint-disable-next-line react/prop-types
const RegisterStatusDialog = ({showDialog, onClose, dialogMsg}) => (
	<Dialog open={showDialog}
		onClose={onClose}>
		<DialogContent>{dialogMsg}</DialogContent>
	</Dialog>);

export default RegisterStatusDialog;
