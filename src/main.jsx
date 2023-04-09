import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {
	ApolloClient,
	InMemoryCache,
	ApolloProvider,
	gql,
} from "@apollo/client";

import "./index.css";

const client = new ApolloClient({
	uri: "https://flyby-router-demo.herokuapp.com/",
	cache: new InMemoryCache(),
});

const users = new ApolloClient({
	uri: "http://127.0.0.1:3000/graphiql",
	cache: new InMemoryCache(),
});

client
	.query({
		query: gql`
			query GetLocations {
				locations {
					id
					name
					description
					photo
				}
			}
		`,
	})
	.then((result) => console.log(result.data.locations));

users
	.query({
		query: gql`
			query GetAllUsers {
				users {
					id
					name
					email
					posts {
						id
						title
						body
						user {
							name
						}
					}
				}
			}
		`,
	})
	.then((result) => console.log(result.data));

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
