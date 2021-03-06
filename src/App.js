import React, { lazy, Suspense } from "react";
import { Router } from "@reach/router";

import NavBar from "./components/nav/NavBar";
import Chat from "./components/Chat/Chat";
import "./App.css";
import ChatWindowContainer from "./components/ChatWindows/ChatWindowContainer";

const Home = lazy(() => import("./components/Home/Home"));
const Login = lazy(() => import("./components/Login/Login"));
const Register = lazy(() => import("./components/Register/Register"));
const Profile = lazy(() => import("./components/Profile/Profile"));

function App() {
  return (
    <React.StrictMode>
      <div className="App">
        <div className="grid-container">
          <NavBar />
          <div className="main">
            <Suspense
              fallback={
                <h1>
                  Neki markup koji ce se prikazati dok se ucitavati Details,
                  odnosno razresava promise import-a
                </h1>
              }
            >
              <Router>
                <Home path="/" />
                <Login path="/login" />
                <Register path="/register" />
                <Profile path="/Profile/:id" />
              </Router>
            </Suspense>
          </div>
          <Chat />
          <ChatWindowContainer />
        </div>
      </div>
    </React.StrictMode>
  );
}

export default App;
