import { Layout, Menu, theme } from "antd";

export default function NavBar() {
	type ItemType = {
		key: string;
		label: string;
		href: string;
	};

	const { Header } = Layout;
	const items: ItemType[] = [
		{ key: "1", label: "Home", href: "/" },
		{ key: "2", label: "Users", href: "/users" },
	];
	return (
		<Header>
			<div className='logo' />
			<Menu
				theme='dark'
				mode='horizontal'
				defaultSelectedKeys={["2"]}
				items={items}
			/>
		</Header>
	);
}
