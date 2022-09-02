import Styled from 'styled-components';

const SetingBoxWrap = Styled.div`
    max-width: 1200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    .wpwax-vm-settings-top{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        padding-top: 20px;
        margin-bottom: 18px;
        .wpwax-vm-settings-top__title{
            font-size: 24px;
            font-weight: 500;
            line-height: 1;
            margin: 0;
        }
        .wpwax-vm-settings-top__links{
            position: relative;
            bottom: -4px;
            display: flex;
            flex-wrap: wrap;
            a{
                display: flex;
                align-items: center;
                font-size: 14px;
                line-height: 1;
                margin: 12px;
                text-decoration: none;
                color: var(--color-text);
                &:hover{
                    color: var(--color-info);
                    svg path{
                        fill: var(--color-info);
                    }
                }
                svg {
                    margin-right: 8px;
                    path{
                        fill: var(--color-text);
                    }
                }
            }
        }
    }
    .wpwax-vm-seetings-box{
        width: 100%;
        box-shadow: 0 0 10px rgba(105,105,105,.10);
        .wpwax-vm-seetings-box__header{
            display: flex;
            justify-content: space-between;
            padding: 15px 30px;
            border-radius: 14px 14px 0 0;
            background-color: var(--color-dark);
        }
        .wpwax-vm-seetings-box__breadcrumb{
            display: flex;
            align-items: center;
            ul{
                display: flex;
                flex-wrap: wrap;
                margin: 0;
                padding: 0;
                li{
                    display: flex;
                    margin-bottom: 0;
                    a{
                        font-size: 14px;
                        font-weight: 500;
                        text-decoration: none;
                        color: rgba(255,255,255,.50);
                        span.dashicons{
                            width: 18px;
                            height: 18px;
                            font-size: 16px;
                        }
                        &:hover{
                            color: rgba(255,255,255,1);
                            span.dashicons{
                                color: rgba(255,255,255,1);
                            }
                        }
                    }
                }
            }
        }
        .wpwax-vm-seetings-box__actions{
            display: flex;
            .wpwax-vm-seetings-box-search{
                margin-right: 25px;
                input{
                    font-size: 14px;
                    min-height: 40px;
                    border-radius: 20px;
                    min-width: 250px;
                    padding: 0 16px;
                    color: rgba(255,255,255,1);
                    background-color: rgba(255,255,255,.20);
                    border: 0 none;
                    &::placeholder{
                        color: rgba(255,255,255,.60);
                    }
                    &:focus{
                        outline: none;
                        box-shadow: 0 0;
                    }
                }
            }
            .wpwax-vm-btn{
                padding: 0 20px;
            }
        }
        .wpwax-vm-seetings-box__body{
            min-height: 600px;
            display: flex;
        }
        .wpwax-vm-seetings-box__footer{
            display: flex;
            justify-content: flex-end;
            padding: 15px 30px;
            border-radius: 0 0 14px 14px;
            background-color: var(--color-dark);
            .wpwax-vm-btn{
                padding: 0 20px;
            }
        }
    }
`;

const SidebarWrap = Styled.div`
    min-width: 250px;
    background-color: #F7F7F7;
`;

const SidebarMenuItem = Styled.li`
    >a{
        position: relative;
        display: flex;
        align-items: center;
        font-size: 14px;
        font-weight: 500;
        min-height: 50px;
        padding: 0 25px;
        text-decoration: none;
        color: var(--color-dark);
        &:before{
            position: absolute;
            left: 0;
            top: 0;
            height: 100%;
            width: 2px;
            content: "";
            opacity: 0;
            visibility: hidden;
            background-color: var(--color-primary);
        }
        &:focus{
            box-shadow: 0 0;
            outline: none;
        }
        .wpwax-vm-sidebar-nav__item--icon{
            margin-right: 15px;
        }
        .wpwax-vm-sidebar-nav__item--text{
            width: 100%;
            display: flex;
            justify-content: space-between;
        }
    }
    &.wpwax-vm-sidebar-nav__submenu-open{
        >a{
            background-color: var(--color-white);
            &:before{
                opacity: 1;
                visibility: visible;
            }
        }
    }
    ul{
        padding-left: 60px;
        li{
            a{
                display: block;
                font-size: 14px;
                font-weight: 500;
                text-decoration: none;
                padding: 12px 0;
                color: #4D4D4D;
                &:focus{
                    outline: none;
                    box-shadow: 0 0;
                }
                &:hover{
                    color: var(--color-primary);
                }
            }
            &:first-child{
                a{
                    padding-top: 20px;
                }
            }
            &:last-child{
                a{
                    padding-bottom: 20px;
                }
            }
        }
    }
`;

const SettingContentWrap = Styled.div`
    width: 100%;
    padding: 45px 90px 45px 45px;
    background-color: var(--color-white);
    .wpwax-vm-settings__single{
        display: flex;
        &:not(:last-child){
            margin-bottom: 40px;
        }
        .wpwax-vm-settings__single--label{
            font-size: 14px;
            font-weight: 500;
            margin: 0 40px 0 0;
            white-space: nowrap;
            min-width: 280px;
            color: var(--color-dark);
        }
        .wpwax-vm-settings__single--element{
            width: 100%;
            .wpwax-vm-setting-has-info{
                display: flex;
                align-items: center;
                .wpwax-vm-setting-info{
                    display: flex;
                    text-decoration: none;
                    margin-left: 30px;
                }
                .wpwax-vm-setting-has-info__text{
                    display: inline-block;
                    font-size: 13px;
                    font-weight: 500;
                    color: var(--color-info);
                    margin-left: 8px;
                }
            }
            .wpwax-vm-radio-list{
                .wpwax-vm-radio-list__item{
                    &:not(:last-child){
                        margin-bottom: 18px;
                    }
                    .wpwax-vm-radio{
                        label{
                            position: relative;
                            top: -2px;
                            font-size: 14px;
                            font-weight: 500;
                            margin-left: 6px;
                            color: #4D4D4D;
                        }
                    }
                }
            }
            .wpwax-vm-form__color-plate{
                max-width: 200px;
            }
            .wpwax-vm-form-group {
                .wpwax-vm-form__element{
                    min-height: 44px;
                }
                textarea.wpwax-vm-form__element{
                    min-height: 80px;
                }
            }
        }
    }
    .wpwax-vm-setting-preview-wrap{
        margin: -10px 0 0 325px;
        .wpwax-vm-indicator{
            display: flex;
            margin-bottom: 15px;
            .wpwax-vm-indicator__text{
                display: inline-block;
                font-size: 13px;
                font-weight: 500;
                margin-left: 10px;
                color: var(--color-info);
            }
        }
    }
`;

const ChatBoxPreviewWrap = Styled.div`
    max-width: 350px;
    box-shadow: 0 5px 15px rgba(0,0,0,.16);
    .wpwax-vm-chatbox-top{
        position: relative;
        padding: 20px;
        border-radius: 10px 10px 0 0;
        background-color: var(--color-dark);
        .wpwax-vm-chatbox-top__title{
            margin-bottom: 10px;
        }
        .wpwax-vm-chatbox-top__imglist{
            display: flex;
            >div{
                margin: 3px;
            }
        }
        .wpwax-vm-chatbox-btn-close{
            position: absolute;
            right: 16px;
            top: 16px;
            text-decoration: none;
            color: var(--color-white);
        }
    }
    .wpwax-vm-chatbox-content{
        padding: 10px 12px;
        min-height: 310px;
        background-color: #F7F7F7;
        .wpwax-vm-chatbox-content___inner{
            display: flex;
            align-items: start;
            position: relative;
            border-radius: 10px;
            padding: 20px;
            border-top: 3px solid var(--color-primary);
            background-color: var(--color-white);
            .wpwax-vm-chatbox-content__text{
                p{
                    font-size: 14px;
                    font-weight: 600;
                    margin: 0 0 14px;
                    color: var(--color-dark);
                }
                .wpwax-vm-btn{
                    padding: 0 22px;
                    border-radius: 17px;
                    &.wpwax-vm-btn-sm{
                        height: 34px;
                    }
                }
            }
        }
        .wpwax-vm-chatbox-content__img{
            padding: 5px;
            border-radius: 50%;
            width: 85px;
            height: 85px;
            margin-right: 15px;
            box-shadow: 0 0 15px rgba(0,0,0,.10);
            background-color: var(--color-white);
            img{
                max-width: 85px;
            }
        }
    }
    .wpwax-vm-chatbox-bottom{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 8px 15px;
        border-radius: 0 0 10px 10px;
        background-color: var(--color-white);
        .wpwax-vm-btn-send{
            display: flex;
            justify-content: center;
            align-items: center;
            width: 34px;
            height: 34px;
            border-radius: 50%;
            background-color: #E2E2E2;
            >div{
                line-height: 1;
            }
            svg {
                width: 14px;
                height: 14px;
                path{
                    fill: var(--color-white);
                }
            }
        }
    }
`;

export { SetingBoxWrap, SidebarMenuItem, SidebarWrap, SettingContentWrap, ChatBoxPreviewWrap };