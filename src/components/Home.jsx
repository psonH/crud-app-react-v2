import React, { useState, useEffect } from "react";
import { Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
// import { Redirect } from "react-router-dom";
// import ViewUser from "./ViewUser";
// import users from "../data";

const Home = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    console.log("useEffect called")
    fetch("http://localhost:3001/users")
    .then(res => res.json())
      .then(users =>
        setUserData(users)
      )
      .catch(console.log);
  }, [])

  const deleteUser = (id) => {
    const requestOptions = {
        method: 'DELETE',
    };
    fetch(`http://localhost:3001/users/${id}`, requestOptions)
        .then(response => response.json())
        .then(data => console.log(data));  
    
    setUserData(userData.filter((user) => user.id !== id));
  };

  // const viewUser = (id) => {
  //   return <ViewUser />
  // }

  return (
    <>
      <Table striped bordered hover responsive className="w-75 mx-auto m-5">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Title</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {userData.length > 0 ? (
            userData.map((user) => {
              return (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.title}</td>
                  <td>
                    <div className="d-flex justify-content-around">
                      <Link to={`/viewuser/${user.id}`}>
                        <Button 
                          variant="primary"
                        >
                          View
                        </Button>
                      </Link>
                      <Link to={`/edituser/${user.id}`}>
                        <Button 
                          variant="warning"
                        >
                          Edit
                        </Button>
                      </Link>
                      <Button
                        variant="danger"
                        onClick={() => deleteUser(user.id)}
                      >
                        Delete
                      </Button>
                    </div>
                  </td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td colSpan={5}>
                <h4 className="text-center">No Users</h4>
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </>
  );
};

export default Home;
