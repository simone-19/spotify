// <!--SIDEBAR VERTICAL-->

import { HouseDoorFill, BookFill } from "react-bootstrap-icons";
// import { Ho, Book } from "react-bootstrap-icons";
import logo from "../assets/logo/logo.png";
import { useState } from "react";

const Mynav = ({ impostazione }) => {
  const [query, setquery] = useState("");
  const search = (e) => {
    e.preventDefault();
    fetch(
      "https://striveschool-api.herokuapp.com/api/deezer/search?q=" + query,
      {
        method: "GET",
        headers: {
          "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
          "X-RapidAPI-Key":
            "9d408f0366mshab3b0fd8e5ecdf7p1b09f2jsne682a1797fa0",
        },
      }
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("errore");
        }
      })
      .then((data) => {
        impostazione(data.data);
      })
      .catch((err) => {
        console.log("errore", err);
      });
  };
  return (
    <div className="col col-2">
      <nav
        className="navbar navbar-expand-md fixed-left justify-content-between"
        id="sidebar"
      >
        <div className="container flex-column align-items-start">
          <a className="navbar-brand" href="index.html">
            <img src={logo} alt="Spotify Logo" width="131" height="40" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <ul>
                <li>
                  <a
                    className="nav-item nav-link d-flex align-items-center"
                    href="home"
                  >
                    <HouseDoorFill />
                    &nbsp; Home
                  </a>
                </li>
                <li>
                  <a
                    className="nav-item nav-link d-flex align-items-center"
                    href="your library"
                  >
                    <BookFill />
                    &nbsp; Your Library
                  </a>
                </li>
                <li>
                  <form className="input-group mt-3" onSubmit={search}>
                    {/* search */}
                    <input
                      type="text"
                      className="form-control"
                      id="searchField"
                      placeholder="Search"
                      aria-label="Search"
                      aria-describedby="basic-addon2"
                      value={query}
                      onChange={(e) => {
                        setquery(e.target.value);
                      }}
                    />
                    {/* search */}
                    <div className="input-group-append">
                      <button
                        className="btn btn-outline-secondary btn-sm h-100"
                        type="submit"
                      >
                        GO
                      </button>
                    </div>
                  </form>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div id="basso" className="nav-btn">
          <button id="sign" className="btn signup-btn" type="button">
            Sign Up
          </button>
          <button id="login" className="btn login-btn" type="button">
            Login
          </button>
          <a href="Cookie Policy">Cookie Policy</a> |
          <a href="Privacy"> Privacy</a>
        </div>
      </nav>
    </div>
  );
};

export default Mynav;
