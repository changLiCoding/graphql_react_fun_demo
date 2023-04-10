import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Users from "./components/Users";

function App() {
	return (
		<div className='container mx-auto px-4'>
			<NavBar></NavBar>
			{/* <Home /> */}
			<Users />
		</div>
	);
}

export default App;
