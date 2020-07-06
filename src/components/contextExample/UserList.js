import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ListGroup, ListGroupItem, Button } from 'reactstrap'
import { GlobalContext } from './context/GlobalState'

export const UserList = () => {
    const {users} = useContext(GlobalContext)
    return (
        <ListGroup className="mt-4">
        {
            users.map(user=>(
                <ListGroupItem key={user.id} className="d-flex">
                <strong>{user.name}</strong>
                <div className="ml-auto">
                        <Link to="/edit/1" className="btn btn-info mr-1">Edit</Link>
                        <Button color="danger">Delete</Button>
                    </div>
                </ListGroupItem>
            ))
        }

        </ListGroup>
    )
}
