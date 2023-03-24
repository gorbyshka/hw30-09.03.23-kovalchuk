import React, { useState } from "react";

function Icons(props) {
    const [getId, setId] = useState(false);

    function fillBackground() {
        setId((prevId) => !prevId);
    }

    return (
        <div className="block-icons">
            <a href="#">
                <span
                    onClick={fillBackground}
                    id={getId ? "heart" : "heart2"}
                    className="material-symbols-outlined"
                >
                    favorite
                </span>
            </a>
            <span className="material-symbols-outlined">move_up</span>
        </div>
    );
}

export default Icons;
