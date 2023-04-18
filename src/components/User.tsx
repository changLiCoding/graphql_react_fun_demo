import { Fragment } from "react";
import { useQuery, gql } from "@apollo/client";
import UserAvatar from "./UserAvatar";
import { Button } from "antd";
import Posts from "./Posts";
const GET_USER = gql`
	query User($id: ID!) {
		userById(id: $id) {
			id
			name
			email
			posts {
				id
				title
				body
			}
		}
	}
`;
const GET_POSTS = gql`
	query Post {
		posts {
			id
			title
			body
		}
	}
`;
function User({ selectUser, user }) {
	const { loading, error, data } = useQuery(GET_USER, {
		variables: { id: user.id },
	});
	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error :( Because: {error.message}</p>;
	console.log(data);
	return (
		<Fragment>
			<div className='flex flex-wrap my-4'>
				<Button
					onClick={() => {
						selectUser(null);
					}}>
					Back
				</Button>
			</div>
			<div className='flex flex-wrap items-start mb-4'>
				<div className='lg:w-1/4 w-full round text-center '>
					<UserAvatar user={user} />
				</div>
				<div className='pox-4 flex-1 w-full'>
					<Posts
						posts={data.userById.posts}
						user={user}
					/>
				</div>
			</div>
		</Fragment>
	);
}

export default User;
