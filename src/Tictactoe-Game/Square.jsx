import React from "react";

const Square = (props) => {
    return (
        <div
            onClick={props.onClick}
            style={{
                border: "1px solid",
                height: "100px",
                width: "100%", // Ensure width is fixed to keep squares uniform
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer" // Optional: Add a cursor pointer to indicate it's clickable
            }}
        >
            <h5>{props.value}</h5>
        </div>
    );
}

export default Square;
