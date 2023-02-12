import React from "react";

function Comments(props) {
    
    return <p className="description"><span> {props.username} </span> {props.body}</p>
}

export default Comments