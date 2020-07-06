import React, { useContext, useState } from 'react'
import {Form,FormGroup,Label,Input,Button} from 'reactstrap'
import {Link, useHistory} from 'react-router-dom'
import { GlobalContext } from './context/GlobalState'
import {v4 as uuid} from 'uuid';

function AddUser() {
    const [name, setName] = useState('')
    const {addUser} = useContext(GlobalContext)
    const history = useHistory();
    const onSubmit = () => {
        const newUser = {
            id:uuid(),
            name: name
        }
        addUser(newUser)
        history.push('/');
    }
    return (
        <Form onSubmit={()=>onSubmit()}>
            <FormGroup>
                <Label>Name</Label>
                <Input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter Name"></Input>
            </FormGroup>
            <Button type="submit">Submit</Button>
            <Link to="/" className="btn btn-danger ml-2">Cancel</Link>
        </Form>
    )
}

export default AddUser
