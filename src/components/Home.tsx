import { useQuery, gql } from "@apollo/client";

type Location = {
	id: string;
	name: string;
	description: string;
	photo: string;
};

type Locations = Location[];

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
	function DisplayLocations(): JSX.Element[] | null {
		const { loading, error, data } = useQuery<{ locations: Locations }>(
			GET_LOCATIONS
		);

		if (loading) return <p>Loading</p>;
		if (error) return <p>Error : {error.message}</p>;

		return (
			data?.locations?.map(({ id, name, description, photo }) => (
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
			)) || null
		);
	}
	return (
		<div className='container'>
			<h1>Home</h1>
			<h2>My first Apollo app 🚀</h2>

			{<DisplayLocations />}
		</div>
	);
}
