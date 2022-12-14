import Checkbox from 'Components/form-fields/Checkbox.jsx';
import Radio from 'Components/form-fields/Radio.jsx';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { components, default as Select } from 'react-select';
// import { ReactSVG } from 'react-svg';
import ReactSVG from 'react-inlinesvg';
import Switch from 'react-switch';
import formUpdater from 'Helper/FormUpdater';
import {
    handleDynamicEdit,
    updateFormSettings,
} from '../../../store/form/actionCreator';
import { GeneralSettingWrap } from './Style';

import questionIcon from 'Assets/svg/icons/question-circle.svg';

export const fontOptions = [
    { value: 'roboto', label: 'Roboto' },
    { value: 'inter', label: 'Inter' },
    { value: 'legend', label: 'Legend' },
];

export const fontSizeOptions = [
    { value: '1.3', label: 'large' },
    { value: '1.5', label: 'x-large' },
    { value: '2', label: 'xx-large' },
    { value: '1.2', label: 'medium' },
    { value: '1', label: 'small' },
    { value: '.85', label: 'smaller' },
    { value: '.80', label: 'x-small' },
];

const GeneralSettings = props => {

    const { formValidation, setFormValidation } = props;

    /* initialize Form Data */
    const {
        formData,
        templateName,
        displayOnCustomPages,
        collectInfo,
        displayedCustomPages,
        // tag,
        chatVisibilityType,
    } = useSelector((state) => {
        return {
            formData: state.form.data,
            pageBackground: state.form.data[0].options.page_background_color,
            fontColor: state.form.data[0].options.font_family,
            primaryColor: state.form.data[0].options.primary_color,
            fontFamily: state.form.data[0].options.font_color,
            fontSize: state.form.data[0].options.font_size,
            displayOnCustomPages: state.form.settings.displayOnCustomPages,
            templateName: state.form.data[0].name,
            collectInfo: state.form.data[0].options.collectInfo,
            displayedCustomPages: state.form.data[0].pages
                ? state.form.data[0].pages.split(',')
                : [],
            // tag: state.form.data[0].options.tag,
        };
    });

    const [state, setState] = useState({
        openCollapse: true,
    });

    /* Dispasth is used for passing the actions to redux store  */
    const dispatch = useDispatch();

    const Option = (props) => {
        return (
            <div>
                <components.Option {...props}>
                    <Checkbox
                        id={`wpwax-vm${props.value}`}
                        label={props.label}
                        onChange={handleCustomPageCheckbox}
                        checked={props.isSelected}
                    />
                </components.Option>
            </div>
        );
    };

    const initialOption = [{ value: '', label: `Select...` }];

    const customPages = [];
    wpWaxCustomerSupportApp_CoreScriptData.wp_pages.map((item, index) => {
        customPages.push({ value: `${item.id}`, label: `${item.title}` });
    });

    let allTerms = [];

    if (wpWaxCustomerSupportApp_CoreScriptData.terms) {
        allTerms = wpWaxCustomerSupportApp_CoreScriptData.terms.map((item) => {
            return { value: item.term_id, label: item.name };
        });
    }

    allTerms = [...initialOption, ...allTerms];

    const handleCustomPageCheckbox = () => {};

    /* To Handle Template Change */

    const handleChangeInputValue = (e) => {
        const updatedData = formUpdater(e.target.id, e.target.value, formData);
        dispatch(handleDynamicEdit(updatedData));
    };

    const handleCollectInfo = (e) => {
        const checkboxValue = e.target.value;
        let newCollectInfo = [...collectInfo];
        if (newCollectInfo.includes(checkboxValue, 0)) {
            newCollectInfo = newCollectInfo.filter(
                (item) => item !== checkboxValue
            );
        } else {
            newCollectInfo.push(checkboxValue);
        }
        const updatedData = formUpdater(
            'wpwax-vm-info-collection',
            newCollectInfo,
            formData
        );
        dispatch(handleDynamicEdit(updatedData));
    };

    const handleChangeSwitchValue = (value, event, id) => {
        if (id === 'wpwax-vm-display-default') {
            value = !value;
        }
        const updatedData = formUpdater(id, value, formData);
        dispatch(handleDynamicEdit(updatedData));
    };

    function handleChangeDisplayOnCustomPagesSwitchValue(value, event, id) {
        dispatch(updateFormSettings('displayOnCustomPages', value));
        if (!value) {
            const updatedData = formUpdater(
                'wpwax-vm-display-custom-pages',
                '',
                formData
            );
            dispatch(handleDynamicEdit(updatedData));
        }
        if(value){
            setFormValidation(false);
        }else{
            setFormValidation(true);
        }
    }

    const handleChangeSelectValue = (selectEvent, e) => {
        let customPageIds = '';
        let updatedData = '';
        if (e.name === 'wpwax-vm-display-custom-pages') {
            let newPageIdsArray = [];
            selectEvent.map((item) => {
                newPageIdsArray.push(item.value);
            });
            customPageIds = newPageIdsArray.join(',');
            updatedData = formUpdater(e.name, customPageIds, formData);
        } else {
            updatedData = formUpdater(e.name, selectEvent.value, formData);
        }

        dispatch(handleDynamicEdit(updatedData));
    };

    const handleOnChangeDisplayOnCustomPages = (selectEvent, e) => {
        let customPageIds = '';
        let updatedData = '';

        let newPageIdsArray = [];
        selectEvent.map((item) => {
            newPageIdsArray.push(item.value);
        });
        customPageIds = newPageIdsArray.join(',');
        updatedData = formUpdater(e.name, customPageIds, formData);

        if(updatedData[0].pages === ''){
            setFormValidation(false);
        }else{
            setFormValidation(true);
        }

        dispatch(handleDynamicEdit(updatedData));
    };

    const handleOnChangeTag = (selectEvent, e) => {
        const updatedData = formUpdater(
            e.name,
            parseInt(selectEvent.value),
            formData
        );
        dispatch(handleDynamicEdit(updatedData));
    };

    function getSelectedPageDefault() {
        let newArray = [];
        if (displayedCustomPages.length !== 0) {
            displayedCustomPages.map((previousSelected) => {
                const filteredPage = customPages.filter(
                    (item) => item.value === previousSelected
                );
                newArray.push(filteredPage[0]);
            });
        }

        return newArray;
    }

    // function getSelectedTag() {
    // 	const selected = allTerms.filter( item => parseInt( item.value ) === tag );
    // 	return ( selected ) ? selected[0] : null;
    // }

    function onlySpaces(str) {
        return str.trim().length === 0;
    }

    return (
        <GeneralSettingWrap>
            {/* <div className='wpwax-vm-form-group'>
                <div className='wpwax-vm-form-group__label'>
                    <span className='wpwax-vm-tooltip-wrap'>
                        <span>Form Tag</span>
                        <span className='wpwax-vm-tooltip'>
                            <span className='wpwax-vm-tooltip-icon'>
                                <ReactSVG src={questionIcon} />
                            </span>
                            <span className='wpwax-vm-tooltip-text'>
                                All the messages submitted through this form
                                will be assigned with this tag.
                            </span>
                        </span>
                    </span>
                </div>

				<Select
					classNamePrefix='wpwax-vm-select'
					options={allTerms}
					isMulti={false}
					searchable={true}
					hideSelectedOptions={false}
					defaultValue={ getSelectedTag() }
					name='wpwax-vm-tag'
					onChange={handleOnChangeTag}
				/>
            </div> */}

            <div className='wpwax-vm-form-group'>
                <div className='wpwax-vm-form-group__label'>
                    <span className='wpwax-vm-tooltip-wrap'>
                        <span>Collect Info</span>
                    </span>
                </div>
                <div className='wpwax-vm-chekbox-list'>
                    <div className='wpwax-vm-chekbox-single'>
                        <span>Name</span>
                        <Checkbox
                            id='collect-info-phone'
                            label=''
                            onChange={handleCollectInfo}
                            checked={true}
                            value='name'
                            disabled={true}
                        />
                    </div>
                    <div className='wpwax-vm-chekbox-single'>
                        <span>Email </span>
                        <Checkbox
                            id='collect-info-phone'
                            label=''
                            onChange={handleCollectInfo}
                            checked={true}
                            value='email'
                            disabled={true}
                        />
                    </div>
                    <div className='wpwax-vm-chekbox-single'>
                        <span>Phone Number</span>
                        <Checkbox
                            id='collect-info-phone'
                            label=''
                            onChange={handleCollectInfo}
                            checked={collectInfo.includes('phone', 0)}
                            value='phone'
                        />
                    </div>
                </div>
            </div>

            <div className='wpwax-vm-form-group'>
                <div className='wpwax-vm-form-group__label'>
                    <span className='wpwax-vm-tooltip-wrap'>
                        <span>Display on Selected Pages</span>
                        <span className='wpwax-vm-tooltip'>
                            <span className='wpwax-vm-tooltip-icon'>
                                <ReactSVG src={questionIcon} />
                            </span>
                            <span className='wpwax-vm-tooltip-text'>
                                Enable it to display the chat icon on selected pages only.
                            </span>
                        </span>
                    </span>
                    <label>
                        <Switch
                            uncheckedIcon={false}
                            checkedIcon={false}
                            onColor='#6551f2'
                            offColor='#E2E2E2'
                            onHandleColor='#FFFFFF'
                            className='wpwax-vm-switch'
                            id='wpwax-vm-display-default'
                            handleDiameter={14}
                            height={22}
                            width={40}
                            checked={displayOnCustomPages}
                            onChange={
                                handleChangeDisplayOnCustomPagesSwitchValue
                            }
                        />
                    </label>
                </div>
                {!displayOnCustomPages ? null : (
                    <Select
                        classNamePrefix='wpwax-vm-select'
                        options={customPages}
                        isMulti
                        searchable={false}
                        hideSelectedOptions={false}
                        components={{
                            Option,
                        }}
                        defaultValue={getSelectedPageDefault()}
                        name='wpwax-vm-display-custom-pages'
                        onChange={handleOnChangeDisplayOnCustomPages}
                        allowSelectAll={true}
                    />
                )}

                {!displayOnCustomPages ||
                displayedCustomPages.length !== 0 ? null : (
                    <span className='wpwax-vm-validate-danger'>
                        Please select a page
                    </span>
                )}
            </div>
        </GeneralSettingWrap>
    );
};

export default GeneralSettings;
