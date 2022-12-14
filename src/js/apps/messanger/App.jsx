import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useCoreData } from '../../helpers/hooks/useCoreData.jsx';
import MessageBox from './components/message-box/Index.jsx';
import { ThemeProvider } from "styled-components";
import Sidebar from './components/sidebar/Index.jsx';
import { handleChangeLayoutDirection } from './store/layoutModes/actionCreator.js';
import { find } from 'Helper/utils.js';

import ChatDashboardWrap from './Style';

function App() {

    /* Dispasth is used for passing the actions to redux store  */
	const dispatch = useDispatch();

    /* initialize Form Data */
    const { dir, modalOverlay } = useSelector((state) => {
        return {
            dir: state.changeLayout.dir,
            modalOverlay: state.tags.modalOverlay,
        };
    });

    /* Initialize State */
    const [sessionState, setSessionState] = useState({
        sessionList: [],
        totalUnredConversations: null,
        filteredSessions: [],
        asignedTerms: [],
        serverAssigned: [],
        unAsignedTerms: [],
        activeSessionId: '',
        deleteModalOpen: false,
        tagListModalOpen: false,
        successMessage: '',
        deleteTerm: '',
        rejectMessage: '',
        editableTermId: '',
        sessionFilterDropdown: false,
        tagFilterDropdownOpen: false,
        taglistWithSession: false,
        hasMore: true,
        loader: true,
		currentUser: useCoreData( 'current_user' ),
		isCurrentUserAdmin: useCoreData( 'current_user.is_admin' ) ? true : false
    });

    const theme = {
		direction: dir
	}

	useEffect(() => {
		if(document.documentElement.getAttribute('dir') === 'rtl'){
			dispatch(handleChangeLayoutDirection('rtl'));
		}else{
			dispatch(handleChangeLayoutDirection('ltr'));
		}
    }, []);

	const extractTotalUnread = ( response ) => {
		let totalUnredConversations = find( 'headers.x-wp-total-unread', response, null );

		if ( null === totalUnredConversations ) {
			return totalUnredConversations;
		}

		return parseInt( totalUnredConversations );
	}

    return (
        <ThemeProvider theme={theme}>
            <ChatDashboardWrap>
                <div className='wpwax-vm-sidebar'>
                    <Sidebar
                        sessionState={sessionState}
                        setSessionState={setSessionState}
						extractTotalUnread={extractTotalUnread}
                    />
                </div>

                <div className='wpwax-vm-messagebox'>
                    <MessageBox
                        sessionState={sessionState}
                        setSessionState={setSessionState}
                        extractTotalUnread={extractTotalUnread}
                    />
                </div>

                {/* <span className={modalOverlay ? "wpax-vm-overlay wpwax-vm-show" : "wpax-vm-overlay"}></span> */}
                <span className='wpax-vm-overlay'></span>
            </ChatDashboardWrap>
        </ThemeProvider>
    );
}

export default App;
