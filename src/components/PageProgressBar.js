import "../static/css/PageProgressBar.css";
import { useEffect, useState } from "react";

const PageProgressBar = () => {
  const [scrollPercentage, setScrollPercentage] = useState("");

  const progressBarStyle = {
    width: scrollPercentage,
    backgroundColor: "Green",
    height: "5px",
    float: "left",
  };

  const heightInViewport = () => {
    let w = window.document.body.getBoundingClientRect();
    let maxScrollValue = w.height - window.innerHeight;
    let scrollPosition = -w.top;
    let scrollPercentage = (scrollPosition / maxScrollValue) * 100;
    setScrollPercentage(scrollPercentage + "%");
  };

  useEffect(() => {
    window.addEventListener("scroll", heightInViewport);
    window.addEventListener("load", heightInViewport);
  }, []);

  return (
    <div className="progress-bar-container" style={progressBarStyle}></div>
  );
};

export default PageProgressBar;
