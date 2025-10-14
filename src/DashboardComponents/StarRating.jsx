import  { useState } from 'react';
import { FaStar } from 'react-icons/fa';
const StarRating = ({value,onchange}) => {
    const [hover,setHover] = useState(null)
    return (
        <div className="flex justify-center gap-2">
            {
                [1,2,3,4,5].map(star =>(
                    <FaStar
                    key={star}
                    onClick={() =>onchange(star)}
                    onMouseEnter={()=>setHover(star)}
                    onMouseLeave={()=>setHover(null)}
                    className={(value || hover) >= star ? 'text-xl text-amber-600 transition duration-400' :'text-xl'}
                    />
                )
                    
                )
            }
        </div>
    );
};

export default StarRating;