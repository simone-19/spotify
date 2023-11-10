import { CardImg, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";

const MySong = ({ data }) => {
  const dispatch = useDispatch;
  const detail = () => {
    // dispatch(selected(data))
  };
  return (
    <Col className="col-3">
      <CardImg
        className=" m-1"
        // style={{ width: "200px" }}
        variant="top"
        onClick={detail}
        src={data.album.cover_medium}
      />
    </Col>
  );
};
export default MySong;
