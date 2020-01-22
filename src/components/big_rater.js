import React, { Component, useState } from 'react';
import PropTypes from 'prop-types';
import '../../public/css/Rater.css';
	
function BigRater({ rater: {id, name, rating}, onRateWell, onRatePoorly}) {
	const [count, setCount] = useState(rating);

	var ratingClass;
	if (count > 0) {
		ratingClass = <div className="rating_Good" />
	}

	if (count < 0) {
		ratingClass = <div className="rating_Bad" />	
	}

	return (
		<div className={`rater`}>
			<div className="topline">
				<div className="name">
					<input type="text" value={name} readOnly={false} />
				</div>
				<div className="ratingCount">{count}</div>
				{ratingClass}

				
			</div>
			<button id="thumbsup" className="vote" onClick={() => setCount(count + 1)}>
				I Love It!
			</button>
			<button id="thumbsdown" className="vote" onClick={() => setCount(count - 1)}>
				I Hate It!
			</button>
		</div>
	)
;}

BigRater.propTypes = {
  rater: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
  }),
  onRateWell: PropTypes.func,
  onRatePoorly: PropTypes.func,
};

export default BigRater;