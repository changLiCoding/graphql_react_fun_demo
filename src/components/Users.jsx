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
	const NEW_USER_SUBSCRIPTION = gql`
		subscription onUser {
			user {
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
	} = useQuery(GET_USERS);

	const { data: subData, error: subError } = useSubscription(
		NEW_USER_SUBSCRIPTION,
		{
			onData: ({ subscriptionData }) => {
				console.log(subscriptionData);
			},
		}
	);

	if (queryLoading) return <p>Loading...</p>;
	if (queryError) return <p>Error :( Because: {error.message}</p>;

	console.log(subData);

	return (
		<div className='container flex max-w-2xl min-w-fit flex-row flex-wrap intems-center pb-16'>
			<div className='lg:m-4 lg:w-1/4 w-full rounded shadow-lg'>
				<CreateUser />
			</div>
			{queryData?.users?.map((user) => (
				<div
					key={user.id}
					className='lg:w-1/3 p-4 text-center inline hover:scale-105  bg-gray-400 rounded-full'
					onClick={() => selectUser(user)}>
					<UserAvatar user={user} />
				</div>
			))}
			{subData?.user && (
				<div
					key={subData.user.id}
					className='lg:w-1/3 p-4 text-center inline hover:scale-105  bg-gray-400 rounded-full'
					onClick={() => selectUser(subData.user)}>
					<UserAvatar user={subData.user} />
				</div>
			)}
		</div>
	);
}
