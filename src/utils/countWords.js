export const countWords = inputStr => {
	const words = inputStr.split(' ');

	const counts = words.reduce((words, currentWord) => {
		if (!words[currentWord]) {
			words[currentWord] = 0;
		}

		words[currentWord] += 1;
		return words;
	}, {});

	return counts;
};
