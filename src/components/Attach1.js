import React from 'react';
import './attach1.css';

function Attach1() {
	return (
		<div className="s">
			<div className="activity-head">
				{/* <img src={logo} alt="" /> */}
				<span>Sdgh</span>
			</div>

			<div className="activity-button">
				<button className="button">
					<i id="icon" class="fas fa-paperclip"></i>Attach
				</button>
				<button className="button">
					<i id="icon" class="fas fa-bezier-curve"></i>Add a child issue
				</button>
				<button className="button">
					<i id="icon" class="fas fa-link"></i>Link issue
				</button>
				<button className="button">
					<i class="fas fa-chevron-down"></i>
				</button>
				<button className="button">
					<i id="icon" class="fas fa-ellipsis-h"></i>
				</button>
			</div>
		</div>
	);
}

export default Attach1;
