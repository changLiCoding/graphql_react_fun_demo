import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { BrowserRouter } from "react-router-dom";

import "./index.css";

// const client = new ApolloClient({
// 	uri: "https://flyby-router-demo.herokuapp.com/",
// 	cache: new InMemoryCache(),
// });
const client = new ApolloClient({
	uri: "http://localhost:3000/graphql",
	cache: new InMemoryCache(),
});
const root = document.getElementById("root");
if (root) {
	ReactDOM.createRoot(root).render(
		<React.StrictMode>
			<BrowserRouter>
				<ApolloProvider client={client}>
					<App />
				</ApolloProvider>
			</BrowserRouter>
		</React.StrictMode>
	);
}
