import { useQuery, gql } from "@apollo/client";

export default function Home() {
	const GET_LOCATIONS = gql`
		query GetLocations {
			locations {
				id
				name
				description
				photo
			}
		}
	`;
	function DisplayLocations() {
		const { loading, error, data } = useQuery(GET_LOCATIONS);

		if (loading) return <p>Loading...</p>;
		if (error) return <p>Error : {error.message}</p>;

		return data.locations.map(({ id, name, description, photo }) => (
			<div key={id}>
				<h3>{name}</h3>
				<img
					width='400'
					height='250'
					alt='location-reference'
					src={`${photo}`}
				/>
				<br />
				<b>About this location:</b>
				<p>{description}</p>
				<br />
			</div>
		));
	}
	return (
		<div className='container'>
			<h1>Home</h1>
			<h2>My first Apollo app 🚀</h2>

			<DisplayLocations />
		</div>
	);
}
