"use client"
import "./food-list.module.css";
import Link from "next/link";
import React from 'react';
export function FoodList({foods}:FoodList) {

    return (
        <>
            <ul className={foods.length > 0 ? "list-group list-open food-list" : "list-group food-list"}>
                {
                    foods.map((food: Food, index:number) => (
                            <li key={index} className="list-group-item">{food.name} - 
                                <Link href={`/food/${food.id}`}>view details</Link>
                            </li>
                    ))
                }
            </ul>
        </>
    )
}
