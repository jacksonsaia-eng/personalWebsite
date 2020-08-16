import React, { createContext, useReducer } from 'react';

export const StoreContext = createContext({});

const initialState = {
    aboutModal: false,
    activeModal: '',
    hideAboutModalButton: true,
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