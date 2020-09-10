import React, { useState } from 'react';
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
	rating: 0
};

export const actionsData = {
	onRateWell: action('onRateWell'),
	onRatePoorly: action('onRatePoorly')
};

export const RatedWell = function() {
	
	return <Screener steps={new Steps()
		.click('#thumbsup')
		.snapshot('Upboat')
		.click('#thumbsdown')
		.click('#thumbsdown')
		.click('#thumbsdown')
		.snapshot('Downboat')
		.end()}>
			<BigRater rater={{...raterData, rating: 5}} {...actionsData} />
		</Screener>
};