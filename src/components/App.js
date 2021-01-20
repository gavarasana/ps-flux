import React from "react";
import AboutPage from "./AboutPage";
import HomePage from "./HomePage";
import Header from "./common/Header"
import CoursesPage from "./CoursesPage";

import NotFoundPage from "./NotFoundPage";
import ManageCoursePage from "./ManageCoursePage";
import { Route, Switch } from "react-router-dom";

function App() {
    return (
        <div className="container-fluid">
            <Header />
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/courses/add-new" component={ManageCoursePage} />
                <Route path="/courses/:slug" component={ManageCoursePage} />
                <Route path="/courses" component={CoursesPage} />
                <Route path="/about" component={AboutPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    );
}

export default App;