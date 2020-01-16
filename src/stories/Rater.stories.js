import React from 'react';
import { action } from '@storybook/addon-actions';
import Rater from '../components/name_rater.js'
// import { Button } from '@storybook/react/demo';

export default {
  title: 'Rater',
  component: Rater,
  excludeStories: /.*Data$/,
};

export const raterData = {
	id: '5',
	name: 'Sluggowumpus',
	rating: ''
};

export const actionsData = {
	onRateWell: action('onRateWell'),
	onRatePoorly: action('onRatePoorly')
};

export const Unrated = () => {
	return <Rater rater={{...raterData}} {...actionsData} />;
};

export const RatedWell = () => {
	return <Rater rater={{...raterData, rating: 'Good'}} {...actionsData} />;
};

export const RatedPoorly = () => {
	return <Rater rater={{...raterData, rating: 'Bad'}} {...actionsData} />;
};