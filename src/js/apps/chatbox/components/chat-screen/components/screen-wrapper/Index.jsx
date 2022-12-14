import { useDispatch } from "react-redux";
// import { ReactSVG } from "react-svg";
import ReactSVG from 'react-inlinesvg';
import { hideChatbox } from '../../../../store/chatbox/actionCreator.js';
import { useResetStore } from "../../../../store/reset.js";
import crossSmall from 'Assets/svg/icons/cross-small.svg';
import ScreenWrapper from "./Style";

function Container( props ) {
	const { doAction } = wpwaxHooks;

	const dispatch   = useDispatch();
	const resetStore = useResetStore();

	function handleClose() {

		doAction( 'beforeCloseChatbox' );

		resetStore();
		dispatch( hideChatbox() );
	}


	const getContainerClassNames = () => {
		let classNames = `wpwax-vm-chatbox-screen-${props.screenName} wpwax-vm-chatbox-screen`;

		if ( props.staticContainer ) {
			classNames += ' helpgent-static-container'
		}

		return classNames;
	}

	return (
		<ScreenWrapper className={getContainerClassNames()} style={{ display: ( props.show ) ? 'block' : 'none' }}>
			<div className="wpwax-vm-chatbox-container">
				<div className="wpwax-vm-chatbox-btnlist">
					<button onClick={handleClose} className="wpwax-vm-chatbox-btn-close">
						<ReactSVG src={crossSmall} />
					</button>
				</div>

				<div className="wpwax-vm-h-100pr">{ props.children }</div>
			</div>
		</ScreenWrapper>
	);
}

export default Container;
