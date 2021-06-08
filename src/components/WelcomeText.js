import { Typography } from "@material-ui/core";
import "../App.css";

const WelcomeText = () => {
  const props = {
    color: "initial",
    style: {
      fontSize: "calc(5vw + 5vh)",
    },
  };

  return (
    <div className="full-height-section" data-scroll-section>
      <div className="container">
        <Typography {...props}>THANK YOU</Typography>
        <Typography {...props}>FOR INVADING</Typography>
        <Typography {...props}>MY SPACE</Typography>
      </div>
    </div>
  );
};

export default WelcomeText;
