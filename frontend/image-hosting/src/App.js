import React from 'react'
import Menu from './components/Menu'
import Upload from './pages/Upload'
import Manage from './pages/Manage'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { Layout } from 'antd'
function App() {
	return (
		<Layout>
			<Router>
				<Menu></Menu>
				<Routes>
					<Route path="/upload" element={<Upload />} />
					<Route path="/manage" element={<Manage />} />
				</Routes>
			</Router>
		</Layout>
	)
}

export default App
