import { useQuery, gql, useSubscription } from "@apollo/client";
import UserAvatar from "./UserAvatar";
import CreateUser from "./CreateUser";

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

	const {
		loading: queryLoading,
		error: queryError,
		data: queryData,
		refetch,
	} = useQuery(GET_USERS);

	if (queryLoading) return <p>Loading...</p>;
	if (queryError) return <p>Error :( Because: {queryError.message}</p>;

	return (
		<div className='container flex max-w-2xl min-w-fit flex-row flex-wrap intems-center pb-16'>
			<div className=' lg:w-1/3 p-4 text-center inline hover:scale-105  bg-gray-400 rounded-full'>
				<CreateUser refetch={refetch} />
			</div>
			{queryData?.users?.map((user) => (
				<div
					key={user.id}
					className='lg:w-1/3 p-4 text-center inline hover:scale-105  bg-gray-400 rounded-full'
					onClick={() => selectUser(user)}>
					<UserAvatar user={user} />
				</div>
			))}
		</div>
	);
}
