import React from 'react';
import MenuItem from '../shared/MenuItem';
import IntroSection from './IntroSection';

const MenuCategory = ({items,btnName}) => {
    return (
        <div className='w-11/14 mx-auto flex flex-col justify-center items-center my-10'>
             <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-10'>
          {
            items.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
          }
        </div>
        <button className='btn btn-outline border-0 uppercase border-b-4 '> {btnName} </button>
        </div>
      
    );
};

export default MenuCategory;