import * as React from "react";
import "./DataSet.css"
import {AlbumsOutline} from "react-ionicons";
import HeadingTitle from "../../components/title/HeadingTitle";
import CustomInput from "../../components/inputField/InputField";
import {useState} from "react";
import {styled} from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import DownloadData from "../../components/downloadFiles/DownloadData";


const Item = styled(Paper)(({theme}) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#ffffff" : "#ffffff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
}));

const DataSet = (props) => {
    let icon = <AlbumsOutline
        color={'#4285f5'}
        title={"Home"}
        height="20px"
        width="20px"
        style={{marginBottom: '5px'}}
    />

    const [date1, setDate1] = useState("");
    const [date2, setDate2] = useState("");

    const day1 =  "2023-10-01 00:00:00"
    const day2 =  "2024-10-01 00:00:00"

    const handleChangeDate1 = (event) => {
        setDate1(event.target.value);
    }
    const handleChangeDate2 = (event) => {
        setDate2(event.target.value);
    }
    return (
        <div>
            <HeadingTitle title={'Dataset'} icon={icon} ml={'60px'}/>
            <div className="date-picker">
                <Grid container item xs={12}>
                    <Grid item xs={6}>
                        <Item>
                            <label className="label-align-add">From</label>
                            <br/>
                            <CustomInput
                                value={date1}
                                type="datetime-local"
                                size="20"
                                radius="10"
                                width="100%"
                                fontSize="17"
                                className='font-set'
                                onchange={handleChangeDate1}
                            />
                        </Item>
                    </Grid>
                    <Grid item xs={6}>
                        <Item>
                            <label className="label-align-add">To</label>
                            <br/>
                            <CustomInput
                                value={date2}
                                type="datetime-local"
                                size="20"
                                radius="10"
                                width="100%"
                                fontSize="17"
                                className='font-set'
                                onchange={handleChangeDate2}
                            />
                        </Item>
                    </Grid>
                </Grid>
            </div>
            <DownloadData
            fromDate={day1}
            toDate={day2}/>
        </div>
    );
}

export default DataSet;