import React from 'react'
import UsersTable from './UsersTable/UsersTable'
import UsersSearch from './UsersSearch/UsersSearch'

const Users = () => {
    return (
        <div>
            <UsersSearch />
            <UsersTable />
        </div>
    )
}

export default Users
