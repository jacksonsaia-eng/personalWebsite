import React, { useContext } from 'react';
import { StoreContext } from '../store';
import { Button } from 'react95';

const AboutModalButton = () => {
    const [state, dispatch] = useContext(StoreContext);

    const _handleClick = () => {
        dispatch({ type: 'SET_ACTIVE_MODAL', payload: 'about' });
        dispatch({ type: 'SET_ABOUT_MODAL', payload: !state.aboutModal });
    };

    return (
        <>
            {!state.hideAboutModalButton && (
                <Button
                    onClick={_handleClick}
                    active={state.aboutModal}
                    className="bold"
                    style={{ marginRight: 3 }}
                >
                    <span role='img' aria-label='📋'>
                        📋
                    </span>
                </Button>
            )}
        </>
    );
};

export default AboutModalButton;