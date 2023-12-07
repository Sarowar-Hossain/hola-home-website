import React, { useState } from 'react';

const StarRating = ({ onRatingSelected }) => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    return (
        <div className="star-rating">
            {[1, 2, 3, 4, 5].map((star, index) => (
                <button
                    key={index}
                    className={`${star <= (hover || rating) ? "text-yellow-500" : "text-gray-300"} text-4xl`}
                    onClick={() => setRating(star)}
                    onMouseEnter={() => setHover(star)}
                    onMouseLeave={() => setHover(rating)}
                >
                    &#9733;
                </button>
            ))}
        </div>
    );
};

export default StarRating