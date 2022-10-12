import React from 'react'
import './activity.css'

function Activity() {
	return (
		<div className="activity">
			<h5 className="heading">Activity</h5>
			<div className="activity-button">
				<div>
					<button className="button">Show:</button>
					<button className="button">All</button>
					<button className="button">Comments</button>
					<button className="button">History</button>
				</div>
				<div className='activity-link'>
					<a href="#">
						Newest first <i class="fas fa-sort-amount-down"></i>
					</a>
				</div>
			</div>
		</div>
	);
}

export default Activity
