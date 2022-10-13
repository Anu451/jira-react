import React from 'react';
import './details.css';
import logo from '../img/logo2.png';

function Details() {
	return (
		<div className="details">
			<div class="details-heading">
				<h5 class="heading">Details</h5>
			</div>
			<div className="details-content">
				<div class="assigned">
					<div className="assigned-head">Assigned</div>
					<div className="assigned-user">
						<img src={logo} alt="" />
						<span>
							<input type="text" placeholder="Unassigned" name="" id="" />
						</span>
					</div>
				</div>

				<div class="assigned">
					<div class="assigned-head">Label</div>
					<div class="assigned-user">
						<span>
							<input type="text" placeholder="None" name="" id="" />
						</span>
					</div>
				</div>

				<div class="assigned">
					<div class="assigned-head">Start Date</div>
					<div class="assigned-user">
						<span>
							<input type="text" placeholder="None" name="" id="" />{' '}
						</span>
					</div>
				</div>

				<div class="assigned">
					<div class="assigned-head">Due date</div>
					<div class="assigned-user">
						<span>
							<input type="text" placeholder="None" name="" id="" />{' '}
						</span>
					</div>
				</div>

				<div class="assigned">
					<div class="assigned-head">Label</div>
					<div class="assigned-user">
						<span>
							<input type="text" placeholder="None" name="" id="" />{' '}
						</span>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Details;
