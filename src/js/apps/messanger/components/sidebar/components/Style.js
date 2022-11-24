import Styled from 'styled-components';

const TaglistWrap = Styled.div`
    
    .wpawax-vm-taglist-search{
        display: flex;
        align-items: center;
        min-height: 40px;
        padding: 0 16px;
        border-radius: 10px;
        margin-top: 5px;
        border: 2px solid transparent;
        background-color: var(--color-bg-general);
        &:focus{
            border-color: var(--color-dark);
        }
        input{
            width: 100%;
            border: 0 none;
            background-color: transparent;
            &:focus{
                outline: none;
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
        >ul{
            height: 215px;
            overflow-y: auto;
            .infinite-scroll-component {
                ${({ theme }) => (theme.direction === 'ltr' ? 'padding-right' : 'padding-left')}: 10px;
                min-height: 200px;
            }
            &::-webkit-scrollbar {
                width: 11px;
            }

            &::-webkit-scrollbar-track {
                background: var(--color-light);
            }

            &::-webkit-scrollbar-thumb {
                background-color: var(--color-bg-gray);
                border-radius: 6px;
                border: 3px solid var(--color-light);
            }
            li{
                display: flex;
                justify-content: space-between;
                &:not(:last-child){
                    margin-bottom: 20px;
                }
                .wpwax-vm-taglist-label{
                    font-size: 14px;
                    font-weight: 500;
                    color: var(--color-dark);
                }
                &:nth-last-child(-n+3){
                    .wpwax-vm-dropdown__content{
                        top: auto;
                        bottom: 15px;
                    }
                }
                &:nth-child(1),
                &:nth-child(2),
                &:nth-child(3){
                    .wpwax-vm-dropdown__content{
                        top: 15px;
                        bottom: auto;
                    }
                    
                }
            }
        }
        .wpwax-vm-dropdown{
            .wpwax-vm-dropdown__content{
                min-width: 160px;
                ${({ theme }) => (theme.direction === 'ltr' ? 'left' : 'right')}: auto;
                ${({ theme }) => (theme.direction === 'ltr' ? 'right' : 'left')}: 0;
                li{
                    &:not(:last-child){
                        margin-bottom: 0;
                    }
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
                ${({ theme }) => (theme.direction === 'ltr' ? 'margin-right' : 'margin-left')}: 3px;
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
            font-size: 18px;
            font-weight: 600;
            ${({ theme }) => (theme.direction === 'ltr' ? 'margin-right' : 'margin-left')}: 25px;
            color: var(--color-dark);
        }
    }
    .wpwax-vm-addtag-form{
        display: flex;
        align-items: flex-start;
        margin: 0 -5px;
        .wpwax-vm-form-group{
            flex: 1;
            input{
                font-size: 14px;
                font-weight: 500;
                width: 100%;
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
        max-height: 240px;
        overflow-y: auto;
        margin: 20px -7.5px 4px;
        @media only screen and (max-width: 1399px){
            max-height: 160px;
        }
        @media only screen and (max-width: 1199px){
            max-height: 120px;
            margin: 20px -5px 4px;
        }
        &::-webkit-scrollbar {
            width: 11px;
        }

        &::-webkit-scrollbar-track {
            background: var(--color-light);
        }

        &::-webkit-scrollbar-thumb {
            background-color: var(--color-bg-gray);
            border-radius: 6px;
            border: 3px solid var(--color-light);
        }
        .wpwax-vm-tag__check{
            padding: 7.5px;
            flex: 0 0 auto;
            width: 33.33%;
            box-sizing: border-box;
            @media only screen and (max-width: 1399px){
                padding: 5px;
            }
        }
        .wpwax-vm-checkbox{
            label{
                top: 0px;
                line-height: 1.15;
                ${({ theme }) => (theme.direction === 'ltr' ? 'margin-left' : 'margin-right')}: 8px;
                color: var(--color-dark);
            }
        }
        .wpwax-vm-empty{
            width: 100%;
            margin-bottom: 10px;
        }
    }
    .wpwax-vm-btnlink{
        display: inline-block;
        font-size: 14px;
        font-weight: 500;
        line-height: 2.5;
        width: 100%;
        text-align: center;
        box-sizing: border-box;
        margin: 15px 0 10px;
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
            line-height: 1.55;
            margin: 0;
            color: var(--color-dark);
        }
    }
    &.wpwax-vm-modal{
        .wpwax-vm-modal__header,
        .wpwax-vm-modal__footer{
            padding: 15px 30px
        }
        .wpwax-vm-notice{
            margin-bottom: 5px;
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
            .wpwax-vm-loadmore{
                font-size: 14px;
                display: flex;
                align-items: center;
                justify-content: center;
                width: 100%;
                min-height: 38px;
                text-decoration: none;
                border-radius: 6px;
                margin-top: 15px;
                transition: .3s;
                color: var(--color-primary);
                border: 1px solid var(--color-primary);
                svg{
                    width: 24px;
                    height: 24px;
                    ${({ theme }) => (theme.direction === 'ltr' ? 'margin-left' : 'margin-right')}: 5px;
                    path{
                        fill: var(--color-primary);
                    }
                }
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
    width: 100%;
    ${({ theme }) => (theme.direction === 'ltr' ? 'left' : 'right')}: 0;
    top: 45px;
    padding: 20px;
    z-index: 0;
    display: none;
    box-sizing: border-box;
    border-radius: 10px;
    box-shadow: 0 5px 30px rgba( 0, 0, 0, .10 );
    cursor: auto;
    z-index: 10;
    background-color: var(--color-white);
    &.wpwax-vm-tagfilter-show{
        display: block;
    }
    .wpwax-vm-tag-search{
        position: absolute;
        top: -45px;
        left: 0px;
        padding: 0;
        z-index: 10;
        display: flex;
        align-items: center;
        padding: 0 16px;
        border-radius: 10px;
        margin-bottom: 28px;
        width: calc(100% - 70px);
        background-color: #DDDDDD;
        .wpwax-vm-input-icon{
            position: relative;
            top: 0;
            line-height: 1;
        }
        input{
            width: 100%;
            min-height: 40px;
            background-color: #DDDDDD !important;
            border: 0 none;
            padding-left: 12px;
            &:focus{
                outline: 0;
                box-shadow: 0 0;
            }
        }
    }
    .wpwax-vm-tag-filter-list-wrap{
        min-height: 60px;
        .wpwax-vm-all-tag-title{
            font-size: 14px;
            margin: 0 0 18px;
            color: var(--color-dark);
        }
    }
    .wpwax-vm-tag-filter-list{
        overflow-y: auto;
        height: 140px;
        &::-webkit-scrollbar {
            width: 11px;
        }

        &::-webkit-scrollbar-track {
            background: var(--color-light);
        }

        &::-webkit-scrollbar-thumb {
            background-color: var(--color-bg-gray);
            border-radius: 6px;
            border: 3px solid var(--color-light);
        }
        .wpwax-vm-checkbox{
            label{
                top: 0px;
                color: var(--color-dark);
            }
            input{
                ${({ theme }) => (theme.direction === 'ltr' ? 'margin-right' : 'margin-left')}: 12px;
            }
        }
        .wpwax-vm-more-loader{
            svg{
                height: 20px;
            }
        }
    }
    .wpwax-vm-tag-filter-action{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 30px;
        .wpwax-vm-tag-filter-action__clear{
            font-size: 14px;
            font-weight: 500;
            text-decoration: none;
            color: var(--font-color);
            &:hover{
                color: var(--color-primary)
            }
        }
        &.wpwax-vm-tag-filter-action-disabled{
            cursor: not-allowed;
            a{
                opacity: .4;
                cursor: not-allowed;
                pointer-events: none;
            }
        }
    }
    .wpwax-vm-tag-filter-list{
        .wpwax-vm-tag-filter__check{
            &:not(:last-child){
                margin-bottom: 20px;
            }
        }
        .wpwax-vm-empty{
            font-size: 14px;
            min-height: 60px;
        }
    }
`;

export  { TaglistWrap, AddTagWrap, DeleteConfirmWrap, TagFilterDropdown };