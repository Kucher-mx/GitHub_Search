import React, { useContext, useEffect } from 'react';
import Search from '../components/Search';
import Card from '../components/Card';
import { gitHubContext } from '../context/gitHub/gitHubContext';
import {TrySearch} from '../components/trySearch';

const Home = () => {
    const {loading, users, clearUsers} = useContext(gitHubContext);
    useEffect(() => {
        clearUsers();
        // eslint-disable-next-line
    }, []);
    const renderCards = (usersArr) => {
        return usersArr.map((user) => {
            return(
                <div className={`col-sm-4 mb-4`} key={user.id}>
                    <Card user={user}/>
                </div>
            )
        })

    }
    return (
        <>
            <Search />
            <div className="row mt-8">
                {loading ? <p className={'text-aling-center'}>Loading...</p> : 
                users.length ? renderCards(users) 
                : <TrySearch />}
            </div>
        </>
    )
}

export default Home;