import React from 'react';
import { Link } from "react-router-dom";

function HomePage() {
    return (
        <div className="jumbotron">
            <h1>Pluralsight Administration</h1>
            <p>React, Flux and React Route for building responsive web applications.</p>
            <Link to="about" className="btn btn-primary">About</Link>
        </div>
    );
}

export default HomePage;