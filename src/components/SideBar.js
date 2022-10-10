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
					<ul className="planning">
						<li>
							<a href="#">
								<h5>PLANNING</h5>
							</a>
						</li>
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
						<li>
							<a href="#">
								<h5 className="heading">DEVELOPMENT</h5>
							</a>
						</li>
						<li>
							<a href="#">
								<i id="icon" class="icon fas fa-code"></i>Code
							</a>
						</li>
					</ul>
				</div>

				<hr class="line"></hr>

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
		</div>
	);
}

export default SideBar;
