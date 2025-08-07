
const MenuItem = ({item}) => {
    const {name,price,image,recipe} = item;
  return (
    <div className="flex lg:flex-row md:flex-row flex-col lg:space-x-4 md:space-x-4 space-y-4 shadow lg:shadow-none md:shadow p-4">
        <img src={image} alt="" className="max-w-[120px] rounded-r-full rounded-b-full"/>
        <div>
            <h1>{name}----------</h1> 
            <p>{recipe}</p>
        </div>
            <p className="text-[#D99904]">{price}</p>
    </div>
  )
}

export default MenuItem