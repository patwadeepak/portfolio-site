import { Grid } from '@material-ui/core';
import * as SVG from '../static/svg/SVG';

const BrandGrid = () => {
  return (
    <div className='full-height-section'>
      <Grid
        container
        spacing={10}
        justify='center'
        direction='row'
        alignItems='center'
        style={{ maxWidth: '50%', margin: '0 auto' }}>
        <Grid item lg={6} xs={12}>
          <img src={SVG.brand1} alt='brand1' />
        </Grid>
        <Grid item lg={6} xs={12}>
          <img src={SVG.brand2} alt='brand2' />
        </Grid>
        <Grid item lg={6} xs={12}>
          <img src={SVG.brand3} alt='brand3' />
        </Grid>
        <Grid item lg={6} xs={12}>
          <img src={SVG.brand4} alt='brand4' />
        </Grid>
        <Grid item lg={6} xs={12}>
          <img src={SVG.brand5} alt='brand5' />
        </Grid>
        <Grid item lg={6} xs={12}>
          <img src={SVG.brand6} alt='brand6' />
        </Grid>
      </Grid>
    </div>
  );
};

export default BrandGrid;
