import React, { useContext } from 'react';
import ReactPlayer from 'react-player'
import { Window, WindowContent, WindowHeader, Button, Cutout } from 'react95';
import { StoreContext } from '../store';
import Draggable from 'react-draggable';

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
        <Draggable handle='.window-header'>
            <Window
                onClick={_handleClick}
                style={{
                    width: 1000,
                    maxWidth: '94%',
                    maxHeight: '100%',
                    top: '10%',
                    left: '2%',
                    zIndex: state.activeModal === 'music' ? 2 : 1,
                    position: 'fixed',
                    transform: 'translate(-50%, -50%)',
                    display: state.musicModal ? 'block' : 'none',
                }}
            >
                <WindowHeader className='window-header' style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                }}>
                    <span>music.mp3</span>
                    <Button onClick={_handleClose}>
                        <span style={{ fontWeight: 'bold', transform: 'translateY(-1px)' }}>
                            x
                    </span>
                    </Button>
                </WindowHeader>
                <WindowContent>
                    <Cutout>
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
                    </Cutout>
                </WindowContent>
            </Window >
        </Draggable>
    );
};

export default MusicModal;