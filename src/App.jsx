import React, { useState } from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Users from "./components/Users";
import User from "./components/User";

function App() {
	const [user, setUser] = useState(null);
	return (
		<div className='container mx-auto px-4'>
			<NavBar></NavBar>
			{/* <Home /> */}
			{user ? (
				<User
					user={user}
					selectUser={setUser}
				/>
			) : (
				<Users selectUser={setUser} />
			)}
		</div>
	);
}

export default App;
