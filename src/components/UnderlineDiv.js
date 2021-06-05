import {Typography} from "@material-ui/core"
import '../static/css/UnderlineDiv.css'

const UnderlineDiv = ({text}) => {
    return (
        <div>
            <Typography variant="h3" color="initial"><span className='middle'>Middle</span></Typography>
            <Typography variant="h3" color="initial"><span className='left'>Left</span></Typography>
            <Typography variant="h3" color="initial"><span className='right'>Right</span></Typography>
            <Typography variant="h3" color="initial"><span className='bottom'>Bottom</span></Typography>
            <Typography variant="h3" color="initial"><span className='left-to-right'>Left to Right</span></Typography>
        </div>
    )
}

export default UnderlineDiv
