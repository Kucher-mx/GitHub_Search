import React, { useReducer } from 'react';
import { alertContext } from './alertContext';
import { HIDE_ALERT, SHOW_ALERT } from '../actionTypes';
import { alertReducer } from './alertReducer';

export const AlertState = ({children}) => {
    const [alert, dispatch] = useReducer(alertReducer, null);

    const show = (text, theme = 'dark') => {
        dispatch({type: SHOW_ALERT, payload: {text, theme}})
    }

    const hide = () => dispatch({type: HIDE_ALERT});

    return (
        <alertContext.Provider value={{
            show, hide, alert 
        }}>
            {children}
        </alertContext.Provider>
    )
}