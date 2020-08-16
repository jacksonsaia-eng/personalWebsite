import React, { createContext, useReducer } from 'react';

export const StoreContext = createContext({});

const initialState = {
    aboutModal: true,
    musicModal: true,
    videoModal: true,
    activeModal: 'about',
    hideAboutModalButton: false,
    hideMusicModalButton: false,
    hideVideoModalButton: false,
    tab: 0,
};

function reducer(state, action) {
    switch (action.type) {
        case 'SET_MENU':
            return {
                ...state,
                menu: action.payload,
            };
        case 'SET_ABOUT_MODAL':
            return {
                ...state,
                aboutModal: action.payload,
            };
        case 'SET_MUSIC_MODAL':
            return {
                ...state,
                musicModal: action.payload,
            };
        case 'SET_VIDEO_MODAL':
            return {
                ...state,
                videoModal: action.payload,
            };
        case 'SET_TAB':
            return {
                ...state,
                tab: action.payload,
            };
        case 'SET_HIDE_ABOUT_MODAL_BUTTON':
            return {
                ...state,
                hideAboutModalButton: action.payload,
            };
        case 'SET_HIDE_MUSIC_MODAL_BUTTON':
            return {
                ...state,
                hideMusicModalButton: action.payload,
            };
        case 'SET_HIDE_VIDEO_MODAL_BUTTON':
            return {
                ...state,
                hideVideoModalButton: action.payload,
            };
        case 'SET_ACTIVE_MODAL':
            return {
                ...state,
                activeModal: action.payload,
            };
        default:
            return state;
    }
}

const Store = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <StoreContext.Provider value={[state, dispatch]}>
            {children}
        </StoreContext.Provider>
    );
};

export default Store;