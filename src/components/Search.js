import React, { useContext, useState } from 'react';
import { alertContext } from '../context/alert/alertContext';
import { gitHubContext } from '../context/gitHub/gitHubContext';

const Search = () => {
    const [ , setState] = useState('');
    const {show, hide} = useContext(alertContext);
    const {getUsers} = useContext(gitHubContext);

    const onSubmit = (e) => {
        if(e.key !== 'Enter'){
            return;
        }

        if(e.target.value.trim()){
            getUsers(e.target.value.trim());
            hide();
            // show(`make a request with: ${state}`, 'dark');
        } else {
            show('Enter the username', 'danger');
        }
    }

    return (
        <div className="form-group">
            <input 
            className="form-control form-control-lg" 
            type="text" 
            placeholder="enter a nickname" 
            onChange={e => setState(e.target.value)}
            onKeyDown={onSubmit}
            />
        </div>
    )
}

export default Search;