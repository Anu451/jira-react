import React from 'react';
import kalyani from '../img/logo2.png';
import './sidebar.css';

function SideBar() {
	return (
		<div className="side-bar">
			<div className="sidebar-top">
				<div className="test">
					<div>
						<img src={kalyani} className="test-logo" alt="" />
					</div>
					<div className="test-text">
						<h5 className="heading">Test</h5>
						<div>Software project</div>
					</div>
				</div>

				<div>
					<h5 className="planning-head">PLANNING</h5>
					<ul className="planning">
						<li>
							<a href="#">
								<i id="icon" class="icon fas fa-sitemap"></i>R Map
							</a>
						</li>
						<li>
							<a href="#">
								<i id="icon" class="icon fas fa-box-open"></i>BackLog
							</a>
						</li>
						<li>
							<a href="#">
								<i id="icon" class="icon fas fa-clipboard"></i>Board
							</a>
						</li>
					</ul>
					<ul className="planning">
						<h5 className="planning-head">DEVELOPMENT</h5>

						<li style={{ padding: '1rem 0 0 0 ' }}>
							<a href="#">
								<i id="icon" class="icon fas fa-code"></i>Code
							</a>
						</li>
					</ul>
				</div>

				<hr className="line"></hr>

				<div className="planning">
					<ul>
						<li>
							<a href="#">
								<i id="icon" class="icon fas fa-file-alt"></i>Project Pages
							</a>
						</li>
						<li>
							<a href="#">
								<i id="icon" class="icon fas fa-calendar-plus"></i> Shortcut
							</a>
						</li>
						<li>
							<a href="#">
								<i id="icon" class="icon fas fa-cogs"></i>Project Settings
							</a>
						</li>
					</ul>
				</div>
			</div>

			<div className="sidebar-bottom">
				<div className="team-mangagement">
					Your in a team management project
				</div>
				<a href="#">Learn More</a>
			</div>
		</div>
	);
}

export default SideBar;
