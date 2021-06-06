import { Typography } from "@material-ui/core";
import "../static/css/UnderlineDiv.css";

const UnderlineDiv = ({ text, size }) => {
  return (
    <div>
      <Typography variant={size} color="initial">
        <span className="left-to-right-hold">{text}</span>
      </Typography>
    </div>
  );
};

export default UnderlineDiv;
