import React from 'react';
import Switch from "react-switch";
import Radio from 'Components/form-fields/Radio.jsx';

const EmailGeneral = props =>{
    const { contentState, setContentState } = props;
    const handleUpdateSwitch = (value, event, id)=>{
        console.log(value)
        if(id === "wpwax-vm-enable-mail-notification"){
            setContentState({
                ...contentState,
                options: {
                    ...contentState.options,
                    enableEmailNotification: value
                }
            })
        }
    }
    const handleSettingSwitch = (event)=>{
        
    }
    const handleUpdateRadio = (event)=>{
        if(event.target.id === "wpwax-vm-send-mail-single"){
            setContentState({
                ...contentState,
                options: {
                    ...contentState.options,
                    emailNotificationType: "single"
                }
            })
        }else if(event.target.id === "wpwax-vm-send-mail-multiple"){
            setContentState({
                ...contentState,
                options: {
                    ...contentState.options,
                    emailNotificationType: "multiple"
                }
            })
        }
    }
    console.log(contentState);
    return(
        <div className="wpwax-vm-settings">
            <div className="wpwax-vm-settings__single">
                <h4 className="wpwax-vm-settings__single--label">Enable Email Notification</h4>
                <div className="wpwax-vm-settings__single--element">
                    <Switch
                        uncheckedIcon={false}
                        checkedIcon={false}
                        onColor="#6551F2"
                        offColor="#E2E2E2"
                        className="wpwax-vm-switch"
                        id="wpwax-vm-enable-mail-notification"
                        handleDiameter={14}
                        height={22}
                        width={40}
                        checked={contentState.options.enableEmailNotification}
                        onChange={handleUpdateSwitch}
                    />
                    <div className="wpwax-vm-settings__swtich-content">
                        <div className='wpwax-vm-radio-list'>
                            <div className='wpwax-vm-radio-single'>
                                <Radio
                                    id='wpwax-vm-send-mail-single'
                                    label='First message in a conversation'
                                    value='single'
                                    name='wpwax-vm-send-mail-option'
                                    onChange={(e) => handleUpdateRadio(e)}
                                    checked={contentState.options.emailNotificationType === "single"}
                                />
                            </div>
                            <div className='wpwax-vm-radio-single'>
                                <Radio
                                    id='wpwax-vm-send-mail-multiple'
                                    label='Every message in a conversion'
                                    value='multiple'
                                    name='wpwax-vm-send-mail-option'
                                    onChange={(e) => handleUpdateRadio(e)}
                                    checked={contentState.options.emailNotificationType === "multiple"}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="wpwax-vm-settings__single">
                <h4 className="wpwax-vm-settings__single--label">Enable HTML email</h4>
                <div className="wpwax-vm-settings__single--element">
                    <Switch
                        uncheckedIcon={false}
                        checkedIcon={false}
                        onColor="#6551F2"
                        offColor="#E2E2E2"
                        className="wpwax-vm-switch"
                        handleDiameter={14}
                        height={22}
                        width={40}
                        checked={true}
                        onChange={handleSettingSwitch}
                    />
                </div>
            </div>
            <div className="wpwax-vm-settings__single">
                <h4 className="wpwax-vm-settings__single--label">Enable Header</h4>
                <div className="wpwax-vm-settings__single--element">
                    <Switch
                        uncheckedIcon={false}
                        checkedIcon={false}
                        onColor="#6551F2"
                        offColor="#E2E2E2"
                        className="wpwax-vm-switch"
                        handleDiameter={14}
                        height={22}
                        width={40}
                        checked={true}
                        onChange={handleSettingSwitch}
                    />
                    <div className="wpwax-vm-settings__swtich-content">
                        <div className="wpwax-vm-form__color-plate wpwax-vm-mb-10 wpwax-vm-mt-10">
                            <span className="wpwax-vm-form__color-text">#333333</span>
                            <label htmlFor="wpwax-vm-chat-footer-text-color" className="wpwax-vm-form__color-ball" style={{ backgroundColor: "#999999" }}></label>
                            <input type="color" id="wpwax-vm-footer-text-color" className="wpwax-vm-form__element" value="#000000" />
                        </div>
                        <div className="wpwax-vm-inline-switch">
                            <label htmlFor="">Add site logo</label>
                            <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                                onColor="#6551F2"
                                offColor="#E2E2E2"
                                className="wpwax-vm-switch"
                                handleDiameter={14}
                                height={22}
                                width={40}
                                checked={true}
                                onChange={handleSettingSwitch}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="wpwax-vm-settings__single">
                <h4 className="wpwax-vm-settings__single--label">Email From Name</h4>
                <div className="wpwax-vm-settings__single--element">
                    <div className="wpwax-vm-form-group">
                        <input type="text" className="wpwax-vm-form__element" id="wpwax-vm-chat-title" />
                    </div>
                </div>
            </div>
            <div className="wpwax-vm-settings__single">
                <h4 className="wpwax-vm-settings__single--label">Email From Email</h4>
                <div className="wpwax-vm-settings__single--element">
                    <div className="wpwax-vm-form-group">
                        <input type="text" className="wpwax-vm-form__element" id="wpwax-vm-chat-title" />
                    </div>
                </div>
            </div>
            <div className="wpwax-vm-settings__single">
                <h4 className="wpwax-vm-settings__single--label">Email From  Subject</h4>
                <div className="wpwax-vm-settings__single--element">
                    <div className="wpwax-vm-form-group">
                        <input type="text" className="wpwax-vm-form__element" id="wpwax-vm-chat-title" />
                    </div>
                </div>
            </div>
            <div className="wpwax-vm-settings__single">
                <h4 className="wpwax-vm-settings__single--label">Email From  Body</h4>
                <div className="wpwax-vm-settings__single--element">
                    <div className="wpwax-vm-form-group">
                        <textarea className="wpwax-vm-form__element" id="wpwax-vm-description" />
                    </div>
                    <div className="wpwax-vm-note">
                        <div className="wpwax-vm-note__icon">
                            <span className="dashicons dashicons-info-outline"></span>
                        </div>
                        <div className="wpwax-vm-note__inner">
                            <h4 className="wpwax-vm-note__title">Allowed Placeholders</h4>
                            <div className="wpwax-vm-note__content">
                                <div className="wpwax-vm-note__single">
                                    <span className="wpwax-vm-note__single--label">NAME</span>
                                    <span className="wpwax-vm-note__single--text">Name of the person who sent the initial message.</span>
                                </div>
                                <div className="wpwax-vm-note__single">
                                    <span className="wpwax-vm-note__single--label">SITE_NAME</span>
                                    <span className="wpwax-vm-note__single--text">It outputs your site name</span>
                                </div>
                                <div className="wpwax-vm-note__single">
                                    <span className="wpwax-vm-note__single--label">SITE_LINK</span>
                                    <span className="wpwax-vm-note__single--text">It outputs your site url with link</span>
                                </div>
                                <div className="wpwax-vm-note__single">
                                    <span className="wpwax-vm-note__single--label">SITE_URL</span>
                                    <span className="wpwax-vm-note__single--text"> It outputs your site url with link</span>
                                </div>
                                <div className="wpwax-vm-note__single">
                                    <span className="wpwax-vm-note__single--label">MESSAGE</span>
                                    <span className="wpwax-vm-note__single--text">It outputs messege details.</span>
                                </div>
                                <div className="wpwax-vm-note__single">
                                    <span className="wpwax-vm-note__single--label">TODAY</span>
                                    <span className="wpwax-vm-note__single--text">It outputs the current date</span>
                                </div>
                                <div className="wpwax-vm-note__single">
                                    <span className="wpwax-vm-note__single--label">NOW</span>
                                    <span className="wpwax-vm-note__single--text">It outputs the current time</span>
                                </div>
                                <div className="wpwax-vm-note__single">
                                    <span className="wpwax-vm-note__single--label">DASHBOARD_LINK</span>
                                    <span className="wpwax-vm-note__single--text">It outputs the user dashboard page link</span>
                                </div>
                                <div className="wpwax-vm-note__single">
                                    <span className="wpwax-vm-note__single--label">REPLIER_NAME</span>
                                    <span className="wpwax-vm-note__single--text">the person who will reply in a conversation</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default EmailGeneral;