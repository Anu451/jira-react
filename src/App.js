import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import SideBar from './components/SideBar';
import Path from './components/Path';
import Discription from './components/Discription';
import Attach1 from './components/Attach1';
import Activity from './components/Activity';
import Comment from './components/Comment';

function App() {
	return (
		<div className="App">
			<NavBar></NavBar>
			<div className="content">
				<SideBar></SideBar>
				<div className="content-path">
					<Path></Path>
					<Attach1></Attach1>
					<Discription></Discription>
					<Activity></Activity>
					<Comment></Comment>
				</div>
			</div>
		</div>
	);
}

export default App;
