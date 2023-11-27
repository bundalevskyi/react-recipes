import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import VegRecipe from "../pages/OneVegRecipe";
import RecipesVeg from "../pages/RecipesVeg";
import Recipe from "../pages/OneRecipe";
import RecipesMain from "../pages/RecipesMain";

const AppRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/vegan" element={<RecipesVeg />} />
        <Route path="/vegan/:id" element={<VegRecipe />} />
        <Route path="/recipes/:id" element={<Recipe />} />
        <Route path="/recipes" element={<RecipesMain />} />
        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
    </div>
  );
};

export default AppRouter;
