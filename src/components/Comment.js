import React, { useState } from 'react';
import logo from '../img/logo2.png';
import './comment.css';
// import {useState} from React

function Comment() {
	const [message, setMessage] = useState('');
	const [arra, setarra] = useState([]);
	const day = new Date()
		const date = new Date()
		const showTime =
			date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
		 const showday = `${day.getDate()}/${
				day.getMonth() + 1
			}/${day.getFullYear()}`;

	const handelChange = (e) => {
		setMessage(e.target.value);
	};

	const handel = (e) => {
		setarra([...arra, message]);
		setMessage('');
		// if ((e.target.key = 'Enter')) {

		// }
	};
	console.log(arra);
	return (
		<div>
			<div className="comment">
				<img className="comment-logo" src={logo} alt="" />
				<span>
					<input
						className="comment-input"
						type="text"
						value={message}
						placeholder="Add Comments here"
						onChange={handelChange}
					/>
				</span>

				<button onClick={handel}>Post</button>
			</div>
			<div className="comment-display">
				{arra.length === 0 ? (
					<p></p>
				) : (
					<div className="display-section" style={{ display: 'flex' }}>
						<div>
							<img className="comment-logo" src={logo} alt="" />
						</div>
						<div className="username">
							<h4> Anushka</h4>
							<div className="user-comment">
								{arra.map((item) => {
									return <p>{item}</p>;
								})}
							</div>
							<div className="comment-reply">Reply</div>
						</div>
						<span className="comment-time">
								
							{showday} {showTime}
						</span>
					</div>
				)}
			</div>
			{/* <div>
				<b>Pro tip:</b>
				<span>Press M to comment</span>
			</div> */}
		</div>
	);
}

export default Comment;
