import React, { useState, useEffect } from 'react';

const ListUsersPage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <div>
      <h1>List Users</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <img src={`https://i.pravatar.cc/40?u=${user.id}`} alt={user.name} />
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListUsersPage;
