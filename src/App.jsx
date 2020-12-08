import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import AddUser from './components/AddUser'
import Navigation from './components/Navigation'
import ViewUser from './components/ViewUser';
import EditUser from './components/EditUser'

const App = () => {
  // const [viewUser, setUser] = useState({})

  const renderUser = (routerProps) => {
    let userId = parseInt(routerProps.match.params.id)

    // Promblem with below method: When we call renderUser in the render method, 
    // it causes a fetch request. When this completes, we put the response 
    // in state with setState which causes our component to re-render, 
    // and it continues like this indefinitely.

    // let viewUser = {}
    // fetch(`http://localhost:3001/users/${userId}`)
    //   .then(res => res.json())
    //   .then((user) => {
    //     setUser(user)
    //     console.log(viewUser)
    //   })
    return <ViewUser userId={userId} />
  }

  const editUser = (routerProps) => {
    let userId = parseInt(routerProps.match.params.id)
    return <EditUser userId={userId} />
  }
  return (
    <>
      <Navigation />
      <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/adduser" component={AddUser} />
          <Route exact path="/viewuser/:id" render={routerProps => renderUser(routerProps)} />
          <Route exact path="/edituser/:id" render={routerProps => editUser(routerProps)} />
      </Switch>
    </>
  )
}

export default App;
