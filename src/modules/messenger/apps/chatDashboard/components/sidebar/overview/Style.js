import Styled from 'styled-components';

const TaglistWrap = Styled.div`
    .wpwax-vm-taglist-author{
        display: flex;
        align-items: center;
        .wpwax-vm-taglist-author__img{
            margin-right: 12px;
        }
        .wpwax-vm-taglist-author__name{
            display: inline-block;
            font-size: 18px;
            font-weight: 600;
            color: var(--color-dark);
        }
    }
    .wpawax-vm-taglist-search{
        display: flex;
        align-items: center;
        min-height: 40px;
        padding: 0 16px;
        border-radius: 10px;
        background-color: var(--color-bg-general);
        input{
            width: 100%;
            border: 0 none;
            background-color: transparent;
            &:focus{
                outline: none;
                border: 0 none;
                box-shadow: 0 0;
            }
        }
    }
    .wpawax-vm-taglist-inner{
        position: relative;
        margin-top: 28px;
        min-height: 120px;
        .wpwax-vm-loading-spin{
            top: 30%;
        }
        ul{
            li{
                display: flex;
                justify-content: space-between;
                &:not(:last-child){
                    margin-bottom: 14px;
                }
                .wpwax-vm-taglist-label{
                    font-size: 14px;
                    font-weight: 500;
                    color: var(--color-dark);
                }
            }
        }
        .wpwax-vm-dropdown{
            .wpwax-vm-dropdown__content{
                min-width: 160px;
                li{
                    a{
                        width: 100%;
                    }
                }
            }
        }
    }

    .wpwax-vm-modal__footer{
        .wpwax-vm-btn{
            font-size: 14px;
            border-radius: 10px;
            padding: 0 21.5px;
            height: 38px;
            .wpwax-vm-btn-icon{
                font-size: 12px;
                line-height: 1.85;
                margin-right: 3px;
            }
        }
    }
`;

const AddTagWrap = Styled.div`
    .wpwax-vm-taglist-author{
        display: flex;
        align-items: center;
        .wpwax-vm-taglist-author__name{
            display: inline-block;
            margin-left: 12px;
            font-size: 18px;
            font-weight: 600;
            color: var(--color-dark);
        }
    }
    .wpwax-vm-addtag-form{
        display: flex;
        align-items: flex-start;
        padding-top: 10px;
        margin: 0 -5px;
        .wpwax-vm-form-group{
            flex: 1;
            input{
                font-size: 14px;
                font-weight: 500;
                width: 100%;
                border: 0 none;
                padding: 0 20px;
                min-height: 40px;
                color: var(--color-dark);
                border-radius: 10px;
                background-color: var(--color-bg-general);
            }
        }
        .wpwax-vm-form-group,
        .wpwax-vm-btn{
            margin: 5px;
        }
    }
    .wpwax-vm-taglist{
        display: flex;
        flex-wrap: wrap;
        margin: 20px -7.5px 0;
        .wpwax-vm-tag__check{
            padding: 7.5px;
            flex: 0 0 auto;
            width: 33.33%;
            box-sizing: border-box;
        }
        .wpwax-vm-checkbox{
            label{
                top: -3px;
                line-height: 1.15;
                margin-left: 5px;
            }
        }
        .wpwax-vm-empty{
            width: 100%;
            margin-bottom: 10px;
        }
    }
    .wpwax-vm-btnlink{
        display: inline-block;
        font-size: 16px;
        font-weight: 500;
        text-decoration: underline;
        margin: 15px 0 10px;
        color: var(--color-dark);
        &:hover{
            color: var(--color-primary);
        }
    }
    .wpwax-vm-modal__footer{
        justify-content: flex-end;
    }
    .wpwax-vm-tags-readable-list{
        display: flex;
        flex-wrap: wrap;
        border: 1px solid var(--color-border-light);
        padding: 15px;
        border-radius: 10px;
        li{
            font-size: 14px;
            font-weight: 500;
            margin: 0;
            color: var(--color-dark);
        }
    }
    &.wpwax-vm-modal{
        .wpwax-vm-notice{
            margin-bottom: 0;
            p{
                margin: 0;
            }
        }
        .wpwax-vm-taglist-box{
            position: relative;
            min-height: 100px;
            .wpwax-vm-loading-spin{
                top: 40%;
            }
        }
    }
`;

const DeleteConfirmWrap = Styled.div`
    &.wpax-vm-delete-conf-modal{
        padding-top: 15px;
        .wpwax-vm-modal__body{
            text-align: center;
            .wpwax-vm-delete-icon{
                .dashicons{
                    font-size: 40px;
                    color: #B1B1B1;
                }
            }
            p{
                font-size: 20px;
                font-weight: 500;
                margin: 40px 0 0;
                color: var(--color-dark);
            }
        }
        .wpwax-vm-modal__footer{
            padding-bottom: 30px;
            background-color: transparent;
            .wpwax-vm-btn{
                width: 100%;
                margin: 5px;
                border-radius: 10px;
                justify-content: center;
                &.wpwax-vm-btn-gray{
                    color: var(--color-dark);
                    background-color: var(--color-bg-gray);
                }
            }
        }
    }
`;

const TagFilterDropdown = Styled.div`
    position: absolute;
    width: calc(100% - 20%);
    left: 4%;
    top: 45px;
    padding: 20px;
    z-index: 10;
    display: none;
    border-radius: 10px;
    box-shadow: 0 5px 30px rgba( 0, 0, 0, .10 );
    background-color: var(--color-white);
    &.wpwax-vm-tagfilter-show{
        display: block;
    }
    .wpwax-vm-tag-search{
        display: flex;
        align-items: center;
        padding: 0 16px;
        border-radius: 10px;
        margin-bottom: 28px;
        background-color: var(--color-bg-general);
        .wpwax-vm-input-icon{
            position: relative;
            top: 1px;
            line-height: 1;
            svg{
                width: 12px;
                height: 12px;
            }
        }
        input{
            width: 100%;
            min-height: 38px;
            background-color: transparent !important;
            border: 0 none;
            &:focus{
                outline: 0;
                box-shadow: 0 0;
            }
        }
    }
    .wpwax-vm-tag-filter-list{
        .wpwax-vm-checkbox{
            label{
                top: -2px;
            }
            input{
                margin-right: 12px;
            }
        }
    }
    .wpwax-vm-tag-filter-action{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 35px;
        .wpwax-vm-tag-filter-action__clear{
            font-size: 14px;
            font-weight: 500;
            text-decoration: none;
            color: var(--font-color);
            &:hover{
                color: var(--color-primary)
            }
        }
    }
    .wpwax-vm-tag-filter-list{
        .wpwax-vm-tag-filter__check{
            &:not(:last-child){
                margin-bottom: 24px;
            }
        }
    }
`;

export  { TaglistWrap, AddTagWrap, DeleteConfirmWrap, TagFilterDropdown };