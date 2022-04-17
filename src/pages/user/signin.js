import { useState, useContext } from "react";
import { apiUrl, SIGNUP } from "../../constants/routes";
import { Form } from "../../components";
import { UserContext } from "../../context/user";
import jwt_decode from "jwt-decode";

const SignIn = () => {
	const { setUser } = useContext(UserContext);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState(null);

	const handleSubmit = async (e) => {
		e.preventDefault();

		const data = { email, password };
		const response = await fetch(`${apiUrl}/api/auth`, {
			method: "POST",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		});

		if (response.status >= 400) {
			const { message } = await response.json();
			setError(message);
			return;
		}

		const { token } = await response.json();
		localStorage.setItem("token", token);
		setUser(jwt_decode(token));
	};

	return (
		<Form bg={`${apiUrl}/public/images/backgrounds/login-register.jpeg`}>
			<Form.SmallForm>
				<Form.Title>Sign In</Form.Title>
				{error ? <Form.Error>{error}</Form.Error> : null}
				<Form.Base onSubmit={handleSubmit}>
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
						disabled={email === "" || password === ""}
					>
						Log In
					</Form.Button>
				</Form.Base>
				<Form.Text>
					Don't have an account?{" "}
					<Form.Link to={SIGNUP}>Sign Up</Form.Link>
				</Form.Text>
			</Form.SmallForm>
		</Form>
	);
};

export default SignIn;
