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

// const client = new ApolloClient({
// 	uri: "https://flyby-router-demo.herokuapp.com/",
// 	cache: new InMemoryCache(),
// });
const client = new ApolloClient({
	uri: "http://127.0.0.1:3000/graphiql",
	cache: new InMemoryCache(),
});

client
	.query({
		query: gql`
			query {
				users {
					id
					name
					email
				}
			}
		`,
	})
	.then((result) => console.log(result));

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<ApolloProvider client={client}>
			<App />
		</ApolloProvider>
	</React.StrictMode>
);
