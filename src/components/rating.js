import React from "react";

const Rating = (props) => {
    const stars = [];

    for (let i = 1; i <= 5; i++) {
        if (i <= props.rating) {
            stars.push(<span key={i} id="star" className="material-symbols-outlined">star</span>);
        } else if (i - props.rating < 1) {
            stars.push(<span key={i} id="star" className="material-symbols-outlined">star_half</span>);
        } else {
            stars.push(<span key={i} id="star" className="material-symbols-outlined">star_border</span>);
        }
    }

    return (
        <>
            <a href="#">
                {stars}
            </a>
            <a href="#" className="coments">
                <small>{props.title}</small>
            </a>
        </>
    )
}

export default Rating;