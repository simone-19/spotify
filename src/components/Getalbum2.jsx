import { useEffect, useState } from "react";
import MySong from "./MySong";
// import { Col } from "react-bootstrap";

const Getalbum2 = ({ alb2 }) => {
  const [album2, setAlbum2] = useState(null);

  useEffect(() => {
    if (!album2) {
      getdata();
    }

    console.log("ferma la fetch", album2);
  }, [album2, alb2]);

  const getdata = () => {
    fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=" + alb2)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("errore");
        }
      })
      .then((data) => {
        setAlbum2(data.data);
      })
      .catch((err) => {
        console.log("errore", err);
      });
  };

  return (
    <>
      {album2 &&
        album2
          .slice(0, 4)
          .map((item, index) => <MySong key={index} data={item} />)}
    </>
  );
};

export default Getalbum2;
