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
    getUserRepo('AhmedShaykh')
  }, [])

  return (
    <div>
      <h1>
        {usersRepos?.map((items) => {
          return (
            <li key={items?.id}>
              {items?.name}
            </li>
          )
        })}
      </h1>
    </div>
  )
}

export default Memo;