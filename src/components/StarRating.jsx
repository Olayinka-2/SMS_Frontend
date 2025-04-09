// StarRating.jsx

import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const StarRating = ({ totalStars = 5, onRate }) => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    const handleClick = (value) => {
        setRating(value);
        if (onRate) {
            onRate(value);
        }
    };

    return (
        <div className="flex">
            {[...Array(totalStars)].map((_, index) => {
                const value = index + 1;
                return (
                    <label key={value}>
                        <input
                            type="radio"
                            name="rating"
                            value={value}
                            onClick={() => handleClick(value)}
                            className="hidden"
                        />
                        <FaStar
                            className={`cursor-pointer text-2xl transition-colors duration-200 ${value <= (hover || rating) ? 'text-yellow-400' : 'text-gray-300'
                                }`}
                            onMouseEnter={() => setHover(value)}
                            onMouseLeave={() => setHover(0)}
                        />
                    </label>
                );
            })}
        </div>
    );
};

export default StarRating;
