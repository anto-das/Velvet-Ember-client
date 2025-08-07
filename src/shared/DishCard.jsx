import React from 'react'

const DishCard = ({item}) => {
    const{name,recipe,image}=item;
  return (
    <div>
        <div className="bg-base-100 shadow-sm">
  <div className="">
    <img
      src={image}
      alt={name}
      className="" />
  </div>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{name}</h2>
    <p className='text-gray-500'>{recipe}</p>
    <div className="card-actions">
      <button className="btn text-[#BB8506] hover:text-[#ebb537] hover:border-none bg-[#E8E8E8] border border-b-[#BB8506] hover:bg-[#1F2937]">Add to cart</button>
    </div>
  </div>
</div>
    </div>
  )
}

export default DishCard