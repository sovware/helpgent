import { combineReducers } from 'redux';
import video from './video/reducers';
import chatbox from './chatbox/reducers';
import chatboxTemplate from './chatboxTemplate/reducer';

import messengerForm from './forms/messenger/reducer';
import attachmentForm from './forms/attachment/reducer';
import userForm from './forms/user/reducer';

const rootReducers = combineReducers({
  video,
  chatbox,
  chatboxTemplate,
  messengerForm,
  attachmentForm,
  userForm,
});
  
export default rootReducers;