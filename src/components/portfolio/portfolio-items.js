import React from "react";

export default function(props) {
    return (
        <div style={{ color: "red"}}>
            <h3>{props.title}</h3>
            <h4>{props.url}</h4>
        </div>
    );
}
