import ReactDOM from "react-dom";
import {
	Overlay,
	Inner,
	Close,
	GroupButton,
	Button,
} from "./styles/modal.styles";

const Modal = ({ children, showModal, setShowModal }) => {
	return showModal
		? ReactDOM.createPortal(
				<Overlay>
					<Inner>
						{children}
						<Close onClick={() => setShowModal(false)}>
							<i className="fas fa-times-circle"></i>
						</Close>
					</Inner>
				</Overlay>,
				document.body
		  )
		: null;
};

Modal.GroupButton = function ModalGroupButton({ children, ...restProps }) {
	return <GroupButton {...restProps}>{children}</GroupButton>;
};

Modal.Button = function ModalButton({ children, ...restProps }) {
	return <Button {...restProps}>{children}</Button>;
};

export default Modal;
