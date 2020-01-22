import React from 'react';
import { action } from '@storybook/addon-actions';
import BigRater from '../components/big_rater.js'
import Screener, {Steps} from 'screener-storybook/src/screener';

export default {
  title: 'BigRater',
  component: BigRater,
  excludeStories: /.*Data$/,
};

export const raterData = {
	id: '34',
	// name: 'Huge Chungus',
	rating: 0
};

export const actionsData = {
	onRateWell: action('onRateWell'),
	onRatePoorly: action('onRatePoorly')
};

export const Unrated = () => {
	return <BigRater rater={{...raterData}} {...actionsData} />;
};

export const RatedWell = () => {
	return <Screener steps={new Steps()
		.click('.name')
		.snapshot('name clicked')
		.setValue('.name', "Somesone")
		.end()}>
			<BigRater rater={{...raterData, rating: 5}} {...actionsData} />
		</Screener>
};

export const RatedPoorly = () => {
	return <BigRater rater={{...raterData, rating: -3}} {...actionsData} />;
};


// RatedPoorly.story = { name: 'Renamed'};