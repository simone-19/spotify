import { useEffect, useState } from "react";
import MySong from "./MySong";
// import { Col } from "react-bootstrap";

const Getalbum3 = ({ alb3 }) => {
  const [album3, setAlbum3] = useState(null);

  useEffect(() => {
    if (!album3) {
      getdata();
    }

    console.log("ferma la fetch", album3);
  }, [album3, alb3]);

  const getdata = () => {
    fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=" + alb3)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("errore");
        }
      })
      .then((data) => {
        setAlbum3(data.data);
      })
      .catch((err) => {
        console.log("errore", err);
      });
  };

  return (
    <>
      {album3 &&
        album3
          .slice(0, 4)
          .map((item, index) => <MySong key={index} data={item} />)}
    </>
  );
};

export default Getalbum3;
