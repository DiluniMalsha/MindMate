import "./LiveChart.css";
import {LineChart} from '@mui/x-charts/LineChart';
import CustomButton from "../button/CustomButton";
import Grid from "@mui/material/Grid";

const LiveChart = ({title, width, height, display}) => {
    return (
        <>
            <div className="checking-pattern-btn-set">
                <p className="btn-title">
                    {title}
                </p>
                <Grid container spacing={2} sx={{marginBottom:'20px'}}>
                    <Grid item xs={12} md={8} sx={{textAlign:'left'}} className='grid-btn-set'>
                        <CustomButton
                            type="button"
                            variant="active"
                            border='active'
                            radius="20"
                            size="sm"
                            className="chart-btn-responsive"
                            fontSize="18"
                            width="150"
                            display = {display}
                        >
                            Day
                        </CustomButton>
                        <CustomButton
                            type="button"
                            variant="active"
                            radius="20"
                            size="sm"
                            className="chart-btn-responsive"
                            fontSize="18"
                            width="150"
                            display = {display}
                        >
                            3 Days
                        </CustomButton>
                        <CustomButton
                            type="button"
                            variant="active"
                            radius="20"
                            size="sm"
                            className="chart-btn-responsive"
                            fontSize="18"
                            width="150"
                            display = {display}
                        >
                            Week
                        </CustomButton>
                    </Grid>
                    <Grid item xs={12} md={4} sx={{textAlign:'right'}} className='history-grid'>
                        <CustomButton
                            type="button"
                            variant="active"
                            radius="20"
                            size="sm"
                            className="chart-btn-responsive history-btn-style display-his-btn me-0"
                            fontSize="18"
                            width="180"
                            display = {display}
                        >
                            Check History
                        </CustomButton>
                    </Grid>
                </Grid>
                {/*</div>*/}
                {/*sx={{border: '1px solid #1E5D88'}}*/}
                <div className="chart-border">
                    <LineChart
                               xAxis={[{data: [1, 2, 3, 5, 8, 10]}]}
                               series={[
                                   {
                                       data: [2, 5.5, 2, 8.5, 1.5, 5],
                                   },
                               ]}
                               width={width}
                               height={height}
                    />
                </div>
                <Grid item xs={12} md={4} sx={{textAlign:'right'}} className='history-grid'>
                    <CustomButton
                        type="button"
                        variant="active"
                        radius="20"
                        size="sm"
                        className="chart-btn-responsive history-btn-style display-his-btn-2  me-0"
                        fontSize="18"
                        width="180"
                    >
                        Check History
                    </CustomButton>
                </Grid>
            </div>
        </>

    );
}
export default LiveChart;
