// CSS Imports.
import "./App.css"
// React Imports.
import { BrowserRouter, Route, Routes } from "react-router-dom"
// Contexts Imports.
import { AuthProvider } from "./contexts/AuthContext"
// Components Imports.
import PrivateRoute from "./components/PrivateRoute"
import Navbar from "./components/NavBar"

// Pages Imports.
import Page404 from "./pages/Page404"
import LogIn from "./pages/LogIn"
import Items from "./pages/admin/Items"
import Orders from "./pages/admin/Orders"
import Messages from "./pages/admin/Messages"
import Emails from "./pages/admin/Emails"
import Home from "./pages/Home"

const App = () => {
	return (
		<BrowserRouter>
			<AuthProvider>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/login" element={<LogIn />} />
					{/* Private Routes */}
					<Route element={<PrivateRoute />}>
						<Route path="/admin/orders" element={<Orders />} />
						<Route path="/admin/items" element={<Items />} />
						<Route path="/admin/messages" element={<Messages />} />
						<Route path="/admin/emails" element={<Emails />} />
					</Route>
					{/* 404 Page */}
					<Route path="*" element={<Page404 />} />
				</Routes>
			</AuthProvider>
		</BrowserRouter>
	)
}

export default App
