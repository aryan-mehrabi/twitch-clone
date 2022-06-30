import React from "react";
import { Link } from "react-router-dom";
import GoogleAuth from "./GoogleAuth"

const Headers = () => {
    return <div>
        <Link to={"/"}>logo</Link>
        <Link to={"/"}>Streams List</Link>
        <GoogleAuth />
    </div>
}

export default Headers