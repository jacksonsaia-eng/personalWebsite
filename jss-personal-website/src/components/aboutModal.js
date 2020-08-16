import React, { useContext } from 'react';
import { Window, WindowContent, WindowHeader, Button, Anchor } from 'react95';
import { StoreContext } from '../store';

const AboutModal = () => {
    const [state, dispatch] = useContext(StoreContext);

    const _handleClose = () => {
        dispatch({ type: 'SET_ABOUT_MODAL', payload: false });
        dispatch({ type: 'SET_HIDE_ABOUT_MODAL_BUTTON', payload: true });
    };

    const _handleClick = () => {
        dispatch({ type: 'SET_ACTIVE_MODAL', payload: 'about' });
    };

    return (
        <Window
            onClick={_handleClick}
            style={{
                width: 500,
                maxWidth: '94%',
                maxHeight: '100%',
                zIndex: state.activeModal === 'about' ? 2 : 1,
                position: 'fixed',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                display: state.aboutModal ? 'block' : 'none',
            }}
        >
            <WindowHeader style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
            }}>
                <span>about</span>
                <Button onClick={_handleClose}>
                    <span style={{ fontWeight: 'bold', transform: 'translateY(-1px)' }}>
                        x
                    </span>
                </Button>
            </WindowHeader>
            <WindowContent>
                <p>
                    welcome! my name is jackson saia and i am passionate about the intersection of art and
                    technology. i am a junior at brown university, studying electrical engineering. i focus
                    mainly on music outside of school, but also love taking photos and making short videos
                    to document my life. i have also been working as a software developer on the side for
                    some time now. this website is a side project to showcase all the things that i
                    love to do. enjoy!
                </p>
            </WindowContent>
        </Window >
    );
};

export default AboutModal;