import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../Rater.css';
	
function Rater({ rater: {id, name, rating}, onRateWell, onRatePoorly}) {
	return (
		<div className={`rater`}>
			<div className="topline">
				<div className="name">
					<input type="text" value={name} readOnly={false} />
				</div>
				<div className={`rating_${rating}`} />
				
			</div>
			<button id="thumbsup" className="vote" onClick={() => onRateWell(id)}>
				I Love It!
			</button>
			<button id="thumbsdown" className="vote" onClick={() => onRatePoorly(id)}>
				I Hate It!
			</button>
		</div>
	)
;}

Rater.propTypes = {
  rater: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    rating: PropTypes.string.isRequired,
  }),
  onRateWell: PropTypes.func,
  onRatePoorly: PropTypes.func,
};

export default Rater;