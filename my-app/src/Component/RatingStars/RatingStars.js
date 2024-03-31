import { useState } from "react";

function RatingStars({ total }) {
    const [numberOfStars, setNumberOfStars] = useState();

    const array = Array(total).map((el, index) => index + 1) 
    console.log(array)

    return (
        <div className='ratingStar'>
            {[...array].map((el, index) => {
                return (
                    <button key={index} className={`star ${index <= numberOfStars ? 'active' : ''}`} onClick={() => setNumberOfStars(index)} >★</button>
                )
            })}
        </div>
    )

}

export default RatingStars;