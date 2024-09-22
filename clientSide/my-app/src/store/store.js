import { createStore } from "redux";
import produce from "immer";
import { Recipe } from "../classes/recipe";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { createStoreHook } from "react-redux";
import { render } from "@testing-library/react";

const myState = {
  recipesList: [],
  currUser: {},
};

const reducer = produce((state, action) => {
  switch (action.type) {
    case "setRecipeList":
      {
        state.recipesList = action.payload;
      }
      break;
    case "addRecipe":
      {
        state.recipesList.push(action.payload);
      }
      break;
    case "updateCurrUser":
      {
        state.currUser = action.payload;
      }
      break;
    default:
      break;
  }
}, myState);

const Store = createStore(reducer);

window.Storage = Store;
export default Store;
