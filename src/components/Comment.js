import React from 'react';
import logo from '../img/logo2.png';
import './comment.css';

function Comment() {
	return (
		<div className="comment">
			<img className="comment-logo" src={logo} alt="" />
			<span>
				<input
					className="comment-input"
					type="text"
					placeholder="Add Comments here"
				/>
			</span>
			<button>Post</button>
		</div>
	);
}

export default Comment;
