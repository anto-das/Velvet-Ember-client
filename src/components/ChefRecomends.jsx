import { useEffect, useState } from "react"
import TitleBox from "./TitleBox"
import DishCard from "../shared/DishCard";

const ChefRecomends = () => {
    const[items,setItems] = useState([]);
    useEffect(()=>{
        fetch('menu.json')
        .then(res => res.json())
        .then(data =>{
            const limitedItems = data.filter(item => item.category ==='salad').slice(0,3);
            setItems(limitedItems)
        })
    },[])
  return (
    <div>
        <TitleBox title={'---Should Try---'} heading={'CHEF RECOMMENDS'}></TitleBox>
        <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-4 ">
            {
                items.map(item => <DishCard key={item._id} item={item}></DishCard>)
            }
        </div>
    </div>
  )
}

export default ChefRecomends