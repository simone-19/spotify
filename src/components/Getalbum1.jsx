import { useEffect, useState } from "react";
import MySong from "./MySong";
// import { Col } from "react-bootstrap";

const Getalbum1 = ({ alb1 }) => {
  const [album1, setAlbum1] = useState(null);

  useEffect(() => {
    if (!album1) {
      getdata();
    }

    console.log("ferma la fetch", album1);
  }, [album1, alb1]);

  const getdata = () => {
    fetch(
      "https://striveschool-api.herokuapp.com/api/deezer/search?q=" + alb1,
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
        setAlbum1(data.data);
      })
      .catch((err) => {
        console.log("errore", err);
      });
  };

  return (
    <>
      {album1 &&
        album1
          .slice(0, 4)
          .map((item, index) => <MySong key={index} data={item} />)}
    </>
  );
};

export default Getalbum1;
