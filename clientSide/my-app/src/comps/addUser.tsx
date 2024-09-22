import React, { useContext, useRef, useState } from "react";
import Users from "../userContext";
import "../myStyle/forms.css";
import axios from "axios";
import { User } from "../classes/User";
import { Ref } from "react";
import { useDispatch } from "react-redux";
import mac from "../pics/macaron.jpg";

const AddUser = () => {
  const [myUser, setMyUser] = useState<User>({});
  const userName = useRef(null);
  const pass = useRef(null);
  const address = useRef(null);
  const phone = useRef(null);
  const dispatcher = useDispatch();

  const add = () => {
    let tempName: any = userName.current;
    let tempPass: any = pass.current;
    let tempAddress: any = address.current;
    let tempPhone: any = phone.current;

    if (
      tempName.value == "" ||
      tempPass.value == "" ||
      tempAddress.value == "" ||
      tempPhone.value == ""
    ) {
      alert("Fill in all the details before registering");
      return;
    }

    if (tempPass.value == "1234") myUser.isManager = true;
    else myUser.isManager = false;
    axios.put("http://localhost:1607/users/addUser", myUser).then(() => {
      alert("You have successfully registered!");
      dispatcher({ type: "updateCurrUser", payload: myUser });
    });
  };

  return (
    <>
      <div className="myForm">
        <div className="myFrame" style={{ height: "310px" }}>
          <input
            type="text"
            placeholder="Your user name"
            ref={userName}
            onChange={(e) => setMyUser({ ...myUser, name: e.target.value })}
          ></input>
          <br />
          <input
            type="password"
            placeholder="smart password"
            ref={pass}
            onChange={(e) => setMyUser({ ...myUser, password: e.target.value })}
          />
          <br />
          <input
            type="text"
            placeholder="Your address"
            ref={address}
            onChange={(e) => setMyUser({ ...myUser, address: e.target.value })}
          />
          <br />
          <input
            type="text"
            placeholder="Your phone"
            ref={phone}
            onChange={(e) => setMyUser({ ...myUser, phone: e.target.value })}
          />
          <br />
          <input
            type="button"
            className="submitBtn"
            value="Sign Up"
            onClick={() => add()}
          ></input>
        </div>
        <div className="myPic">
          <img src={mac} />
        </div>
      </div>
    </>
  );
};
export default AddUser;
