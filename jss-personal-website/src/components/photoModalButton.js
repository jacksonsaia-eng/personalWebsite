import React, { useContext } from 'react';
import { StoreContext } from '../store';
import { Button } from 'react95';

const PhotoModalButton = () => {
    const [state, dispatch] = useContext(StoreContext);

    const _handleClick = () => {
        dispatch({ type: 'SET_ACTIVE_MODAL', payload: 'photo' });
        dispatch({ type: 'SET_PHOTO_MODAL', payload: !state.photoModal });
    };

    return (
        <>
            {!state.hidePhotoModalButton && (
                <Button
                    onClick={_handleClick}
                    active={state.photoModal}
                    className="bold"
                    style={{ marginRight: 3 }}
                >
                    <span role='img' aria-label='📷'>
                        📷
                    </span>
                photo
                </Button>
            )}
        </>
    );
};

export default PhotoModalButton;