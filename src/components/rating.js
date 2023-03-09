import React from "react";

const Rating = (props) => {
    return (
        <>
            <a href="#">
                <span id="star" class="material-symbols-outlined">star</span>
                <span id="star" class="material-symbols-outlined">star</span>
                <span id="star" class="material-symbols-outlined">star</span>
                <span id="star" class="material-symbols-outlined">star</span>
                <span id="star" class="material-symbols-outlined">star_half</span>
            </a>

            <a href="#" className="coments">
                <small>{props.title}</small>
            </a>
        </>
    )
}

export default Rating