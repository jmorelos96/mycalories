"use client"
import React from 'react';
import { FoodService } from '@/src/data/FoodService';
import { useMyContext } from '@/src/pages/main/context';
export function Search({query, responseFoodList, searchQueryEvent}: {query: string, responseFoodList: any, searchQueryEvent: any}) {
    const {setMyObject} = useMyContext();
    const handleInputChange = (event: any) => {
        const { value } = event.target;
        // Perform search immediately as the user types
        searchQueryEvent(value);
        if(value.length > 0) performSearch(value);
    };

    const performSearch = (val: any) => {
        FoodService()
            .subscribe(async (data) => {
                const food = await data.json();
                const filteredResults = food.foods.filter((item: Food) => item.name.toLowerCase().includes(val.toLowerCase()));
                setMyObject(filteredResults);
                responseFoodList(filteredResults);
            })
    };

    return (
        <>
            <input
                type="search"
                className="form-control"
                value={query}
                onChange={handleInputChange}
            />
        </>
    );
}
