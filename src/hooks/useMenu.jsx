import  { useEffect, useState } from 'react';

const useMenu = () => {
   const [items,setItem] = useState([]);
   const [loading,setLoading]= useState(true);
     useEffect(()=>{
       fetch("menu.json")
       .then(res => res.json())
       .then(data =>{
         setItem(data);
         setLoading(false);
       })
     },[items])
     return [items,loading]
};

export default useMenu;