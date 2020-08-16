import React, { useContext } from 'react';
import { StoreContext } from '../store';
import { Button } from 'react95';

const VideoModalButton = () => {
    const [state, dispatch] = useContext(StoreContext);

    const _handleClick = () => {
        dispatch({ type: 'SET_ACTIVE_MODAL', payload: 'video' });
        dispatch({ type: 'SET_VIDEO_MODAL', payload: !state.videoModal });
    };

    return (
        <>
            {!state.hideVideoModalButton && (
                <Button
                    onClick={_handleClick}
                    active={state.videoModal}
                    className="bold"
                    style={{ marginRight: 3 }}
                >
                    <span role='img' aria-label='🎥'>
                        🎥
                    </span>
                video
                </Button>
            )}
        </>
    );
};

export default VideoModalButton;