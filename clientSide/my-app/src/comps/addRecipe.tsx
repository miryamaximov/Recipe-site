import { useRef, useState } from "react";
import "../myStyle/forms.css";
import { Recipe } from "../classes/recipe";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { User } from "../classes/User";
import { useNavigate } from "react-router-dom";
import mac from "../pics/macaron.jpg";

const AddRecipe = () => {
  const [rec, setRec] = useState<Recipe>({});
  const curr: User = useSelector((k: any) => k.currUser);
  const dispatcher = useDispatch();
  const goToLogIn = useNavigate();
  const nameRec = useRef(null);
  const des = useRef(null);
  const urlPic = useRef(null);
  const level = useRef(null);
  const time = useRef(null);
  const type = useRef(null);
  const pass = useRef(null);

  const myAddRecipe = (e: Event) => {
    debugger;
    let tempName: any = nameRec.current;
    let tempDes: any = des.current;
    let tempUrl: any = urlPic.current;
    let tempLevel: any = level.current;
    let tempTime: any = time.current;
    let tempType: any = type.current;
    let tempPass: any = pass.current;

    if (tempUrl.value < 0 || tempUrl.value > 20) {
      alert("...אין במאגר התמונות תמונה במספר זה, בחר מתכון אחר");
    }

    if (curr?.password != tempPass.value) {
      alert("You need to log in before add a recipe");
      goToLogIn("/login");
      return;
    } else if (
      tempName.value == "" ||
      tempDes.value == "" ||
      tempUrl.value == "" ||
      tempLevel.value == "" ||
      tempTime.value == "" ||
      tempType.value == "" ||
      tempPass.value == ""
    ) {
      e.preventDefault();
      if (tempName.value == "")
        tempName.style.backgroundColor = "lightseagreen";
      if (tempDes.value == "") tempDes.style.backgroundColor = "lightseagreen";
      if (tempUrl.value == "") tempUrl.style.backgroundColor = "lightseagreen";
      if (tempLevel.value == "")
        tempLevel.style.backgroundColor = "lightseagreen";
      if (tempTime.value == "")
        tempTime.style.backgroundColor = "lightseagreen";
      if (tempType.value == "")
        tempType.style.backgroundColor = "lightseagreen";
      if (tempPass.value == "")
        tempPass.style.backgroundColor = "lightseagreen";
      return;
    } else {
      axios
        .put("http://localhost:1607/recipes/addRecipe", rec)
        .then(() => {
          dispatcher({ type: "addRecipe", payload: rec });
          alert("The recipe was successfully added!");
        })
        .catch((err) => console.log(err));
      console.log(rec);
    }
  };

  return (
    <>
      <div className="allPage">
        <div className="myForm">
          <div className="myFrame">
            <input
              type="text"
              placeholder="name"
              onChange={(e) => setRec({ ...rec, name: e.target.value })}
              ref={nameRec}
            ></input>
            <br />
            <input
              type="text"
              placeholder="Description"
              onChange={(e) => setRec({ ...rec, description: e.target.value })}
              ref={des}
            ></input>
            <br />
            <input
              type="number"
              placeholder="image number"
              onChange={(e) =>
                setRec({ ...rec, pic: `pic${e.target.value}.jpg` })
              }
              ref={urlPic}
            />
            <br />
            <select onChange={(e) => setRec({ ...rec, level: e.target.value })}>
              <option value="">רמת קושי</option>
              <option value="easy" ref={level}>
                קל
              </option>
              <option value="medium" ref={level}>
                בינוני
              </option>
              <option value="hard" ref={level}>
                קשה
              </option>
            </select>
            <br />
            <input
              type="text"
              placeholder="duration"
              onChange={(e) => setRec({ ...rec, duration: e.target.value })}
              ref={time}
            ></input>
            <br />
            <select onChange={(e) => setRec({ ...rec, type: e.target.value })}>
              <option value="">סוג המתכון</option>
              <option value="parve" ref={type}>
                פרווה
              </option>
              <option value="milky" ref={type}>
                חלבי
              </option>
              <option value="fleshy" ref={type}>
                בשרי
              </option>
            </select>
            <br />
            <input
              type="text"
              placeholder="ingredients"
              onChange={(e) => {
                let str: Array<string> = e.target.value.split(" ");
                let myArr: Array<Object> = [];

                for (let index = 0; index < str.length; index += 2) {
                  myArr.push({ name: str[index + 1], amount: str[index] });
                }
                setRec({ ...rec, ingredients: myArr });
              }}
            />

            <br />
            <input
              type="password"
              placeholder="password"
              onChange={(e) => setRec({ ...rec, password: e.target.value })}
              ref={pass}
            ></input>
            <br />
            <br />
            <input
              className="submitBtn"
              type="submit"
              value="Add recipe"
              onClick={(e: any) => myAddRecipe(e)}
            />
          </div>
          <div className="myPic">
            <img src={mac} />
          </div>
        </div>
      </div>
    </>
  );
};
export default AddRecipe;
