import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./nav";
import About from "./about";
import Home from "./home";
import RecipeList from "./RecipeList";
import Login from "./login";
import AddRecipe from "./addRecipe";
import IsDirector from "./isDirector";
import ShowUsers from "./showUsers";
import AddUser from "./addUser";
import Terms from "./terms";
import ShowCurrDetails from "./showCurrDetails";

const Routing = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Nav></Nav>}>
            <Route path="ShowCurrDetails" element={<ShowCurrDetails></ShowCurrDetails>}></Route>
            <Route path="about" element={<About></About>}></Route>
            <Route path="home" element={<Home></Home>}>
              {" "}
            </Route>
            <Route
              path="home/list/:recName"
              element={<RecipeList></RecipeList>}
            ></Route>

            <Route path="login" element={<Login></Login>}></Route>
            <Route path="addRecipe" element={<AddRecipe></AddRecipe>}></Route>
            <Route
              path="isDirector"
              element={<IsDirector></IsDirector>}
            ></Route>
            <Route path="/showUsers" element={<ShowUsers></ShowUsers>}></Route>
            <Route path="/addUser" element={<AddUser></AddUser>}></Route>
            <Route path="/terms" element={<Terms></Terms>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default Routing;
