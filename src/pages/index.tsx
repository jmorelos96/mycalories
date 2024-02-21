import React from 'react';
import { Main } from './main';
import 'bootstrap/dist/css/bootstrap.css';
import { MyContextProvider } from './main/context';
import { FoodService } from '../data/FoodService';

const HomePage = () => {
  let res: any;
  FoodService()
  .subscribe(async (data: any) => {
    res = await data.json();
    
  })
  return (
    <>
    <MyContextProvider >
      <Main {...res}/>
    </MyContextProvider>
    </>
  )
};

export default HomePage;