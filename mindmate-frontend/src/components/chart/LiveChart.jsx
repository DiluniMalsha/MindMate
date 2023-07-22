import {LineChart} from '@mui/x-charts/LineChart';
import "./LiveChart.css"
import * as React from "react";
import CustomButton from "../button/CustomButton";
import Grid from "@mui/material/Grid";

const LiveChart = ({width, height}) => {
    return (
        <>
            <div className="checking-pattern-btn-set">
                <p className="title-align btn-title">
                    Her Past Emotion Changing Pattern
                </p>
                <Grid container spacing={2} sx={{marginBottom:'20px'}}>
                    <Grid item xs={6} md={8} sx={{textAlign:'left'}}>
                        <CustomButton
                            type="button"
                            variant="active"
                            border='active'
                            radius="20"
                            size="sm"
                            className="chart-btn-responsive"
                            fontSize="18"
                            width="150"
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
                        >
                            Week
                        </CustomButton>
                    </Grid>
                    <Grid item xs={6} md={4} sx={{textAlign:'right'}}>
                        <CustomButton
                            type="button"
                            variant="active"
                            radius="20"
                            size="sm"
                            className="chart-btn-responsive align-right me-0"
                            fontSize="18"
                            width="180"
                        >
                            Check History
                        </CustomButton>
                    </Grid>
                </Grid>
                {/*</div>*/}

                <div className="chart-border">
                    <LineChart sx={{border: '1px solid #1E5D88'}}
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
            </div>
        </>

    );
}
export default LiveChart;
