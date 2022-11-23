import React from 'react';
import Switch from 'react-switch';

const defaultTemplateBody = `Dear {{NAME}},

Thank You For Sharing Your Concern. 

We have received your request. A support representative will get back to you within 24 hours.

You can continue the conversation from the link {{CONVERSATION_LINK}}

Thanks,
The Administrator of {{SITE_NAME}}`;

const defaultTemplateBodyGuest = `Dear {{NAME}},

Thank You For Sharing Your Concern. 

We have received your request. A support representative will get back to you within 24 hours.

A guest token has been generated that can be used to access the conversation and it is valid until 30 days from now. You can continue conversation from the link {{CONVERSATION_LINK}}

Thanks,
The Administrator of {{SITE_NAME}}`;

const defaultMessageBody = `Dear {{NAME}},
    Message Details:
    {{MESSAGE}}
	Go to your conversation {{CONVERSATION_LINK}}
	`;

const EmailTemplate = (props) => {
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
        const settingName = event.target.name;
        const settingValue = event.target.value;
        setContentState({
            ...contentState,
            options: {
                ...contentState.options,
                [settingName]: settingValue,
            },
        });
    };
    return (
        <div className='wpwax-vm-setting-wrap'>
            <div className='wpwax-vm-settings__single'>
                <label
                    className='wpwax-vm-settings__single--label'
                    htmlFor='enableEmailHeader'
                >
                    Enable Header
                </label>
                <div className='wpwax-vm-settings__single--element'>
                    <Switch
                        uncheckedIcon={false}
                        checkedIcon={false}
                        onColor='#6551F2'
                        offColor='#E2E2E2'
                        className='wpwax-vm-switch'
                        id='enableEmailHeader'
                        handleDiameter={14}
                        height={22}
                        width={40}
                        checked={
                            contentState.options.enableEmailHeader ===
                            'undefined'
                                ? true
                                : contentState.options.enableEmailHeader
                        }
                        onChange={handleUpdateSwitch}
                    />
                    <div
                        className={
                            contentState.options.enableEmailHeader ===
                            'undefined'
                                ? true
                                : contentState.options.enableEmailHeader
                                ? 'wpwax-vm-settings__swtich-content wpwax-vm-show'
                                : 'wpwax-vm-settings__swtich-content'
                        }
                    >
                        <div className='wpwax-vm-form__color-plate wpwax-vm-mb-20 wpwax-vm-mt-20'>
                            <span className='wpwax-vm-form__color-text'>
                                {contentState.options.emailHeaderColor ||
                                    '#6551f2'}
                            </span>
                            <label
                                htmlFor='wpwax-vm-mail-header-color'
                                className='wpwax-vm-form__color-ball'
                                style={{
                                    backgroundColor:
                                        contentState.options.emailHeaderColor ||
                                        '#6551f2',
                                }}
                            ></label>
                            <input
                                type='color'
                                id='wpwax-vm-mail-header-color'
                                className='wpwax-vm-form__element'
                                name='emailHeaderColor'
                                defaultValue={
                                    contentState.options.emailHeaderColor ||
                                    '#6551f2'
                                }
                                onChange={handleChange}
                            />
                        </div>
                        <p className='wpwax-vm-input-desc'>
                            Email header background color
                        </p>
                    </div>
                </div>
            </div>
            <div className='wpwax-vm-note'>
                <div className='wpwax-vm-note__icon'>
                    <span className='dashicons dashicons-info'></span>
                </div>
                <div className='wpwax-vm-note__inner'>
                    <h4 className='wpwax-vm-note__title'>
                        Allowed Placeholders
                    </h4>
                    <div className='wpwax-vm-note__content'>
                        <div className='wpwax-vm-note__single'>
                            <span className='wpwax-vm-note__single--label'>
                                {'{{'}NAME{'}}'}:
                            </span>
                            <span className='wpwax-vm-note__single--text'>
                                Name of the person who sent the first message.
                            </span>
                        </div>
                        <div className='wpwax-vm-note__single'>
                            <span className='wpwax-vm-note__single--label'>
                                {'{{'}MESSAGE{'}}'}:
                            </span>
                            <span className='wpwax-vm-note__single--text'>
                                It outputs messege details.
                            </span>
                        </div>
                        <div className='wpwax-vm-note__single'>
                            <span className='wpwax-vm-note__single--label'>
                                {'{{'}REPLIER_NAME{'}}'}:
                            </span>
                            <span className='wpwax-vm-note__single--text'>
                                Name of the message replier.
                            </span>
                        </div>
                        <div className='wpwax-vm-note__single'>
                            <span className='wpwax-vm-note__single--label'>
                                {'{{'}TODAY{'}}'}:
                            </span>
                            <span className='wpwax-vm-note__single--text'>
                                It outputs the current date.
                            </span>
                        </div>
                        <div className='wpwax-vm-note__single'>
                            <span className='wpwax-vm-note__single--label'>
                                {'{{'}NOW{'}}'}:
                            </span>
                            <span className='wpwax-vm-note__single--text'>
                                It outputs the current time.
                            </span>
                        </div>
                        <div className='wpwax-vm-note__single'>
                            <span className='wpwax-vm-note__single--label'>
                                {'{{'}CONVERSATION_LINK{'}}'}:
                            </span>
                            <span className='wpwax-vm-note__single--text'>
                                It outputs the user dashboard page link.
                            </span>
                        </div>
                        <div className='wpwax-vm-note__single'>
                            <span className='wpwax-vm-note__single--label'>
                                {'{{'}SITE_NAME{'}}'}:
                            </span>
                            <span className='wpwax-vm-note__single--text'>
                                It outputs your site name.
                            </span>
                        </div>
                        <div className='wpwax-vm-note__single'>
                            <span className='wpwax-vm-note__single--label'>
                                {'{{'}SITE_LINK{'}}'}:
                            </span>
                            <span className='wpwax-vm-note__single--text'>
                                It outputs your site url with link.
                            </span>
                        </div>
                        <div className='wpwax-vm-note__single'>
                            <span className='wpwax-vm-note__single--label'>
                                {'{{'}SITE_URL{'}}'}:
                            </span>
                            <span className='wpwax-vm-note__single--text'>
                                It outputs your site url with link.
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='wpwax-vm-settings wpwax-vm-mb-20'>
                <div className='wpwax-vm-settings__single'>
                    <h2>Templates</h2>
                </div>
            </div>

            <div className='wpwax-vm-card'>
                <div className='wpwax-vm-card-header'>
                    <h3 className='wpwax-vm-card-header__title'>Greetings</h3>
                </div>
                <div className='wpwax-vm-card-body'>
                    <div className='wpwax-vm-settings'>
                        <div className='wpwax-vm-settings__single'>
                            <label
                                className='wpwax-vm-settings__single--label'
                                htmlFor='wpwax-vm-mail-from-subject'
                            >
                                Email Subject
                            </label>
                            <div className='wpwax-vm-settings__single--element'>
                                <div className='wpwax-vm-form-group'>
                                    <input
                                        type='text'
                                        className='wpwax-vm-form__element'
                                        id='wpwax-vm-mail-from-subject'
                                        name='emailTemplateGreetingSubject'
                                        placeholder='ex. Welcome to Support'
                                        defaultValue={
                                            contentState.options
                                                .emailTemplateGreetingSubject ||
                                            'Welcome to Support'
                                        }
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className='wpwax-vm-settings__single'>
                            <label
                                className='wpwax-vm-settings__single--label'
                                htmlFor='wpwax-vm-mail-from-body'
                            >
                                Email Body
                            </label>
                            <div className='wpwax-vm-settings__single--element'>
                                <div className='wpwax-vm-form-group'>
                                    <textarea
                                        className='wpwax-vm-form__element'
                                        id='wpwax-vm-mail-from-body'
                                        name='emailTemplateGreetingBody'
                                        placeholder=''
                                        defaultValue={
                                            contentState.options
                                                .emailTemplateGreetingBody ||
                                            defaultTemplateBody
                                        }
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className='wpwax-vm-settings__single'>
                            <label
                                className='wpwax-vm-settings__single--label'
                                htmlFor='wpwax-vm-mail-from-body-guest'
                            >
                                Email Body (Guest)
                            </label>
                            <div className='wpwax-vm-settings__single--element'>
                                <div className='wpwax-vm-form-group'>
                                    <textarea
                                        className='wpwax-vm-form__element'
                                        id='wpwax-vm-mail-from-body-guest'
                                        name='emailTemplateGreetingBodyGuest'
                                        placeholder=''
                                        defaultValue={
                                            contentState.options
                                                .emailTemplateGreetingBodyGuest ||
                                            defaultTemplateBodyGuest
                                        }
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='wpwax-vm-card'>
                <div className='wpwax-vm-card-header'>
                    <h3 className='wpwax-vm-card-header__title'>New Message</h3>
                </div>
                <div className='wpwax-vm-card-body'>
                    <div className='wpwax-vm-settings'>
                        <div className='wpwax-vm-settings__single'>
                            <label
                                className='wpwax-vm-settings__single--label'
                                htmlFor='wpwax-vm-message-mail-from-subject'
                            >
                                Email Subject
                            </label>
                            <div className='wpwax-vm-settings__single--element'>
                                <div className='wpwax-vm-form-group'>
                                    <input
                                        type='text'
                                        className='wpwax-vm-form__element'
                                        id='wpwax-vm-message-mail-from-subject'
                                        name='emailTemplateMessageSubject'
                                        placeholder='ex. Got a New Message'
                                        defaultValue={
                                            contentState.options
                                                .emailTemplateMessageSubject ||
                                            `New Message From {{REPLIER_NAME}}`
                                        }
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className='wpwax-vm-settings__single'>
                            <label
                                className='wpwax-vm-settings__single--label'
                                htmlFor='wpwax-vm-message-mail-from-body'
                            >
                                Email Body
                            </label>
                            <div className='wpwax-vm-settings__single--element'>
                                <div className='wpwax-vm-form-group'>
                                    <textarea
                                        className='wpwax-vm-form__element'
                                        id='wpwax-vm-message-mail-from-body'
                                        name='emailTemplateMessageBody'
                                        placeholder=''
                                        defaultValue={
                                            contentState.options
                                                .emailTemplateMessageBody ||
                                            defaultMessageBody
                                        }
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='wpwax-vm-settings__single'>
                <label
                    className='wpwax-vm-settings__single--label'
                    htmlFor='enableEmailFooter'
                >
                    Enable Footer
                </label>
                <div className='wpwax-vm-settings__single--element'>
                    <div className='wpwax-vm-form-group'>
                        <Switch
                            disabled='disabled'
                            uncheckedIcon={false}
                            checkedIcon={false}
                            onColor='#6551F2'
                            offColor='#E2E2E2'
                            className='wpwax-vm-switch'
                            id='enableEmailFooter'
                            handleDiameter={14}
                            height={22}
                            width={40}
                            checked={
                                contentState.options.enableEmailFooter ===
                                'undefined'
                                    ? true
                                    : contentState.options.enableEmailFooter
                            }
                            onChange={handleUpdateSwitch}
                        />
                    </div>
                    <p className='wpwax-vm-input-desc-pro'>
                        Upgrate Pro to disable email footer.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default EmailTemplate;
