import React from 'react';
import MenuItem from '../shared/MenuItem';
import IntroSection from './IntroSection';
import { Link } from 'react-router-dom';

const MenuCategory = ({items,title,btnName}) => {
    return (
        <div className='w-11/14 mx-auto flex flex-col justify-center items-center my-10'>
             <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-10'>
          {
            items.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
          }
        </div>
        <Link to={`/our-shop/${title}`}>
        <button className='btn btn-outline border-0 uppercase border-b-4 '> {btnName} </button>
        </Link>
        </div>
      
    );
};

export default MenuCategory;