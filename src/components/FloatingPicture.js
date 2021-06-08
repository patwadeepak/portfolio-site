import "../static/css/FloatingPicture.css";
import mypic from "../static/img/mypic.jpg";

const FloatingPicture = ({ file }) => {
  return (
    <div
      className="full-height-section"
      style={{ height: "60vh" }}
      data-scroll-section
    >
      <div className="images">
        <img className="float-scroll" src={mypic} alt="nice pic" />
      </div>
    </div>
  );
};

export default FloatingPicture;
