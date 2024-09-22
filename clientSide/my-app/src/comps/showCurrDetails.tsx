import { useDispatch, useSelector } from "react-redux";
import { User } from "../classes/User";
import { Recipe } from "../classes/recipe";
import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ShowCurrDetails = () => {
  const myDispatch = useDispatch();
  const myNavigate = useNavigate();
  const myUser: User = useSelector((k: any) => k.currUser);
  const lst: Array<Recipe> = useSelector((k: any) => k.recipesList);

  const backToHome = () => {
    myNavigate("/home");
  };

  useEffect(() => {
    if (lst.length == 0) {
      axios.get("http://localhost:1607/recipes/getList").then((k) => {
        myDispatch({ type: "setRecipeList", payload: k.data });
      });
    }
  }, []);

  const myLs: Array<Recipe> = lst.filter((k) => k.password == myUser.password);

  const checkManage = (val: any) => {
    if (val) return "You are a manager!";
    // else return "You are not a manager....";
  };

  return (
    <>
      <div style={{ fontFamily: "monospace", fontSize: "x-large" }}>
        <h2 style={{ color: "rgb(255, 208, 120)" }}>Hello {myUser.name}</h2>
        Phone: {myUser.phone} <br />
        Address: {myUser.address} <br />
        Password: {myUser.password} <br />
        {checkManage(myUser.isManager)} <br />
        <br /> <br /> <br />
        The recipes you added to our site: <br />
        {myLs.map((k: Recipe) => (
          <p style={{ fontFamily: "sans-serif", fontSize: "medium" }}>
            {k.name}
          </p>
        ))}
        <button
          style={{
            border: "rgb(137, 216, 221) solid 5px",
            background: "none",
            color: "rgb(216, 179, 255)",
          }}
          onClick={backToHome}
        >
          Go to Gallery
        </button>
      </div>
    </>
  );
};

export default ShowCurrDetails;
