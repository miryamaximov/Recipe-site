import { useNavigate } from "react-router-dom";
import "../myStyle/forms.css";
import { User } from "../classes/User";
import Users from "../userContext";
import { useContext } from "react";
import { useDispatch } from "react-redux";
import mac from '../pics/macaron.jpg'


const Login = () => {
  //@ts-ignore
  const userList: Array<User> = useContext(Users).usersList;
  const dispatcher = useDispatch();
  const goToSignUp = useNavigate();

  //פונקציה שבודקת אם הלקוח שמתחבר כעת הוא המנהל
  const check = () => {
    const tempPass = document.getElementById("pass") as HTMLInputElement;
    const tempName = document.getElementById("userName") as HTMLInputElement;
    let myUser: User = userList.filter(
      (k: User) => k.password == tempPass.value && k.name == tempName.value
    )[0];

    if (tempPass.value == "1234") {
      alert("You are a director!");
    }

    if (myUser == null) {
      alert("אתה לא רשום עדיין לאתר, עבור לעמוד ההרשמה");
      goToSignUp("/addUser");
    } else {
      alert("אתה כבר רשום ויכול להיכנס לאתר");
      dispatcher({ type: "updateCurrUser", payload: myUser });
    }
  };
  return (
    <>
      <div className="myForm">
        <div className="myFrame" style={{height: "200px"}}>
          <input id="userName" placeholder="user name" type="text"></input>
          <br />
          <input id="pass" placeholder="user password" type="password"></input>
          <br />
          <input
            className="submitBtn"
            type="submit"
            value="Log In"
            onClick={() => check()}
          ></input>
        </div>
        <div className='myPic'>
            <img src={mac}/>
        </div>
        
      </div>
    </>
  );
};
export default Login;
