import React, { useContext } from 'react';
import ReactPlayer from 'react-player'
import { Window, WindowContent, WindowHeader, Button, Cutout } from 'react95';
import { StoreContext } from '../store';
import Draggable from 'react-draggable';

const VideoModal = () => {
    const [state, dispatch] = useContext(StoreContext);

    const _handleClose = () => {
        dispatch({ type: 'SET_VIDEO_MODAL', payload: false });
        dispatch({ type: 'SET_HIDE_VIDEO_MODAL_BUTTON', payload: true });
    };

    const _handleClick = () => {
        dispatch({ type: 'SET_ACTIVE_MODAL', payload: 'video' });
    };

    return (
        <Draggable handle='.window-header' defaultPosition={{ x: -425, y: 125 }}>
            <Window
                onClick={_handleClick}
                style={{
                    width: 600,
                    maxWidth: '94%',
                    maxHeight: '100%',
                    zIndex: state.activeModal === 'video' ? 2 : 1,
                    position: 'fixed',
                    transform: 'translate(-50%, -50%)',
                    display: state.videoModal ? 'block' : 'none',
                }}
            >
                <WindowHeader className='window-header' style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                }}>
                    <span>video.mp4</span>
                    <Button onClick={_handleClose}>
                        <span style={{ fontWeight: 'bold', transform: 'translateY(-1px)' }}>
                            x
                    </span>
                    </Button>
                </WindowHeader>
                <WindowContent>
                    <Cutout>
                        <ReactPlayer
                            url="https://www.youtube.com/watch?v=Sco5EFnU6K8"
                            width='100%'
                        />
                    </Cutout>
                </WindowContent>
            </Window >
        </Draggable>
    );
};

export default VideoModal;