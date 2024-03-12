"use client";
import { Search } from "../../ui/components/search"
import { FoodList } from "../../ui/components/food/food-list";
import { useState } from "react";
import './main.module.css';
export function Main(){
    const [query, setQuery] = useState("");
    const [foodList, setFoodList] = useState([]);
    
    const searchQuery = (q: any) => {
        setQuery(q);
        if(q.length == 0){
            clearSearchQuery();
        }
    }

    const searchFoodList = (data: any) => {
        setFoodList(data);
    }

    const clearSearchQuery = () => {
        setFoodList([]);
        setQuery("");
    }

    return(
            <div className="container c-component">
                <h1>My Calories</h1>
                <Search query={query} responseFoodList={searchFoodList} searchQueryEvent={searchQuery}/>
                <FoodList foods={foodList} />
                <a href="#" onClick={clearSearchQuery}>clear search</a>
            </div>
    )
}