import { Fragment } from "react";
import Gravatar from "react-gravatar";

function UserAvatar({ user }) {
	return (
		<Fragment>
			<Gravatar
				email={user.email}
				size={100}
				className='rounded-full text-center inline'
			/>
			<div className='px-6 py-4'>
				<div className='font-bold text-xl mb-2'>{user.name}</div>
				<p className='text-gray-700 text-base'>{user.email}</p>
				<p className='text-gray-700 text-base'>{user.postsCount}</p>
			</div>
		</Fragment>
	);
}

export default UserAvatar;
