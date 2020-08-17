import React, { useContext, useState } from 'react';
import { Window, WindowContent, WindowHeader, Button, Table } from 'react95';
import { StoreContext } from '../store';
import image from '../images/gallery/IMG_8046.JPG';
import Draggable from 'react-draggable';

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
        <Draggable>
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
                <WindowHeader style={{
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
                    <Table style={{ width: '100%', overflowY: 'scroll' }}>
                        <img src={image} style={{ width: '100%' }} />
                        {/* <img src={image} style={{ width: '100%' }} /> */}
                    </Table>
                </WindowContent>
            </Window >
        </Draggable>
    );
};

export default PhotoModal;