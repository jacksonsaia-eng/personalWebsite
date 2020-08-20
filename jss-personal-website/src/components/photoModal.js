import React, { useContext } from 'react';
import { Window, WindowContent, WindowHeader, Button, Cutout } from 'react95';
import { StoreContext } from '../store';
import Draggable from 'react-draggable';
import Gallery from "react-photo-gallery";
import { photos } from './photos';

const PhotoModal = () => {
    const [state, dispatch] = useContext(StoreContext);

    const _handleClose = () => {
        dispatch({ type: 'SET_PHOTO_MODAL', payload: false });
        dispatch({ type: 'SET_HIDE_PHOTO_MODAL_BUTTON', payload: true });
    };

    const _handleClick = () => {
        dispatch({ type: 'SET_ACTIVE_MODAL', payload: 'photo' });
    };

    return (
        <Draggable handle='.window-header' defaultPosition={{ x: 300, y: 50 }}>
            <Window
                onClick={_handleClick}
                style={{
                    width: 800,
                    height: 600,
                    maxWidth: '94%',
                    zIndex: state.activeModal === 'photo' ? 2 : 1,
                    position: 'fixed',
                    transform: 'translate(-50%, -50%)',
                    display: state.photoModal ? 'block' : 'none',
                }}
            >
                <WindowHeader className='window-header' style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                }}>
                    <span>photo.jpg</span>
                    <Button onClick={_handleClose}>
                        <span style={{ fontWeight: 'bold', transform: 'translateY(-1px)' }}>
                            x
                    </span>
                    </Button>
                </WindowHeader>
                <WindowContent>
                    <Cutout style={{ height: 500 }}>
                        <div style={{ maxHeight: '100% ', overflowY: 'scroll' }}>
                            <Gallery photos={photos} />
                        </div>
                    </Cutout>
                </WindowContent>
            </Window >
        </Draggable>
    );
};

export default PhotoModal;