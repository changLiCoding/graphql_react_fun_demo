import { Fragment } from "react";
function Posts({ posts, user }) {
	return (
		<Fragment>
			<div className='lg:pl-10'>
				<h1 className='text-2xl font-bold text-gray-900'>
					Posts from {user.name}
				</h1>
				{posts.map((post) => {
					return (
						<div key={post.id}>
							<div className='p-6 shadow rounded-lg bg-white'>
								<h3 className='text-xl font-bold text-gray-900'>
									{post.title}
								</h3>
								<p className='text-gray-700 text-base'>{post.body}</p>
							</div>
						</div>
					);
				})}
			</div>
		</Fragment>
	);
}

export default Posts;
