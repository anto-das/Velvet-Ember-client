import React from 'react';
import DishCard from '../shared/DishCard';

const MenuTab = ({items}) => {
    return (
        <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-4 py-8">
                                {
                                    items.map(item => <DishCard key={item._id} item={item}></DishCard>)
                                }
                            </div>
    );
};

export default MenuTab;