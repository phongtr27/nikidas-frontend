import { useState, useContext } from "react";
import { apiUrl, SIGNIN } from "../../constants/routes";
import { Form } from "../../components";
import { UserContext } from "../../context/user";
import jwt_decode from "jwt-decode";

const SignUp = () => {
	const { setUser } = useContext(UserContext);
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState(null);

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
			setError(message);
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
				{error ? <Form.Error>{error}</Form.Error> : null}
				<Form.SigninForm onSubmit={handleSubmit}>
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
					>
						Sign Up
					</Form.Button>
				</Form.SigninForm>
				<Form.Text>
					Already have an account?{" "}
					<Form.Link to={SIGNIN}>Sign In</Form.Link>
				</Form.Text>
			</Form.SmallContainer>
		</Form>
	);
};

export default SignUp;
