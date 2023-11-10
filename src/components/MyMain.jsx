import Getalbum1 from "./Getalbum1";
import Getalbum2 from "./Getalbum2";
import Getalbum3 from "./Getalbum3";
import MySong from "./MySong";

const MyMain = ({ ricerca }) => {
  return (
    <div className="col-12 col-md-9 offset-md-3 mainPage">
      <div className="row mt-2">
        <div className="col-9 col-lg-11 mainLinks d-none d-md-flex">
          <a href="https://www.google.com/">TRENDING</a>
          <a href="https://www.google.com/">PODCAST</a>
          <a href="https://www.google.com/">MOODS AND GENRES</a>
          <a href="https://www.google.com/">NEW RELEASES</a>
          <a href="https://www.google.com/">DISCOVER</a>
        </div>
      </div>
      <div className="row">
        <div className="col-10">
          {ricerca && (
            <div id="searchResults">
              <h2>Search Results</h2>
              <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3">
                {ricerca.map((item, index) => (
                  <MySong key={index} data={item} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="row">
        <div className="col-10">
          <div id="rock">
            <h2>Rock classics</h2>
            <div
              className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
              id="rockSection"
            >
              <Getalbum1 alb1="queen" />
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-10">
          <div id="pop">
            <h2>Pop Culture</h2>
            <div
              className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
              id="popSection"
            >
              <Getalbum2 alb2="romeo santos" />
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-10">
          <div id="hiphop">
            <h2>#HipHop</h2>
            <div
              className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
              id="hipHopSection"
            >
              <Getalbum3 alb3="eminem" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MyMain;
