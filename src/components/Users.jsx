import { useQuery, gql } from "@apollo/client";
import UserAvatar from "./UserAvatar";

// import CreateUser from "./CreateUser";

export default function Users({ selectUser }) {
	const GET_USERS = gql`
		query {
			users {
				id
				name
				email
				postsCount
			}
		}
	`;
	const { loading, error, data } = useQuery(GET_USERS);
	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error :( Because: {error.message}</p>;
	console.log(data.users);
	return (
		<div className='container flex flex-wrap intems-center pb-16'>
			{data.users.map((user) => (
				<div
					key={user.id}
					className='lg:w-1/3 w-full p-4 text-center inline'
					// onClick={selectUser.bind(this, user.id)}
				>
					<UserAvatar user={user} />
				</div>
			))}
		</div>
	);
}
