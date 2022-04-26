import {countWords} from './countWords';

describe('countWords', () => {
	test('should count words delimited by space', () => {
		const input = 'apple banana cantaloupe banana';
		const expected = {
			apple: 1,
			banana: 2,
			cantaloupe: 1,
		};

		const actual = countWords(input);

		expect(actual).toStrictEqual(expected);
	});
});
