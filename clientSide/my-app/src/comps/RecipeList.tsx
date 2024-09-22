import { useNavigate, useParams } from "react-router-dom";
import { Recipe } from "../classes/recipe";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { User } from "../classes/User";
import { useRef } from "react";
import replaceHeart from "../pics/heartRed.png";
import arrow from "../pics/arrow.png";
import "../myStyle/details.css";
import heart from "../pics/myHe.png";

const RecipeList = () => {
  let favoriteClick = useRef(null);
  let params = useParams();
  const myList: Array<Recipe> = useSelector((k: any) => k.recipesList);
  const curr: User = useSelector((k: any) => k.currUser);
  const dispatcher = useDispatch();
  const currRecipe: Recipe = myList.filter(
    (k: Recipe) => k.name == params.recName
  )[0];
  const myNavigate = useNavigate();
  const backToHome = () => {
    myNavigate("/home");
  };
  console.log(curr);

  const addToFavorite = () => {
    if (curr.name == undefined) {
      alert("You need to log in before add a recipe");
      myNavigate("/login");
      return;
    } else {
      axios
        .post(
          `http://localhost:1607/users/updateFavoriteRecipe/${curr?.phone}/${currRecipe?.name}`
        )
        .then((k) => dispatcher({ type: "updateCurrUser", payload: k.data }));
      //@ts-ignore
      favoriteClick.current.src = replaceHeart;
    }
  };

  const showLevel = (val: String | undefined) => {
    if (val == "easy") return "⭐⭐⭐";
    if (val == "medium") return "⭐⭐⭐⭐";
    else return "⭐⭐⭐⭐⭐";
  };

  return (
    <>
      <div className="blockAll">
        <div className="blockOfPicture">
          <h1>{currRecipe?.name}</h1>
          <img
            className="img-rounded"
            src={`http://localhost:1607/pictures/${currRecipe?.pic}`}
          />
          <button onClick={addToFavorite}>
            <img className="heart" ref={favoriteClick} src={heart} />
          </button>
        </div>
        <div className="desc"> {currRecipe?.description} </div>
        <div className="blockOfDetailsRight">
          <h2>:רכיבים</h2>
          <br />
          {currRecipe?.ingredients?.map((k: any) => (
            <p>
              {k?.name} {k?.amount}
            </p>
          ))}
        </div>

        <div className="blockOfDetailsLeft">
          level : {showLevel(currRecipe?.level)} <br />
          time ⏲ : {currRecipe?.duration} <br />
          type : {currRecipe?.type}
        </div>

        <button
          style={{ background: "none", border: "none" }}
          onClick={backToHome}
        >
          <img src={arrow} width="80px" />
        </button>
      </div>
    </>
  );
};
export default RecipeList;
