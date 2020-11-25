import React, {useReducer} from 'react';
import {gitHubContext} from './gitHubContext';
import { gitHubReducer } from './gitHubReducer';
import { CLEAR_USERS, SET_LOADING, GET_REPOS, GET_USERS, GET_USER } from '../actionTypes';
import axios from 'axios';

export const GitHubState = ({children}) => {
    const initialState = {
        users: [],
        repos: [],
        loading: false,
        user: {}
    };

    const id = process.REACT_APP_CLIENT_ID;
    const secret = process.REACT_APP_CLIENT_SECRET;

    const [state, dispatch] = useReducer(gitHubReducer, initialState);

    const getUser = async (name) => {
        setLoading();
        const res = await axios.get(`
            https://api.github.com/users/${name}?client_id=${id}&client_secret=${secret}
        `)
        dispatch({
            type: GET_USER,
            payload: res.data
        })
    }

    const getUsers = async (value) => {
        setLoading();
        const res = await axios.get(`
            https://api.github.com/search/users?q=${value}&client_id=${id}&client_secret=${secret}
        `)

        dispatch({
            type: GET_USERS,
            payload: res.data.items
        })
    }

    const getRepos = async (name) => {
        setLoading();
        const res = await axios.get(`
            https://api.github.com/users/${name}/repos?client_id=${id}&client_secret=${secret}
        `)

        dispatch({
            type: GET_REPOS,
            payload: res.data
        })
    }

    const clearUsers = () => {
        dispatch({
            type: CLEAR_USERS,
        })
    }

    const setLoading = () => {
        dispatch({
            type: SET_LOADING,
        })
    }

    const {user, users, repos, loading} = state

    return (
        <gitHubContext.Provider value={{
            setLoading, getRepos, getUser, getUsers, clearUsers,
            user, users, repos, loading
        }}>
            {children}
        </gitHubContext.Provider>
    )
}