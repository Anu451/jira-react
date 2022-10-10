import React from 'react';
import './nav.css';
import logo from '../img/Spider logo-01.png';
// const logo = '../img/Logo.jpeg';
import profile from '../img/blank-profile-picture-gf7bb1bee8_640.png';

function NavBar() {
	return (
		<div className="navbar">        
			<div className="navbar-right">
				<ul>
					<li>
						<i id="icon" class="fas fa-bars"></i>
					</li>
					<li>
						<img src={logo} className="logo" alt="logo" />
					</li>
					<li>
						<a href="#">
							{' '}
							Your work{' '}
							<span>
								<i class="fas fa-caret-down"></i>
							</span>
						</a>
					</li>
					<li>
						<a href="#">
							Projects{' '}
							<span>
								<i class="fas fa-caret-down"></i>
							</span>
						</a>
					</li>
					<li>
						<a href="#">
							Filters{' '}
							<span>
								<i class="fas fa-caret-down"></i>
							</span>
						</a>
					</li>
					<li>
						<a href="#">
							DashBoard{' '}
							<span>
								<i class="fas fa-caret-down"></i>
							</span>
						</a>
					</li>
					<li>
						<a href="#">
							People{' '}
							<span>
								<i class="fas fa-caret-down"></i>
							</span>
						</a>
					</li>
					<li>
						<a href="#">
							App{' '}
							<span>
								<i class="fas fa-caret-down"></i>
							</span>
						</a>
					</li>
					<li>
						<button className="button-creat">Creat</button>
					</li>
				</ul>
			</div>

			<div className="navbar-left">
				<ul>
					<li>
						<input type="text" placeholder="Searh bar" className="search-bar" />
					</li>
					<li>
						<a href="#">
							<i id="icon" class="fas fa-bell"></i>
						</a>
					</li>
					<li>
						<a href="#">
							<i id="icon" class="fas fa-question-circle"></i>
						</a>
					</li>
					<li>
						<a href="#">
							<i id="icon" class="fas fa-cog"></i>
						</a>
					</li>
					<li>
						<a href="">
							{' '}
							<img src={profile} className="profile" alt="profile" />
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default NavBar;
