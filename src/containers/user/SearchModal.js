import { Modal, Form } from "../../components";

const SearchModal = ({ showSearchModal, setShowSearchModal }) => {
	return (
		<Modal
			showModal={showSearchModal}
			setShowModal={setShowSearchModal}
			topPosition={true}
			displayNormal
		>
			<Form.Input
				type="text"
				name="search"
				id="search"
				placeholder="Search here..."
			/>
			<Form.Text>hello</Form.Text>
		</Modal>
	);
};

export default SearchModal;
