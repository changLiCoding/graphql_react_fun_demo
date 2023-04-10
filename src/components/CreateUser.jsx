import { gql } from "@apollo/client";
import { useMutation } from "@apollo/client";

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
function CreateUser() {
	const [state, setState] = useState({
		name: "",
		email: "",
	});
	const handleSubmit = (e) => {
		e.preventDefault();
		createUser({ variables: { name: state.name, email: state.email } });
	};
	return <div></div>;
}

export default CreateUser;
