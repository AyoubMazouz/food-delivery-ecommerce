// React Imports.
import React from "react"
import { useNavigate } from "react-router-dom"
// Contexts Imports.
import { useAuth } from "../contexts/AuthContext"

const LogIn = () => {
	const { logIn } = useAuth()

	const navigate = useNavigate()

	const [userValue, setUserValue] = React.useState("")
	const [pwdValue, setPwdValue] = React.useState("")

	const onSubmit = (e) => {
		e.preventDefault()
		logIn(userValue, pwdValue)
			.then((res) => {
				console.log(res)
				navigate("/admin/items")
			})
			.catch((err) => {
				console.log(err)
				navigate("/failed-to-login")
			})
	}

	return (
		<div>
			<form onSubmit={onSubmit}>
				<div>
					<label htmlFor="user">User</label>
					<input
						type="text"
						name="user"
						required
						value={userValue}
						onChange={(e) => setUserValue(e.target.value)}
					/>
				</div>
				<div>
					<label htmlFor="pwd">Password</label>
					<input
						type="password"
						name="pwd"
						required
						value={pwdValue}
						onChange={(e) => setPwdValue(e.target.value)}
					/>
				</div>
				<button type="submit">submit</button>
			</form>
		</div>
	)
}

export default LogIn
