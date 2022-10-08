import React from "react"
import { Link } from "react-router-dom"
import Logo from "../../components/Logo"
import { useAuth } from "../../contexts/AuthContext"

const NavBar = () => {
	const { currUser, logOut } = useAuth()
	return (
		<nav className="flex justify-center bg-gray-200">
			<div className="max-w-[1400px] w-full flex justify-between items-center py-3 px-6 ">
				<Logo />
				{currUser ? (
					<ul className="flex gap-x-4">
						<li>
							<Link to="/admin/orders">Orders</Link>
						</li>
						<li>
							<Link to="/admin/items">Items</Link>
						</li>
						<li>
							<Link to="/admin/messages">messages</Link>
						</li>
						<li>
							<Link to="/admin/emails">emails</Link>
						</li>
						<li onClick={logOut}>LogOut</li>
					</ul>
				) : (
					<ul className="flex gap-x-4">
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="about">About</Link>
						</li>
						<li>
							<Link to="/contact">Contact</Link>
						</li>
					</ul>
				)}
			</div>
		</nav>
	)
}

export default NavBar
