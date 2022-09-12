import React, { useState, useEffect, useRef } from 'react'
import { ReactSVG } from 'react-svg';
import { useDispatch, useSelector } from 'react-redux';
import InfiniteScroll from "react-infinite-scroll-component";
import Dropdown from "Components/formFields/Dropdown.jsx";
import MediaBox from "Components/MediaBox.jsx";
import Taglist from "./overview/Taglist.jsx";
import AddTag from "./overview/AddTag.jsx";
import DeleteConfirm from "./overview/DeleteConfirm.jsx";
import apiService from 'apiService/Service.js';
import { handleReadSessions } from '../../store/sessions/actionCreator';
import userImg from "Assets/img/chatdashboard/user.png";
import userIcon from "Assets/svg/icons/users.svg";
import ellipsisV from 'Assets/svg/icons/ellipsis-v.svg';
import envelopeOpen from 'Assets/svg/icons/envelope-open.svg';
import filterIcon from 'Assets/svg/icons/filter.svg';
import angleDown from 'Assets/svg/icons/angle-down.svg';
import angleUp from 'Assets/svg/icons/angle-up.svg';
import magnifier from 'Assets/svg/icons/magnifier.svg';
import slider from 'Assets/svg/icons/slider.svg';
import rotateIcon from 'Assets/svg/icons/rotate-right.svg';
import tag from 'Assets/svg/icons/tag.svg';
import trash from 'Assets/svg/icons/trash.svg';
import loaders from 'Assets/svg/icons/loader.svg';
import {SidebarWrap, SessionFilterWrap} from "./Style";
import TagFilter from './overview/TagFilter.jsx';

/* Dropdown Array Item Declaration */
const filterDropdown = [
	{
		name: "filter-read",
		text: "Read"
	},
	{
		name: "filter-unread",
		text: "Unread"
	},
	{
		name: "filter-latest",
		text: "Latest"
	},
	{
		name: "filter-oldest",
		text: "Oldest"
	},
];

function Sidebar() {
	const taglistModalOpen = false;
	const ref = useRef(null);
	/* Initialize State */
	const [sessionState, setSessionState] = useState({
		sessionList: [],
		filteredSessions:[],
		asignedTerms: [],
		serverAssigned:[],
		unAsignedTerms: [],
		activeSessionId: "",
		deleteModalOpen: false,
		tagListModalOpen: false,
		successMessage: "",
		deleteTerm: "",
		rejectMessage: "",
		editableTermId: "",
		sessionFilterDropdown: false,
		tagFilterDropdownOpen: false,
		taglistWithSession: false,
		hasMore: true,
		loader: true
	});
	const [tagState, setTagState] = useState({
		// tagInput: "y",
		allTags: [],
		assignedTags: [],
		filteredTagList:[],
		loader: false,
		tagLoader: false,
		addTagModalOpen: false,
	});

	const [pageNumber, setPageNumber] = useState(2);

	const { sessionList, filteredSessions, activeSessionId, deleteModalOpen, tagListModalOpen, successMessage, rejectMessage, sessionFilterDropdown, tagFilterDropdownOpen, taglistWithSession, hasMore, loader } = sessionState;
	/* Dispasth is used for passing the actions to redux store  */
    const dispatch = useDispatch();
	
	const handleToggleSearchDropdown = (event)=>{
		event.preventDefault();
		setSessionState({
			...sessionState,
			tagFilterDropdownOpen: false,
			sessionFilterDropdown: !sessionFilterDropdown
		});
	}
	const handleTagFilterDropdown = async (event)=>{
		event.preventDefault();
		setSessionState({
			...sessionState,
			tagFilterDropdownOpen: !tagFilterDropdownOpen
		});
	}
	const handleAllTagActivation = event=>{
		event.preventDefault();
		const overlay = document.querySelector('.wpax-vm-overlay');
		overlay.classList.add('wpwax-vm-show');
		setSessionState({
			...sessionState,
			tagListModalOpen: true,
			taglistWithSession: false,
		});
	}

	const currentUser = wpWaxCustomerSupportApp_CoreScriptData.current_user;

	useEffect(() => {
		setSessionState({
			...sessionState,
			loader: false
		});
		const pageLimit = {
			limit: "8",
			page: 1
		}
		const fetchSession = async ()=>{
			const sessionResponse = await apiService.getAllByArg('/sessions', pageLimit);
			return sessionResponse;
		}
		
		fetchSession()
			.then( sessionResponse => {
				setSessionState({
					...sessionState,
					sessionList: sessionResponse.data.data,
					filteredSessions: sessionResponse.data.data,
					loader: false
				});
				dispatch(handleReadSessions(sessionResponse.data.data));
			})
			.catch((error) => {
				console.log(error);
			})
		const checkIfClickedOutside = e => {
            if (tagFilterDropdownOpen && ref.current && !ref.current.contains(e.target)) {
				
                setSessionState({
					...sessionState,
                    tagFilterDropdownOpen: false
                });
            }
        }
        document.addEventListener("mousedown", checkIfClickedOutside)
        return () => {
            // Cleanup the event listener
            document.removeEventListener("mousedown", checkIfClickedOutside)
        }
	}, []);

	const handleSessionSearch = event =>{
		let keyword = event.target.value;
		const generatedSessions = sessionList.filter(entry => entry.users.every(searchableEntry=>  searchableEntry.name.includes(keyword)));
		setSessionState({
			...sessionState,
			filteredSessions: generatedSessions
		});
	}
	
	const fetchMoreData = ()=>{
		const pageArg = {
			limit: "8",
			page: pageNumber
		}
		setPageNumber(pageNumber + 1);
		const fetchNext = async ()=>{
			const nextSessionResponse = await apiService.getAllByArg('/sessions', pageArg);
			return nextSessionResponse;
		}
		setTimeout(() => {
			fetchNext()
			.then( nextSessionResponse => {
				if(nextSessionResponse.data.data.length ==0){
					setSessionState({
						...sessionState,
						hasMore: false
					});
				}else{
					setSessionState({
						...sessionState,
						sessionList: sessionList.concat(nextSessionResponse.data.data),
						filteredSessions: sessionList.concat(nextSessionResponse.data.data),
						loader: false,
					});
				}
				
				dispatch(handleReadSessions(sessionList.concat(nextSessionResponse.data.data)));
			})
			.catch((error) => {
				console.log(error);
			})
		}, 1500);
	}

	return (
		<SidebarWrap className={loader ? "wpwax-vm-loder-active" : null}>
			<div className="wpwax-vm-sidebar-top">
				<h3 className="wpwax-vm-sidebar-title">List of Messages</h3>
				<a href="#" className="wpwax-vm-sidebar-refresher"><ReactSVG src={rotateIcon} /></a>
			</div>
			{
				successMessage !== '' ?
				<span className="wpwax-vm-notice wpwax-vm-notice-success">{successMessage}</span>
				:null
			}
			{
				rejectMessage !== '' ?
				<span className="wpwax-vm-notice wpwax-vm-notice-danger">{rejectMessage}</span>
				:null
			}
			<div className="wpwax-vm-sidebar-filter">
				<SessionFilterWrap className={sessionFilterDropdown ? "wpwax-vm-search-dropdown-show" : null}>
					<div className="wpwax-vm-sidebar-search">
						<div className="wpwax-vm-form-group wpwax-vm-form-icon-left">
							<div className="wpwax-vm-input-icon"><ReactSVG src={magnifier} /></div>
							<input type="text" className="wpwax-vm-form__element" id="wpwax-vm-filter-search" placeholder="Search" onChange={handleSessionSearch}/>
							<a href="#" className="wpwax-vm-search-toggle" onClick={handleToggleSearchDropdown}><ReactSVG src={slider} /></a>
						</div>
						<ul className="wpwax-vm-search-dropdown">
							<li ref={ref}>
								<a href="" onClick={handleTagFilterDropdown}>
									<span className="wpwax-vm-search-dropdown__text">Search by tags</span>
									<span className="dashicons dashicons-arrow-down-alt2"></span>
								</a>
								<TagFilter outerState={sessionState} setOuterState={setSessionState} tagState={tagState} setTagState={setTagState}/>
							</li>
							{/* <li>
								<a href="">
									<span className="wpwax-vm-search-dropdown__text">Search by date</span>
									<span className="dashicons dashicons-arrow-down-alt2"></span>
								</a>
							</li> */}
						</ul>
					</div>
				</SessionFilterWrap>
				<div className="wpwax-vm-sidebar-filter__quick-actions">
					<Dropdown dropdownText={true} textIcon={filterIcon} dropdownIconOpen={angleUp} dropdownIconClose={angleDown} dropdownList={filterDropdown} outerState={sessionState} setOuterState={setSessionState}/>
					<a href="#" className="wpwax-vm-btn-all-tags" onClick={handleAllTagActivation}><ReactSVG src={tag}/><span>Tags</span></a>
				</div>
				
			</div>
			{
				loader ?
					<span className="wpwax-vm-loading-spin">
						<span className="wpwax-vm-spin-dot"></span>
						<span className="wpwax-vm-spin-dot"></span>
						<span className="wpwax-vm-spin-dot"></span>
						<span className="wpwax-vm-spin-dot"></span>
					</span>
					:
					<div className="wpwax-vm-sidebar-userlist">
						<ul id="scrollableDiv">
							<InfiniteScroll 
								dataLength={sessionList.length}
								next={fetchMoreData}
								hasMore={hasMore}
								scrollableTarget='scrollableDiv'
								loader={<span><ReactSVG src={loaders} /></span>}
								>
								{
									sessionList.map((item, index) => {
										
										const users = item.users.filter(p => p.id !== parseInt(currentUser.ID));
										let images = [];
										let titleString = [];
										let multiImg = false;
										for (let i = 0; i < users.length; i++) {
											images.push(users[i].avater);
											titleString.push(users[i].name)
										}

										if(images.length > 1){
											multiImg = true;
										}
										if(Number(item.total_unread) > 0){
											var moreDropdown = [
												{
													icon: envelopeOpen,
													name: "mark-read",
													text: "Mark as Read"
												},
												{
													icon: tag,
													name: "add-tags",
													text: "Add tags"
												},
												{
													icon: trash,
													name: "delete-conv",
													text: "Delete Conversation"
												},
											];
										}else{
											var moreDropdown = [
												{
													icon: envelopeOpen,
													name: "mark-unread",
													text: "Mark as unread"
												},
												{
													icon: tag,
													name: "add-tags",
													text: "Add tags"
												},
												{
													icon: trash,
													name: "delete-conv",
													text: "Delete Conversation"
												},
											];
											
										}

										const metaList = [
											{
												type: "date",
												text: item.updated_on
											}
										]; 
		
										return (
											<li className="wpwax-vm-usermedia" key={index}>
												<div className="wpwax-vm-usermedia__left">
													<MediaBox img={images} multiImg={multiImg} title={titleString.join()} metaList={metaList} />
												</div>
												<div className="wpwax-vm-usermedia__right">
													<span className={Number(item.total_unread) > 0 ? 'wpwax-vm-usermedia-status wpwax-vm-usermedia-status-unread' : 'wpwax-vm-usermedia-status'}></span>
													<Dropdown dropdownText={false} dropdownIconOpen={ellipsisV} dropdownIconClose={ellipsisV} dropdownList={moreDropdown} outerState={sessionState} setOuterState={setSessionState} sessionId={item.session_id}/>
												</div>
											</li>
										)
									})
								}
							</InfiniteScroll>
						</ul>
					</div>
			}
			
			<Taglist sessionState={sessionState} setSessionState={setSessionState} tagState={tagState} setTagState={setTagState}/>

			<AddTag sessionState={sessionState} setSessionState={setSessionState} tagState={tagState} setTagState={setTagState}/>

			<DeleteConfirm deleteBy={activeSessionId} modalOpen={deleteModalOpen} outerState={sessionState} setOuterState={setSessionState}/>
		</SidebarWrap>
	);
}

export default Sidebar;