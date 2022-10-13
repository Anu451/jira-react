import './App.css';
import NavBar from './components/NavBar';
import SideBar from './components/SideBar';
import Path from './components/Path';
import Discription from './components/Discription';
import Attach1 from './components/Attach1';
import Activity from './components/Activity';
import Comment from './components/Comment';
import Icons from './components/Icons';
import Todo from './components/Todo';
import Pin from './components/Pin';
import Details from './components/Details';

function App() {
	return (
		<div className="App">
			<NavBar></NavBar>
			<div className="content-sidebar">
				<div className="side">
					<SideBar></SideBar>
				</div>

				<div className="content">
					<div className="content-right">
						<Path></Path>
						<Attach1></Attach1>
						<Discription></Discription>
						<Activity></Activity>
						<Comment></Comment>
					</div>

					<div className="content-left">
						<Icons></Icons>
						<Todo />
						<Pin />
						<Details />
					</div>
				</div>
				{/* 
				<div className="content-path">
					<Path></Path>
					<Attach1></Attach1>
					<Discription></Discription>
					<Activity></Activity>
					<Comment></Comment>
				</div>

				<div className="todo">
					<Icons />
				</div> */}
			</div>
		</div>
	);
}

export default App;
