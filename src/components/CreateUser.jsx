import { useMutation, gql } from "@apollo/client";
import { Button } from "antd";
import { useState } from "react";

const CREATE_USER = gql`
	mutation CreateUser($name: String!, $email: String!) {
		createUser(input: { name: $name, email: $email }) {
			user {
				id
				name
				email
				postsCount
			}
		}
	}
`;
function CreateUser({ refetch }) {
	const [createUser, { data, loading, error }] = useMutation(CREATE_USER);

	const [state, setState] = useState({
		name: "",
		email: "",
	});
	const handleSubmit = async (e) => {
		e.preventDefault();
		await createUser({ variables: { name: state.name, email: state.email } });
		console.log(data);
		refetch();
	};
	return (
		<div className='w-full border-t border-gray-300'>
			<form
				className='lg:px-8 pt-2 pb-2'
				onSubmit={handleSubmit}>
				<div className='lg:flex flex-wrap flex-between items-center justify-center lg:p-0 p-6'>
					<h4 className='font-bold lg:pr-4 mb-2'>Create New User</h4>
					<div className='lg:pr-4 mb-2'>
						<input
							type='text'
							value={state.name}
							onChange={(e) => setState({ ...state, name: e.target.value })}
						/>
					</div>
					<div className='lg:pr-4 mb-2'>
						<input
							type='text'
							value={state.email}
							onChange={(e) => setState({ ...state, email: e.target.value })}
						/>
					</div>
				</div>

				<Button
					type='primary'
					htmlType='submit'>
					Create User
				</Button>
			</form>
		</div>
	);
}

export default CreateUser;
