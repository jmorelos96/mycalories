'use client';
import React, { useContext } from 'react';
import { useRouter } from 'next/router';
import { FoodDetails } from '../../ui/components/food/food-detail';
const FoodDetailPage = () => {
    const router = useRouter();
    const { id }= router.query;
    return (
    <>
        <div className="container">
          <span>{id}</span>
        </div>
    </>
  );
};

export default FoodDetailPage;