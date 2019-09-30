import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import { ChevronDown, Play, X } from 'react-feather';
import Button from './Button';

storiesOf('Atoms|Button', module).addDecorator(centered)
	.add('Primary', () => (
		<div style={{ display: 'flex' }}>
			<Button text="Primary" primary />
			<Button text="Primary" primary icon={<ChevronDown size="26" />} />
			<Button primary icon={<Play size="26" />} />
			<Button text="Disabled" primary disabled />
		</div>
	))
	.add('Secondary', () => (
		<div style={{ display: 'flex' }}>
			<Button text="Secondary" />
			<Button text="Primary" icon={<ChevronDown size="26" />} />
			<Button icon={<Play size="26" />} />
			<Button text="Disabled" disabled />
		</div>
	))
	.add('Danger', () => (
		<div style={{ display: 'flex' }}>
			<Button text="Danger" primary danger />
			<Button danger primary icon={<X size="26" />} />
		</div>
	));