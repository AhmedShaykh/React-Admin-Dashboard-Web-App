import React, { useState, useEffect, useMemo } from 'react';
import { GitApi } from '../Service/api.service';

const Memo = () => {

  const [usersRepos, setUsersRepos] = useState([]);

  const apiService = useMemo(() => new GitApi(), []);

  const getUserRepo = async (username) => {
    const response = await apiService.getUserRepos(username);
    console.log('response: ', response)
    setUsersRepos(response);
  }

  useEffect(() => {
    getUserRepo('SyedMuhammedBilal');
  }, [])

  return (
    <div className='data'>
      <h1>
        <ol>
          {usersRepos?.map((items) => {
            return (
              <li key={items?.id}>
                {items?.name}
              </li>
            )
          })}
        </ol>
      </h1>
    </div>
  )
}

export default Memo;