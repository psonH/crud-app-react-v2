import React, { useState, useEffect } from 'react'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';

const ViewUser = ({ userId }) => {
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

    useEffect(() => {
        console.log("useEffect called")
        fetch(`http://localhost:3001/users/${userId}`)
        .then(res => res.json())
          .then(userData =>
            setUser(userData)
          )
          .catch(console.log);
    }, [userId])

    return (
        <div className="w-50 mx-auto m-5">
            <Card>
                <Card.Header as="h5">{user.name}</Card.Header>
                <Card.Body>
                    <Card.Title>{user.title}</Card.Title>
                    <Card.Text>
                       Email: {user.email} <br />
                       Phone: {user.phone} <br />
                       Company: {user.company} <br />
                       Website: {user.website} <br />
                    </Card.Text>
                    <Link to="/">
                        <Button variant="primary">
                            Return To Home
                        </Button>
                    </Link>
                </Card.Body>
            </Card>
        </div>
    )
}

export default ViewUser
