const actions = {
    TAG_LIST_MODAL_UPDATE_BEGIN: 'TAG_LIST_MODAL_UPDATE_BEGIN',
    TAG_LIST_MODAL_UPDATE_SUCCESS: 'TAG_LIST_MODAL_UPDATE_SUCCESS',
    TAG_LIST_MODAL_UPDATE_ERR: 'TAG_LIST_MODAL_UPDATE_ERR',

    SET_SESSION_BEGIN: 'SET_SESSION_BEGIN',
    SET_SESSION_SUCCESS: 'SET_SESSION_SUCCESS',
    SET_SESSION_ERR: 'SET_SESSION_ERR',

    TAG_EDIT_BEGIN: 'TAG_EDIT_BEGIN',
    TAG_EDIT_SUCCESS: 'TAG_EDIT_SUCCESS',
    TAG_EDIT_ERR: 'TAG_EDIT_ERR',

    TAG_FORM_MODAL_UPDATE_BEGIN: 'TAG_FORM_MODAL_UPDATE_BEGIN',
    TAG_FORM_MODAL_UPDATE_SUCCESS: 'TAG_FORM_MODAL_UPDATE_SUCCESS',
    TAG_FORM_MODAL_UPDATE_ERR: 'TAG_FORM_MODAL_UPDATE_ERR',

    DELETE_CONFIRMATION_MODAL_BEGIN: 'DELETE_CONFIRMATION_MODAL_BEGIN',
    DELETE_CONFIRMATION_MODAL_SUCCESS: 'DELETE_CONFIRMATION_MODAL_SUCCESS',
    DELETE_CONFIRMATION_MODAL_ERR: 'DELETE_CONFIRMATION_MODAL_ERR',
  
    tagListModalUpdatenBegin: () => {
      return {
        type: actions.TAG_LIST_MODAL_UPDATE_BEGIN,
      };
    },
  
    tagListModalUpdateSuccess: status => {
      return {
        type: actions.TAG_LIST_MODAL_UPDATE_SUCCESS,
        status,
      };
    },
  
    tagListModalUpdateError: err => {
      return {
        type: actions.TAG_LIST_MODAL_UPDATE_ERR,
        err,
      };
    },
  
    tagEditBegin: () => {
      return {
        type: actions.TAG_EDIT_BEGIN,
      };
    },
  
    tagEditSuccess: status => {
      return {
        type: actions.TAG_EDIT_SUCCESS,
        status,
      };
    },
  
    tagEditError: err => {
      return {
        type: actions.TAG_EDIT_ERR,
        err,
      };
    },
    setSessionBegin: () => {
      return {
        type: actions.SET_SESSION_BEGIN,
      };
    },
  
    setSessionSuccess: status => {
      return {
        type: actions.SET_SESSION_SUCCESS,
        status,
      };
    },
  
    setSessionError: err => {
      return {
        type: actions.SET_SESSION_ERR,
        err,
      };
    },

    tagFormModalUpdatenBegin: () => {
      return {
        type: actions.TAG_FORM_MODAL_UPDATE_BEGIN,
      };
    },
  
    tagFormModalUpdateSuccess: status => {
      return {
        type: actions.TAG_FORM_MODAL_UPDATE_SUCCESS,
        status,
      };
    },
  
    tagFormModalUpdateError: err => {
      return {
        type: actions.TAG_FORM_MODAL_UPDATE_ERR,
        err,
      };
    },

    deleteConfirmationBegin: () => {
      return {
        type: actions.DELETE_CONFIRMATION_MODAL_BEGIN,
      };
    },
  
    deleteConfirmationSuccess: status => {
      return {
        type: actions.DELETE_CONFIRMATION_MODAL_SUCCESS,
        status,
      };
    },
  
    deleteConfirmationError: err => {
      return {
        type: actions.DELETE_CONFIRMATION_MODAL_ERR,
        err,
      };
    },
  };
  
  export default actions;
  