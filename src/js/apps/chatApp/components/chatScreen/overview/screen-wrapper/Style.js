import Styled from 'styled-components';

const ScreenWrapper = Styled.div`
    position: fixed;
    bottom: 30px;
    right: 25px;
    min-height: 500px;
    .wpwax-vm-chatbox-container{
        position: relative;
        z-index: 101;
        &:after,
        &:before{
            position: absolute;
            left: 0;
            top: 0px;
            width: 100%;
            height: 336px;
            content: '';
            opacity: .9;
            z-index: 10;
            border-radius: 25px;
            background-image: linear-gradient(to bottom, rgba(0,0,0,1) , rgba(0,0,0,0));
        }
        &:before{
            top: auto;
            bottom: 0;
            height: 340px;
            background-image: linear-gradient(to top, rgba(0,0,0,1) , rgba(0,0,0,0));
        }
        .wpwax-vm-chatbox-btn-close{
            position: absolute;
            right: -20px;
            top: -20px;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 38px;
            height: 38px;
            border-radius: 50%;
            cursor: pointer;
            background-color: var(--color-dark);
            color: var(--color-white);
        }
        .wpwax-vm-chatbox-header,
        .wpwax-vm-chatbox-inner,
        .wpwax-vm-chatbox-footer{
            position: relative;
            z-index: 100
        }

    }
`;

export default ScreenWrapper;