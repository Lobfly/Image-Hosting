import { Layout, Menu } from 'antd'
import { Link } from 'react-router-dom'
const { Sider } = Layout
export default function sider() {
	const options = ['上传图片', '图片管理']
	const routes = ['/upload', '/manage']
	const MenuItem = options.map((item, index) => {
		return (
			<Menu.Item key={index}>
				<Link to={routes[index]}>{item}</Link>
			</Menu.Item>
		)
	})
	return (
			<Sider>
				<Menu className="menuSider">{MenuItem}</Menu>
			</Sider>
	)
}
