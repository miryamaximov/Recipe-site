import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import "./bootstrap.css";
import { MyProvider } from "./userContext";
import axios from "axios";
import { User } from "./classes/User";
import { Provider } from "react-redux";
import Store from "./store/store";
import Routing from "./comps/routing";

function App() {
  const [usersList, setUsersList] = useState<Array<User>>();
  useEffect(() => {
    axios
      .get("http://localhost:1607/users/getList")
      .then((k) => setUsersList(k.data));
  }, []);

  const transfer = {
    usersList: usersList, //the list of the users
    setUserList: setUsersList, //the function to set the list
  };

  return (
    <div className="App">
      <Provider store={Store}>
        <MyProvider value={transfer}>
          <Routing></Routing>
        </MyProvider>
      </Provider>
    </div>
  );
}

export default App;
