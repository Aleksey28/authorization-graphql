import React, { useEffect, useState } from "react";
import Login from "../Login/Login";
import classes from "./App.module.css";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { Route, Switch } from "react-router";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import { useHistory } from "react-router";
import Profile from "../Profile/Profile";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

function App() {

  const [loggedIn, setLoggedIn] = useState(false);
  const [userData, setUserData] = useState({});
  const history = useHistory();

  useEffect(() => {
    if(loggedIn) {
      history.push("/");
    }
  }, [loggedIn]);

  return (
    <ApolloProvider client={client}>
      <div className={classes.page}>
        <Switch>
          <ProtectedRoute exact path="/" loggedIn={loggedIn}>
            <Profile userData={userData}/>
          </ProtectedRoute>
          <Route path="/sign-in">
            <Login setLogged={setLoggedIn} setUserData={setUserData}/>
          </Route>
        </Switch>
      </div>
    </ApolloProvider>
  );
}

export default App;
