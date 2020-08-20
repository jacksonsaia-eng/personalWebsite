import React, { useContext } from 'react';
import { StoreContext } from '../store';
import { Button } from 'react95';

const MusicModalButton = () => {
    const [state, dispatch] = useContext(StoreContext);

    const _handleClick = () => {
        dispatch({ type: 'SET_ACTIVE_MODAL', payload: 'music' });
        dispatch({ type: 'SET_MUSIC_MODAL', payload: !state.musicModal });
    };

    return (
        <>
            {!state.hideMusicModalButton && (
                <Button
                    onClick={_handleClick}
                    active={state.musicModal}
                    className="bold"
                    style={{ marginRight: 3 }}
                >
                    <span role='img' aria-label='🎧'>
                        🎧
                    </span>
                </Button>
            )}
        </>
    );
};

export default MusicModalButton;