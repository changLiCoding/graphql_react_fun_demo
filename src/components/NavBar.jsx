import { Breadcrumb, Layout, Menu, theme } from "antd";

export default function NavBar() {
	const {
		token: { colorBgContainer },
	} = theme.useToken();

	const { Header } = Layout;
	return (
		<Header>
			<div className='logo' />
			<Menu
				theme='dark'
				mode='horizontal'
				defaultSelectedKeys={["2"]}
				items={[
					{ key: "1", label: "Home", href: "/" },
					{ key: "2", label: "Users", href: "/users" },
				]}
			/>
		</Header>
	);
}
