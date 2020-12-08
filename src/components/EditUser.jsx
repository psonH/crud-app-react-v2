import React, { useState, useEffect } from 'react'
import { Form, Row, Col, Button } from 'react-bootstrap'
import { Redirect, Switch } from 'react-router-dom'

const EditUser = ({ userId }) => {
    const initialState = {
        id: null,
        name: "",
        email: "",
        phone: "",
        title: "",
        company: "",
        website: ""
    }

    const [user, setUser] = useState(initialState)
    // const [editedData, editData] = useState(initialState)
    const [redirect, setRedirection] = useState(false);


    useEffect(() => {
        console.log("useEffect called")
        fetch(`http://localhost:3001/users/${userId}`)
        .then(res => res.json())
          .then(userData =>
            setUser(userData)
          )
          .catch(console.log);
    }, [userId])

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUser(preVal => {
            return {
                ...preVal,
                [name]: value
            }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(user)
        //console.log([...users, user]);
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        };
        async function fectchData(){
            await fetch(`http://localhost:3001/users/${userId}`, requestOptions)
                    .then(response => response.json())
                    .then(data => console.log(data));  
        } 
        fectchData();  
        setRedirection(true);
    }

    if(redirect) {
        return (
            <>
                <Switch>
                    <Redirect to="/"/>
                </Switch>
            </>
        )
    }
    return (
        <div className="w-50 mx-auto m-5">
            <div className="my-3">
                <h2>Edit the User</h2>
                <hr />
            </div>
            <Form onSubmit={handleSubmit}>
                <Form.Group as={Row} controlId="exampleForm.ControlInput1">
                    <Form.Label column sm="2">Full Name:</Form.Label>
                    <Col>
                        <Form.Control type="text" name="name" value={user.name} onChange={handleInputChange} placeholder="Enter Your Name" />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="exampleForm.ControlInput2">
                    <Form.Label column sm="2">Email:</Form.Label>
                    <Col>
                         <Form.Control type="email" name="email" value={user.email} onChange={handleInputChange} placeholder="name@example.com" />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="exampleForm.ControlInput3">
                    <Form.Label column sm="2">Phone:</Form.Label>
                    <Col>
                        <Form.Control type="text" name="phone" value={user.phone} onChange={handleInputChange} placeholder="Enter Phone Number" />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="exampleForm.ControlInput1">
                    <Form.Label column sm="2">Designation</Form.Label>
                    <Col>
                         <Form.Control type="text" name="title" value={user.title} onChange={handleInputChange} placeholder="Ex: Manager, Director" />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="exampleForm.ControlInput1">
                    <Form.Label column sm="2">Company</Form.Label>
                    <Col>
                        <Form.Control type="text" name="company" value={user.company} onChange={handleInputChange} placeholder="Enter Company Name" />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="exampleForm.ControlInput1">
                    <Form.Label column sm="2">Website</Form.Label>
                    <Col>
                        <Form.Control type="text" name="website" value={user.website} onChange={handleInputChange} placeholder="Enter the website link" />
                    </Col>
                </Form.Group>
                <Button variant="primary" type="submit">Edit User</Button>
            </Form>
        </div>
    )
}

export default EditUser
