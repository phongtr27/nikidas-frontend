import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { apiUrl, HOME, SIGNUP } from "../../constants/routes";
import { Form } from "../../components";
import { UserContext } from "../../context/user";
import jwt_decode from "jwt-decode";
import { toast } from "react-toastify";

const SignIn = () => {
	const navigate = useNavigate();

	const { setUser } = useContext(UserContext);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			const response = await fetch(`${apiUrl}/api/auth`, {
				method: "POST",
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ email, password }),
			});

			if (response.status >= 400) {
				const { message } = await response.json();
				toast.error(message);
				return;
			}

			const { token } = await response.json();
			localStorage.setItem("token", token);
			setUser(jwt_decode(token));
			navigate(HOME);
		} catch (err) {
			toast.error("Internal Server Error.");
		}
	};

	return (
		<Form bg="./images/backgrounds/login-register.jpeg">
			<Form.SmallContainer>
				<Form.Title>Log In</Form.Title>

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
						border_radius="20px"
					>
						Log In
					</Form.Button>
				</Form.Base>

				<Form.Text>
					Don't have an account?{" "}
					<Form.Link to={SIGNUP}>Sign Up</Form.Link>
				</Form.Text>
			</Form.SmallContainer>
		</Form>
	);
};

export default SignIn;
