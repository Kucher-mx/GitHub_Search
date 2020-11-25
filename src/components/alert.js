import React, { useContext } from 'react';
import { alertContext } from '../context/alert/alertContext';

const Alert = () => {
    const {hide, alert} = useContext(alertContext);

    if(!alert) {
        return null;
    }
    let alertTheme = 'alert-' + alert.theme;
    const classes = ['alert', 'alert-dismissible'];
    classes.push(alertTheme);
    return (
        <div className={classes.join(' ')} role="alert">
            {alert.text}
            <button type="button" className="close" onClick={hide} aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
    )
}

export default Alert;