import { Link, Outlet, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Recipe } from "../classes/recipe";
import { useEffect, useState } from "react";
import "../myStyle/pictuers.css";
import "../myStyle/tabels.css";
import axios from "axios";
import { User } from "../classes/User";

const Home = () => {
  const myDispatch = useDispatch();
  const listRec: Array<Recipe> = useSelector((k: any) => k.recipesList);

  useEffect(() => {
    if (listRec.length == 0) {
      axios.get("http://localhost:1607/recipes/getList").then((k) => {
        myDispatch({ type: "setRecipeList", payload: k.data });
      });
    }
  }, []);

  const pics = {
    width: "250px",
    height: "auto",
    margin: "16px",
    padding: "8px",
  };

  return (
    <>
      <div>
        <h1 style={{ color: "rgb(255, 208, 120)" }}>Gallery</h1>
        <br />
        <div className="image-grid">
          {listRec.map((k: Recipe) => (
            <p>
              <Link className="image-container" to={`list/${k.name}`}>
                <div className="recipe-name">
                  {k.name} <br />
                  {k.level}
                </div>
                <img
                  className="image"
                  src={`http://localhost:1607/pictures/${k.pic}`}
                  style={pics}
                />
              </Link>
            </p>
          ))}
        </div>
      </div>
      <Outlet></Outlet>
    </>
  );
};
export default Home;
