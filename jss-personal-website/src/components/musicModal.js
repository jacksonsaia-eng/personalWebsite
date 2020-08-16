import React, { useContext, useState } from 'react';
import ReactPlayer from 'react-player'
import { Window, WindowContent, WindowHeader, Button } from 'react95';
import { StoreContext } from '../store';

const MusicModal = () => {
    const [state, dispatch] = useContext(StoreContext);

    const _handleClose = () => {
        dispatch({ type: 'SET_MUSIC_MODAL', payload: false });
        dispatch({ type: 'SET_HIDE_MUSIC_MODAL_BUTTON', payload: true });
    };

    const _handleClick = () => {
        dispatch({ type: 'SET_ACTIVE_MODAL', payload: 'music' });
    };

    return (
        <Window
            onClick={_handleClick}
            style={{
                width: 1000,
                maxWidth: '94%',
                maxHeight: '100%',
                zIndex: state.activeModal === 'music' ? 2 : 1,
                position: 'fixed',
                top: '50%',
                left: '40%',
                transform: 'translate(-50%, -50%)',
                display: state.musicModal ? 'block' : 'none',
            }}
        >
            <WindowHeader style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
            }}>
                <span>music.exe</span>
                <Button onClick={_handleClose}>
                    <span style={{ fontWeight: 'bold', transform: 'translateY(-1px)' }}>
                        x
                    </span>
                </Button>
            </WindowHeader>
            <WindowContent>
                <ReactPlayer
                    url="https://soundcloud.com/jaisairin/drowning"
                    height='140px'
                    width='100%'
                />
                <ReactPlayer
                    url="https://soundcloud.com/jaisairin/say-hello"
                    height='140px'
                    width='100%'
                />
                <ReactPlayer
                    url="https://soundcloud.com/jaisairin/she-say-ft-prettyboyworldwyde"
                    height='140px'
                    width='100%'
                />
                <ReactPlayer
                    url="https://soundcloud.com/jaisairin/closer-to-the-truth-katherine-beggs-x-jaisairin-1"
                    height='140px'
                    width='100%'
                />
            </WindowContent>
        </Window >
    );
};

export default MusicModal;