import React, { useState, useEffect } from "react";
import Footer from "./Components/Footer/Footer";
import Home from "./Pages/Home/Home";
import Policy from "./Pages/Policy/Policy";
import AddFilms from "./Pages/ProjectsPages/AddFilms/AddFilms";
import Docs from "./Pages/ProjectsPages/Docs/Docs";
import Explore from "./Pages/ProjectsPages/Explore/Explore";
import Movies from "./Pages/ProjectsPages/Movies/Movies";
import TalkShow from "./Pages/ProjectsPages/TalkShow/TalkShow";
import WebSeries from "./Pages/ProjectsPages/WebSeries/WebSeries";
import Youtube from "./Pages/ProjectsPages/Youtube/Youtube";

import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact={true} element={<Home />} />
          <Route
            path="/projects/webseries"
            exact={true}
            element={<WebSeries />}
          />
          <Route
            path="/projects/documentaries"
            exact={true}
            element={<Docs />}
          />
          <Route
            path="/projects/addfilms"
            exact={true}
            element={<AddFilms />}
          />
          <Route
            path="/projects/movies-shortfilms"
            exact={true}
            element={<Movies />}
          />
          <Route
            path="/projects/talkshow"
            exact={true}
            element={<TalkShow />}
          />
          <Route path="/projects/youtube" exact={true} element={<Youtube />} />
          <Route path="/projects/explore" exact={true} element={<Explore />} />
          <Route
            path="/projects/PrivacyPolicy"
            exact={true}
            element={<Policy />}
          />
        </Routes>
        <div className="container">
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}
