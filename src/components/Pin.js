import React from 'react'
import './pin.css'

function Pin() {
	return (
		<div className="content-left-pin">
			<div className="pin-heading">
				<div className="pinned-fields">
					<h5 className="heading">Pinned Field</h5>
				</div>
				<div className="pinned-add">
					<i class="fas fa-times"></i>  
				</div>
			</div>
			<div className="pinned-content">
				<p>
					Click on the <i class="fas fa-thumbtack"></i> to pin the content
				</p>
			</div>
		</div>
	);
}

export default Pin
