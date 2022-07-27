import { useSelector, useDispatch } from "react-redux";
import { DeleteConfirmWrap } from "./Style";
import { handleDeleteConfirmationModal } from '../../../store/tags/actionCreator';

function DeleteConfirm() {

    /* Dispasth is used for passing the actions to redux store  */
    const dispatch = useDispatch();

    /* initialize Form Data */
    const { modalOpen } = useSelector(state => {
        return {
            modalOpen: state.tags.deleteConversation,
        };
    });

    /* Handle Modal Close */
    const handleCloseModal = (event) => {
        event.preventDefault();
        dispatch(handleDeleteConfirmationModal(false));
    }

    return (
        <DeleteConfirmWrap className={modalOpen ? "wpax-vm-delete-conf-modal wpwax-vm-modal wpwax-vm-show" : "wpax-vm-delete-conf-modal wpwax-vm-modal"}>
            <div className="wpwax-vm-modal__body">
                <div className="wpwax-vm-delete-icon">
                    <span className="dashicons dashicons-trash"></span>
                </div>
                <p>Are you sure you want to delete this conversation?</p>
            </div>

            <div className="wpwax-vm-modal__footer">
                <a href="#" className="wpwax-vm-btn wpwax-vm-btn-sm wpwax-vm-btn-gray" onClick={handleCloseModal}>Cancel</a>
                <a href="#" className="wpwax-vm-btn wpwax-vm-btn-sm wpwax-vm-btn-danger" onClick={handleCloseModal}>Delete</a>
            </div>
        </DeleteConfirmWrap>
    );
}

export default DeleteConfirm;