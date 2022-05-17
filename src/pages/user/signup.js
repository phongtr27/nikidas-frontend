import { useState, useContext } from "react";
import { apiUrl, LOGIN } from "../../constants/routes";
import { Form } from "../../components";
import { UserContext } from "../../context/user";
import jwt_decode from "jwt-decode";
import { toast } from "react-toastify";

const SignUp = () => {
	const { setUser } = useContext(UserContext);
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();

		const data = { name, email, password };
		const response = await fetch(`${apiUrl}/api/user`, {
			method: "POST",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		});

		if (response.status >= 400) {
			const { message } = await response.json();
			toast.error(message);
			return;
		}

		const { token } = await response.json();
		localStorage.setItem("token", token);
		setUser(jwt_decode(token));
	};

	return (
		<Form bg="./images/backgrounds/login-register.jpeg">
			<Form.SmallContainer>
				<Form.Title>Sign Up</Form.Title>

				<Form.Base onSubmit={handleSubmit}>
					<Form.Input
						type="text"
						placeholder="Name"
						onChange={({ target }) => setName(target.value)}
					/>
					<Form.Input
						type="text"
						placeholder="Email Address"
						onChange={({ target }) => setEmail(target.value)}
					/>
					<Form.Input
						type="password"
						placeholder="Password"
						onChange={({ target }) => setPassword(target.value)}
					/>
					<Form.Button
						type="submit"
						disabled={
							name === "" || email === "" || password === ""
						}
						border_radius="20px"
					>
						Sign Up
					</Form.Button>
				</Form.Base>
				<Form.Text>
					Already have an account?{" "}
					<Form.Link to={LOGIN}>Log In</Form.Link>
				</Form.Text>
			</Form.SmallContainer>
		</Form>
	);
};

export default SignUp;
