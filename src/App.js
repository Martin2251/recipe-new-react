import logo from './logo.svg';
import { useState, useEffect } from 'react';
import './App.css';
import SearchBar from "./components/RecipeCard";
import RecipeCard from"./components/RecipeCard";

const apiUrl ="www.themealdb.com/api/json/v1/1/search.php?s=";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);

const searchRecipes = async () => {
  setIsLoading(true);
  const url = apiUrl + query
};

  return (
    <div className="container">
      <h2>Our Recipe App</h2>

    </div>
  );
}

export default App;
