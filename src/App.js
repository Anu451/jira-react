import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import SideBar from './components/SideBar';
import Path from './components/Path';
import Activity from './components/Attach';
import Discription from './components/Discription';

function App() {
	return (
		<div className="App">
			<NavBar></NavBar>
			<div className="content">
				<SideBar></SideBar>
				<div className="content-path">
					<Path></Path>
					<Activity></Activity>
					<Discription></Discription>
				</div>
			</div>
		</div>
	);
}

export default App;
