import React, {useState} from 'react';
import {Chip, Container, Divider, TextField} from '@mui/material';
import {countWords} from './utils/countWords';

const WordCountPage = () => {
	const [inputText, setInputText] = useState('');

	const renderWordCount = () => {
		const wordCounts = countWords(inputText);
		return (<>{Object.entries(wordCounts).map(([word, count]) => <Chip key={word}
			label={`${word}: ${count}`}/>)}</>);
	};

	return (<Container component="main" maxWidth="xs">
		{renderWordCount()}
		<Divider/>
		<TextField
			multiline
			fullWidth
			id="input"
			label="Input"
			name="input"
			autoFocus
			onChange={event => setInputText(event.target.value)}/>
	</Container>);
};

export default WordCountPage;
