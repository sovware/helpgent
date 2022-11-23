import React from 'react';
import { default as Select } from 'react-select';
import Switch from 'react-switch';

import { resolutions, getLabel } from "Helper/video-resolution";

const parseResolutionOption = function ( key ) {
	return { value: key, label: getLabel( resolutions[ key ] ) };
};

const resolutionOptions = Object.keys( resolutions ).map( parseResolutionOption ).reverse();

const chatHeadPositions = [
    { value: 'bottom-right', label: 'Bottom Right' },
    { value: 'bottom-middle', label: 'Bottom Middle' },
    { value: 'bottom-left', label: 'Bottom Left' },
];

const General = (props) => {
    const { contentState, setContentState } = props;

    const handleUpdateSwitch = (value, event, id) => {
        setContentState({
            ...contentState,
            options: {
                ...contentState.options,
                [id]: value,
            },
        });
    };

    const handleChange = (event) => {
        const name   = event.target.name;
        let value  = event.target.value;
        let max    = event.target?.max;

        if ( max ) {
            max = Number.parseInt(max);
            value = Number.parseInt(value ? value : 0)

            if (value > max) {
                return;
            }
            
        }

        setContentState({
            ...contentState,
            options: {
                ...contentState.options,
                [name]: value,
            },
        });
    };

    const handleChangeSelectValue = (selectEvent, e) => {
        // let updatedData = '';
        setContentState({
            ...contentState,
            options: {
                ...contentState.options,
                [e.name]: selectEvent.value,
            },
        });
    };

    const dashboardPages = [];
    SettingsScriptData.pages.map((item, index) => {
        dashboardPages.push({ value: `${item.id}`, label: `${item.title}` });
    });

    return (
        <div className='wpwax-vm-settings'>
            <div className='wpwax-vm-card'>

                <div className='wpwax-vm-card-body'>
                    <div className='wpwax-vm-settings__single'>
                        <label
                            className='wpwax-vm-settings__single--label'
                            htmlFor='guestSubmission'
                        >
                            Enable Guest Submission
                        </label>
                        <div className='wpwax-vm-settings__single--element'>
                            <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                                onColor='#6551F2'
                                offColor='#E2E2E2'
                                className='wpwax-vm-switch'
                                id='guestSubmission'
                                handleDiameter={14}
                                height={22}
                                width={40}
                                checked={contentState.options.guestSubmission}
                                onChange={handleUpdateSwitch}
                            />
                        </div>
                    </div>
                    <div className='wpwax-vm-settings__single'>
                        <label
                            className='wpwax-vm-settings__single--label'
                            htmlFor='chat-head-position'
                        >
                            Chat Head Position
                        </label>
                        <div className='wpwax-vm-settings__single--element'>
                            <Select
                                inputId='chat-head-position'
                                classNamePrefix='wpwax-vm-select'
                                options={chatHeadPositions}
                                closeMenuOnSelect={true}
                                hideSelectedOptions={false}
                                searchable={false}
                                name='chatHeadPosition'
                                onChange={handleChangeSelectValue}
                                placeholder='Select a position...'
                                value={
                                    chatHeadPositions.filter(function (option) {
                                        return (
                                            option.value ===
                                            contentState.options.chatHeadPosition
                                        );
                                    })[0]
                                }
                                defaultValue={ {value: 'bottom-left', label: 'Bottom Left'} }
                            />
                        </div>
                    </div>
                    <div className='wpwax-vm-settings__single'>
                        <label
                            className='wpwax-vm-settings__single--label'
                            htmlFor='user-messages-page'
                        >
                            User Messages Page
                        </label>
                        <div className='wpwax-vm-settings__single--element'>
                            <Select
                                inputId='user-messages-page'
                                classNamePrefix='wpwax-vm-select'
                                options={dashboardPages}
                                searchable={false}
                                hideSelectedOptions={false}
                                placeholder='Select a page...'
                                value={
                                    dashboardPages.filter(function (option) {
                                        return (
                                            option.value ===
                                            contentState.options.userDashboardPage
                                        );
                                    })[0]
                                }
                                defaultValue={
                                    dashboardPages.filter(function (option) {
                                        return (
                                            option.value ===
                                            contentState.options.userDashboardPage
                                        );
                                    })[0]
                                }
                                name='userDashboardPage'
                                onChange={handleChangeSelectValue}
                                allowSelectAll={true}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className='wpwax-vm-card'>
                <div className='wpwax-vm-card-header'>
                    <h3 className='wpwax-vm-card-header__title'>Voice & Video</h3>
                </div>
                <div className='wpwax-vm-card-body'>
                    <div className='wpwax-vm-settings__single'>
                        <label
                            className='wpwax-vm-settings__single--label'
                            htmlFor='wpwax-vm-max-video-length'
                        >
                            Maximum Video Record Length
                        </label>
                        <div className='wpwax-vm-settings__single--element'>
                            <div className='wpwax-vm-form-group'>
                                <input
                                    type='number'
                                    className='wpwax-vm-form__element'
                                    id='wpwax-vm-max-video-length'
                                    name='maxVideoLength'
                                    placeholder='Ex: 10'
                                    value={contentState.options.maxVideoLength}
                                    onChange={handleChange}
                                    min='1'
                                    max='2'
                                />
                                <div className='wpwax-vm-input-addon'>
                                    <span className='wpwax-vm-input-addon__text'>
                                        Mins
                                    </span>
                                </div>
                            </div>
                            <p className='wpwax-vm-input-desc-pro'>
                                You can use maximum of 2 mins in free version.
                            </p>
                        </div>
                    </div>
                    <div className='wpwax-vm-settings__single'>
                        <label
                            className='wpwax-vm-settings__single--label'
                            htmlFor='wpwax-vm-max-voice-length'
                        >
                            Maximum Voice Record Length
                        </label>
                        <div className='wpwax-vm-settings__single--element'>
                            <div className='wpwax-vm-form-group'>
                                <input
                                    type='number'
                                    className='wpwax-vm-form__element'
                                    id='wpwax-vm-max-voice-length'
                                    name='maxVoiceLength'
                                    placeholder='Ex: 10'
                                    value={contentState.options.maxVoiceLength}
                                    onChange={handleChange}
                                    min='1'
                                    max='2'
                                />
                                <div className='wpwax-vm-input-addon'>
                                    <span className='wpwax-vm-input-addon__text'>
                                        Mins
                                    </span>
                                </div>
                            </div>
                            <p className='wpwax-vm-input-desc-pro'>
                                You can use maximum of 2 mins in free version.
                            </p>
                        </div>
                    </div>

                    <div className='wpwax-vm-settings__single'>
                        <label
                            className='wpwax-vm-settings__single--label'
                            htmlFor='video-resolution'
                        >
                            Video Resolution
                        </label>
                        <div className='wpwax-vm-settings__single--element'>
                            <div className='wpwax-vm-form-group'>
                                <Select
                                    inputId='video-resolution'
                                    classNamePrefix='wpwax-vm-select'
                                    options={resolutionOptions}
                                    closeMenuOnSelect={true}
                                    hideSelectedOptions={false}
                                    searchable={false}
                                    name='videoResolution'
                                    onChange={handleChangeSelectValue}
                                    placeholder='Select video resulation...'
                                    value={
                                        resolutionOptions.filter(function (option) {
                                            return ( option.value === contentState.options.videoResolution );
                                        })[0]
                                    }
                                    defaultValue={ parseResolutionOption( 720 ) }
                                />
                            </div>
                            <p className='wpwax-vm-input-desc-pro'>
                                You can use maximum of 720p in free version.
                            </p>
                        </div>
                    </div>
                    <div className='wpwax-vm-settings__single'>
                        <label
                            className='wpwax-vm-settings__single--label'
                            htmlFor='wpwax-vm-max-upload-size'
                        >
                            Maximum Upload Size
                        </label>
                        <div className='wpwax-vm-settings__single--element'>
                            <div className='wpwax-vm-form-group'>
                                <input
                                    type='number'
                                    className='wpwax-vm-form__element'
                                    id='wpwax-vm-max-upload-size'
                                    name='maxUploadSize'
                                    placeholder='Ex: 10'
                                    value={contentState.options.maxUploadSize}
                                    onChange={handleChange}
                                    min='0'
                                    max='50'
                                />
                                <div className='wpwax-vm-input-addon'>
                                    <span className='wpwax-vm-input-addon__text'>
                                        MB
                                    </span>
                                </div>
                            </div>
                            <p className='wpwax-vm-input-desc-pro'>
                                You can use maximum of 50 MB in free version.
                            </p>
                        </div>
                    </div>
                    <div className='wpwax-vm-settings__single'>
                        <label
                            className='wpwax-vm-settings__single--label'
                            htmlFor='wpwax-vm-delete-attatchment'
                        >
                            Remove Attachments After
                        </label>
                        <div className='wpwax-vm-settings__single--element'>
                            <div className='wpwax-vm-form-group'>
                                <input
                                    disabled='disabled'
                                    type='number'
                                    className='wpwax-vm-form__element'
                                    id='wpwax-vm-delete-attatchment'
                                    name='attatchmentDeletionAfter'
                                    placeholder='Ex: 45'
                                    value={
                                        contentState.options.attatchmentDeletionAfter
                                    }
                                    onChange={handleChange}
                                    min='0'
                                />
                                <div className='wpwax-vm-input-addon'>
                                    <span className='wpwax-vm-input-addon__text'>
                                        Days
                                    </span>
                                </div>
                            </div>
                            <p className='wpwax-vm-input-desc-pro'>
                                Upgrade to HelpGent Pro to use this feature.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default General;
