import { useDispatch } from "react-redux";
import { ReactSVG } from 'react-svg';
import Dropdown from "../../../../../../../lib/components/formFields/Dropdown.jsx";
import MediaBox from "../../../../../../../lib/components/MediaBox";
import userImg from "../../../../../assets/img/chatdashboard/user.png";
import ellipsisH from '../../../../../assets/svg/icons/ellipsis-h.svg';
import envelopeOpen from '../../../../../assets/svg/icons/envelope-open.svg';
import filterIcon from '../../../../../assets/svg/icons/filter.svg';
import magnifier from '../../../../../assets/svg/icons/magnifier.svg';
import rotateIcon from '../../../../../assets/svg/icons/rotate-right.svg';
import tag from '../../../../../assets/svg/icons/tag.svg';
import trash from '../../../../../assets/svg/icons/trash.svg';
import SidebarWrap from "./Style";

function Sidebar() {

	const dispatch = useDispatch();

	// function clickHandler(e) {
	// 	e.preventDefault();
	// 	dispatch(displayChatBox());
	// }

	// const filterDropdown = [
	// 	"Read",
	// 	"Unread",
	// 	"Latest",
	// 	"Oldest",
	// ];
	const filterDropdown = [
		{
			icon: "",
			text: "Read"
		},
		{
			icon: "",
			text: "Unread"
		},
		{
			icon: "",
			text: "Latest"
		},
		{
			icon: "",
			text: "Oldest"
		},
	];
	// const moreDropdown = [
	// 	"Mark as unread",
	// 	"Add tags",
	// 	"Delete Conversation",
	// ];
	const moreDropdown = [
		{
			icon: envelopeOpen,
			text: "Mark as unread"
		},
		{
			icon: tag,
			text: "Add tags"
		},
		{
			icon: trash,
			text: "Delete Conversation"
		},
	];
	const metaList = [
		{
			type: "date",
			text: "19 Jan 22 @ 08:38"
		}
	];

	return (
		<SidebarWrap>
			<div className="wpwax-vm-sidebar-top">
				<h3 className="wpwax-vm-sidebar-title">List off Messlgjghjghjages</h3>
				<a href="#" className="wpwax-vm-sidebar-refresher"><ReactSVG src={rotateIcon} /></a>
			</div>
			<div className="wpwax-vm-sidebar-search">
				<div className="wpwax-vm-form-group wpwax-vm-icon-left">
					<span className="dashicons dashicons-search"></span>
					<input type="text" className="wpwax-vm-form__element" placeholder="Search" />
				</div>
			</div>
			<div className="wpwax-vm-sidebar-filter">
				<div className="wpwax-vm-sidebar-search">
					<div className="wpwax-vm-form-group wpwax-vm-form-icon-left">
						<div className="wpwax-vm-input-icon"><ReactSVG src={ magnifier } /></div>
						<input type="text" className="wpwax-vm-form__element" id="wpwax-vm-filter-search" placeholder="Search"/>
					</div>
				</div>
				<Dropdown dropdownText={true} textIcon={filterIcon} dropdownIcon={ellipsisH} dropdownList={filterDropdown} dropdownWidth="full"/>
			</div>
			<div className="wpwax-vm-sidebar-userlist">
				<ul>
					<li className="wpwax-vm-usermedia">
						<div className="wpwax-vm-usermedia__left">
							<MediaBox img={userImg} title={"Adnan"} metaList={ metaList } />
						</div>
						<div className="wpwax-vm-usermedia__right">
							<span className="wpwax-vm-usermedia-status"></span>
							<Dropdown dropdownText={ false } dropdownIcon={ellipsisH} dropdownList={moreDropdown} dropdownWidth="fixed"/>
							{/* <div className="wpwax-vm-dropdown wpwax-vm-dropdown-left">
								<a href="#" className="wpwax-vm-dropdown__toggle">
									<ReactSVG src={ ellipsisH } />
								</a>
								<ul className="wpwax-vm-dropdown__content">
									<li><a href="#">Mark as unread</a></li>
									<li><a href="#">Add tags</a></li>
									<li><a href="#">Delete conversation</a></li>
								</ul>
							</div> */}
						</div>
					</li>
				</ul>
			</div>
		</SidebarWrap>
	);
}

export default Sidebar;