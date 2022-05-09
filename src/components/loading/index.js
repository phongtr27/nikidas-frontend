import {
	Container,
	Spinner,
	LockBody,
	ReleaseBody,
} from "./styles/loading.styles";

const Loading = () => {
	return (
		<Container>
			<LockBody />
			<Spinner></Spinner>
		</Container>
	);
};

Loading.ReleaseBody = function LoadingReleaseBody() {
	return <ReleaseBody />;
};

export default Loading;
