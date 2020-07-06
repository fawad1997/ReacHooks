import React, { useState, useEffect, useContext } from 'react'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
import { Link, useHistory } from 'react-router-dom'
import { GlobalContext } from './context/GlobalState'
// import {v4 as uuid} from 'uuid'

function EditUser(props) {
    const [nameObj, setNameObj] = useState({ id: '', name: '' })
    const history = useHistory()
    const currentUserId = props.match.params.id;
    const {users, editUser} = useContext(GlobalContext)
    useEffect(() => {
        const userId = currentUserId
        const selectedUser = users.find(user=>(user.id === userId))
        setNameObj(selectedUser)
    }, [currentUserId, users])

    const onSubmit = () => {
        editUser(nameObj)
        history.push('/');
    }
    return (
        <Form onSubmit={onSubmit}>
            <FormGroup>
                <Label>Name</Label>
                <Input type="text" value={nameObj.name} onChange={(e) => setNameObj({ ...nameObj, name: e.target.value })} placeholder="Enter Name"></Input>
            </FormGroup>
            <Button type="submit">Edit Name</Button>
            <Link to="/" className="btn btn-danger ml-2">Cancel</Link>
        </Form>
    )
}

export default EditUser
