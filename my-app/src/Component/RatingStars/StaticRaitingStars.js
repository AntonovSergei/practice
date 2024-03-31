function StaticRatingStars({ total, selectedValue}) {
    const array = Array(total).map((el, index) => index + 1);
    

    return (
        <div className="staticRating">
            {[...array].map((el, index) => {
                return <button key={index} disabled={total > selectedValue ? 'disabled' : ''} className={`star ${index < selectedValue ? 'active' : ''}`} >★</button>
            })}
        </div>
    )
}

export default StaticRatingStars;