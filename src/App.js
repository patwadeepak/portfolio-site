import "./App.css";
import FloatingPicture from "./components/FloatingPicture";
import UnderlineDiv from "./components/UnderlineDiv";
import Typography from "@material-ui/core/Typography";
import PageProgressBar from "./components/PageProgressBar";
import Grid from "@material-ui/core/Grid";
import brand1 from "./static/svg/brand1.svg";
import brand2 from "./static/svg/brand2.svg";
import brand3 from "./static/svg/brand3.svg";
import brand4 from "./static/svg/brand4.svg";
import brand5 from "./static/svg/brand5.svg";
import brand6 from "./static/svg/brand6.svg";

function App() {
  return (
    <div className="App">
      <PageProgressBar />

      <UnderlineDiv text="Deepak Patwa" size="h5" />

      <Typography variant="h1" color="initial">
        THANK YOU FOR INVADING MY SPACE
      </Typography>

      <FloatingPicture src="../static/img/mypic.jpg" />

      <Typography variant="h6" color="initial">
        Hello and welcome! I'm a digital designer and web developer based in
        India, specializing in visual brand identity, UI/UX design and web
        development. At the moment, i‘m working full-time with wipro, where i
        focus on delivering high quality visual and technical solutions for
        global and local clients.
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={6}>
          <img src={brand1} alt="brand1" />
        </Grid>
        <Grid item xs={6}>
          <img src={brand2} alt="brand2" />
        </Grid>
        <Grid item xs={6}>
          <img src={brand3} alt="brand3" />
        </Grid>
        <Grid item xs={6}>
          <img src={brand4} alt="brand4" />
        </Grid>
        <Grid item xs={6}>
          <img src={brand5} alt="brand5" />
        </Grid>
        <Grid item xs={6}>
          <img src={brand6} alt="brand6" />
        </Grid>
      </Grid>

      <div id="contact">
        <UnderlineDiv text="EMAIL" size="h3" />
        <UnderlineDiv text="DRIBBLE" size="h3" />
        <UnderlineDiv text="TWITTER" size="h3" />
      </div>
    </div>
  );
}

export default App;
