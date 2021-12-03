import React from 'react';
import ReactDOM from 'react-dom';

import { Color, Text, Margin, Select } from '@ds.e/react';

import '@ds.e/scss/lib/Utilities.css';
import '@ds.e/scss/lib/Text.css';
import '@ds.e/scss/lib/Margin.css';
import '@ds.e/scss/lib/Select.css';
import '@ds.e/scss/lib/global.css';

const options = [
	{
		label: 'Strict Black',
		value: 'strict-black',
	},
	{
		label: 'Heavenly Green',
		value: 'heavenly-green',
	},
	{
		label: 'Sweet Pink',
		value: 'pink',
	},
];

const App = () => {
	return (
		<div>
			<Color hexCode='#000' />
			<Select options={options} />
			<Margin>
				<Text size='lg'>Hello World</Text>
			</Margin>
		</div>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));

// <Select label='Please select a size' onOptionSelected={console.log} options={[{ label: '', value: '' }]} />
