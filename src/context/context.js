import React, { useState, useEffect } from 'react';
import mockUser from './mockData.js/mockUser';
import mockRepos from './mockData.js/mockRepos';
import mockFollowers from './mockData.js/mockFollowers';
import axios from 'axios';

const rootUrl = 'https://api.github.com';

const GithubContext = React.createContext()

// Provider, Consumer - GithubContext.Provider

const GithubProvider = ({children}) => {
    const [githubUser, setGithubUser]  = useState(mockUser)
    const [repos, setRepos]  = useState(mockRepos)
    const [followers, setFollowers]  = useState(mockFollowers)
 
    // requests loading
    const [requests, setRequests] = useState(0)
    const [loading, setLoading] = useState(false)
    // check rate
    const checkRequests = () => {
        axios(`${rootUrl}/rate_limit`).then((data) => {

        }).catch((error) => console.log(error))
    }
    // error

    useEffect(checkRequests, [])
    
    return <GithubContext.Provider 
        value={{
            githubUser,
            repos,
            followers
        }}
    >{children}</GithubContext.Provider>
}

export {GithubProvider, GithubContext}