import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";

import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Users from "./components/Users";
import User from "./components/User";

function App() {
	const [user, setUser] = useState(null);
	return (
		<div className='container mx-auto px-4'>
			<NavBar></NavBar>
			<Routes>
				<Route
					path='/'
					element={<Home />}
				/>
				<Route
					path='users'
					element={
						user ? (
							<User
								user={user}
								selectUser={setUser}
							/>
						) : (
							<Users selectUser={setUser} />
						)
					}
				/>
			</Routes>
		</div>
	);
}

export default App;
