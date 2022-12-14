import actions from "./actions";
import useAttachmentAPI from "API/useAttachmentAPI";

const {
    updateFormData,
    submitFormBegain,
    submitFormSuccess,
    submitFormError,
    reset,
} = actions;

const { createItem: createAttachment } = useAttachmentAPI();

const submitForm = ( formData ) => {
    return async dispatch => {
        dispatch( submitFormBegain() );
		let response = await createAttachment( formData );

		if ( ! response.success ) {
			dispatch( submitFormError( response.data ) );
			return;
		}

		dispatch( submitFormSuccess( response.data ) );
    }
};

export { updateFormData, submitForm, reset };