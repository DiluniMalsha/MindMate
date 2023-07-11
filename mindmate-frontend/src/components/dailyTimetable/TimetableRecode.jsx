import {useState} from "react";
import * as React from 'react';
import {styled} from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import {TrashOutline} from 'react-ionicons'
import {PencilOutline} from 'react-ionicons'
import Swal from "sweetalert2";
import AddNewRecord from "../addNewRecord/AddNewRecord";

const Item = styled(Paper)(({theme}) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#ffffff' : '#ffffff',
    color: theme.palette.mode === 'dark' ? '#000000' : '#050505',
    height: '100%',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    // color: theme.palette.text.secondary,
}));

const handleDeleteRow = (event) => {
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire(
                'Deleted!',
                'Recode has been deleted.',
                'success'
            )
        }
    })
};
const TimetableRecode = ({startTime, endTime, description}) => {

    const [popupVisible, setPopupVisible] = useState(false);
    const handlePopUp = (value) => {
        setPopupVisible(!popupVisible);
    }

    return (
        <div className="m-2">
            <Box sx={{flexGrow: 1}}>
                <Grid container spacing={2}>
                    <Grid item xs={1.5}>
                        <Item sx={{backgroundColor: "#171742", color: "#ffffff"}}>
                            {startTime} <br/> to <br/> {endTime}
                        </Item>
                    </Grid>
                    <Grid item xs={10.5}>
                        <Item
                            sx={{
                                textAlign: "left",
                                marginBottom: "0",
                                fontSize: "20px",
                                bottom: "0",
                            }}
                        >
                            <div className="item-text-align">
                                <div className="row">
                                    <div className="col-10">{description}</div>
                                    <div className="col-1" style={{cursor: "pointer"}}>
                                        <PencilOutline
                                            color={"#000000"}
                                            height="30px"
                                            width="30px"
                                            onClick={handlePopUp}
                                        />
                                    </div>
                                    <div className="col-1" style={{cursor: "pointer"}}>
                                        <TrashOutline
                                            onClick={handleDeleteRow}
                                            color={"#ff0000"}
                                            height="30px"
                                            width="30px"
                                        />
                                    </div>
                                </div>
                            </div>
                        </Item>
                    </Grid>
                </Grid>
            </Box>
            {popupVisible && (
                <AddNewRecord
                    title="Edit Timetable Record"
                    id="search-student-div"
                    swalTitle="Record has been updated successfully!"
                    setPopupVisible={setPopupVisible}
                />
            )}
        </div>
    );
}

export default TimetableRecode;