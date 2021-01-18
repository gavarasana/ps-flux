import React from "react";
import AboutPage from "./AboutPage";
import HomePage from "./HomePage";
import Header from "./common/Header"
import CoursesPage from "./CoursesPage";

function App() {
    function getPage(){
    const router = window.location.pathname;
    if (router === "/about") return <AboutPage/>
    if (router === "/courses") return <CoursesPage/>
    return <HomePage/>
    }
    return (
    <div className="container-fluid">
        <Header></Header>
        { getPage()}
    </div>
    );
}
export default App;