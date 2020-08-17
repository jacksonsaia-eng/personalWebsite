import React, { useState, useContext } from 'react';
import { StoreContext } from '../store';
import { Button, List, ListItem } from 'react95';
import ClickAwayListener from 'react-click-away-listener';

const Menu = () => {
    const [state, dispatch] = useContext(StoreContext);

    const _handleClick = () => {
        dispatch({ type: 'SET_MENU', payload: !state.menu });
    };

    const _handleClose = () => {
        dispatch({ type: 'SET_MENU', payload: false });
    };

    const _handleListItemClick = name => {
        if (name === 'about') {
            dispatch({ type: 'SET_ACTIVE_MODAL', payload: 'about' });
            dispatch({ type: 'SET_ABOUT_MODAL', payload: true });
            dispatch({ type: 'SET_HIDE_ABOUT_MODAL_BUTTON', payload: false });
        } else if (name === 'music') {
            dispatch({ type: 'SET_ACTIVE_MODAL', payload: 'music' });
            dispatch({ type: 'SET_MUSIC_MODAL', payload: true });
            dispatch({ type: 'SET_HIDE_MUSIC_MODAL_BUTTON', payload: false });
        } else if (name === 'photo') {
            dispatch({ type: 'SET_ACTIVE_MODAL', payload: 'photo' });
            dispatch({ type: 'SET_PHOTO_MODAL', payload: true });
            dispatch({ type: 'SET_HIDE_PHOTO_MODAL_BUTTON', payload: false });
        } else if (name === 'video') {
            dispatch({ type: 'SET_ACTIVE_MODAL', payload: 'video' });
            dispatch({ type: 'SET_VIDEO_MODAL', payload: true });
            dispatch({ type: 'SET_HIDE_VIDEO_MODAL_BUTTON', payload: false });
        }
        // else if (name === 'github') {
        //   const win = window.open('https://github.com/sorxrob/poke95', '_blank');
        //   win.focus();
        // }
    };

    const _handleClickAway = () => {
        if (state.menu) {
            dispatch({ type: 'SET_MENU', payload: false });
        }
    };

    return (
        <div style={{ position: 'relative', display: 'inline-block' }}>
            <ClickAwayListener onClickAway={_handleClickAway}>
                {state.menu && (
                    <List
                        style={{ position: 'absolute', left: '0', top: '100%' }}
                        onClick={_handleClose}
                    >
                        <ListItem onClick={() => _handleListItemClick('about')}>
                            <span role='img' aria-label='📋'>
                                📋
                            </span>
                            <span>about</span>
                        </ListItem>
                        <ListItem onClick={() => _handleListItemClick('music')}>
                            <span role='img' aria-label='🎧'>
                                🎧
                            </span>
                            <span>music</span>
                        </ListItem>
                        <ListItem onClick={() => _handleListItemClick('photo')}>
                            <span role='img' aria-label='📷'>
                                📷
                            </span>
                            <span>photo</span>
                        </ListItem>
                        <ListItem onClick={() => _handleListItemClick('video')}>
                            <span role='img' aria-label='🎥'>
                                🎥
                            </span>
                            <span>video</span>
                        </ListItem>
                    </List>
                )}
                <Button
                    onClick={_handleClick}
                    active={state.menu}
                    style={{ fontWeight: 'bold', marginRight: 6 }}
                >
                    <span role='img' aria-label='💫'>
                        💫
                </span>
          Start
        </Button>
            </ClickAwayListener>
        </div>
    );
};

export default Menu;