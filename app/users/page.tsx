import Link from 'next/link';
import React from 'react'

interface User{
    id: number;
    name: string;
    email: string;
}

const UsersPage = async () => {

    const res = await fetch('https://jsonplaceholder.typicode.com/users', { cache: 'no-store' })
    const users: User[] = await res.json()

  return (
    <>
      <table  className='border border-separate border-spacing-x-20 border-spacing-y-4 text-center'>
        <caption className='text-4xl text-center font-bold'>Users</caption>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className='m-5 rounded-xl bg-zinc-800 px-8 py-2 hover:bg-zinc-500'><Link href='/users/new'>Click here to see the new user page.</Link></button>
    </>
  )
}

export default UsersPage