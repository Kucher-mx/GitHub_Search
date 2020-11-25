import React, { useContext, useEffect } from 'react';
import { gitHubContext } from '../context/gitHub/gitHubContext';
// import {Link} from 'react-router-dom';
import classes from './profileStyles.module.css';
import {Repos} from './Repos';

const Profile = ({match}) => {
    const {user, repos, getUser, getRepos, loading} = useContext(gitHubContext);
    const userName = match.params.name;
    console.log(!!repos);
    
    useEffect(() => {
        getRepos(userName);
        getUser(userName);
        // eslint-disable-next-line
    }, [])

    if(loading){
        return (<p className={'text-aling-center'}>Loading...</p>);
    }

    const {avatar_url, bio, blog, company,
    followers, following, html_url,
    location, login, name, public_repos,
    public_gists} = user;

    return (
        <>
            <div className="card mb-4">
                <div className="card-body">
                    <div className="row">
                        <div className="col-sm-3 text-center">
                            <img src={avatar_url} alt={login} className={classes.Profile_img}/>
                            <h2>{name}</h2>
                            {location && <p>Country: {location}</p>}
                        </div>
                        <div className={`col ${classes.ProfileRight}`}>
                            {
                                bio &&  <>
                                    <h3>About info:</h3>
                                    <p>{bio}</p>
                                </>
                            }
                            <a href={html_url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="btn btn-dark mb-4"
                            >Open his profile</a>
                            <ul>
                                {login && <li>
                                    <strong>Username: </strong> {login}
                                    </li>}
                                {company && <li>
                                    <strong>Company: </strong> {company}
                                    </li>}
                                {blog && <li>
                                    <strong>Blog: </strong> <a 
                                    href={blog} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="btn m-0 p-0"
                                    >His blog</a>
                                    </li>}
                            </ul>
                            <div className="badge badge-dark mt-2 mr-2 p-2">Followers: {followers}</div>
                            <div className="badge badge-primary mt-2 mr-2 p-2">Following: {following}</div>
                            <div className="badge badge-success mt-2 mr-2 p-2">Repositories: {public_repos}</div>
                            <div className="badge badge-info mt-2 p-2">Gists: {public_gists}</div>
                        </div>
                    </div>
                </div>
            </div>
            
            <strong className={`text-center d-block ${classes.FontSize}`}>Repositories:</strong> 
            <hr />
            <div className={classes.Repos}>
                {!!repos ? <Repos repos={repos} /> : <p className={classes.Sorry}>Sorry no repositories there :(</p>}
            </div>
            
        </>
    )
}

export default Profile;