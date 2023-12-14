import React from "react";
import Grid from "@mui/material/Grid";
import CustomButton from "../button/CustomButton";
import {styled} from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import close from "../../assets/formImg/close.png";
import {patchReminderSend} from "../../repository/schedulerRepository";
import Swal from "sweetalert2";

const Item = styled(Paper)(({theme}) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#ffffff" : "#ffffff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
}));
const closePopUp = (setPopupVisibles) => (event) => {
    setPopupVisibles(false);
};

const  handleSendReminder= (taskId)=> (event) => {
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, Send it!'
    }).then((result) => {
        if (result.isConfirmed) {
            patchReminderSend(taskId)
                .then((res) => {
                })
                .catch(err => console.error(err))

            Swal.fire(
                'Send!',
                'Reminder Send Successful',
                'success'
            ).then((result) => {
                if (result.isConfirmed) {
                    window.location.reload(true);
                }
            })
        }
    })
}

const SendReminder = ({setPopupVisibles, upcomingEvent, time, taskId}) => {

    return (
        <>
            {time && (
                <div id="add-new-main-section">
                    <div id="add-record-background"></div>
                    <div className="set-background record-form">
                        <img
                            src={close}
                            alt="close"
                            className="close-btn"
                            onClick={closePopUp(setPopupVisibles)}
                        />
                        <p className="title-align-add-form">Send Reminder For Isuru</p>
                        <Grid container rowSpacing={1} columnSpacing={{xs: 1, sm: 2, md: 3}}>
                            <Grid item xs={12}>
                                <Item>
                                    <div style={{textAlign: "center"}}>
                                <span className='mood-des'
                                      style={{fontSize: '1.5rem'}}>
                                Upcoming Task For Isuru
                            </span>
                                        <br/>
                                        <div className='mt-5 upcoming'>
                                            {upcomingEvent}
                                        </div>
                                        <br/>
                                        <div className='upcoming mb-0'>
                                            {time}
                                        </div>
                                        <br/>
                                    </div>
                                </Item>
                            </Grid>
                        </Grid>
                        <div className="row" style={{width: "100%"}}>
                            <div className="col">
                                <CustomButton
                                    type="button"
                                    variant="primary"
                                    radius="20"
                                    size="sm"
                                    className="mt-3 mb-4"
                                    fontSize="17"
                                    width="120"
                                    onclick={handleSendReminder(taskId)}
                                >
                                    Send
                                </CustomButton>
                            </div>

                            <div className="col">
                                <CustomButton
                                    type="button"
                                    variant="cancel"
                                    radius="20"
                                    size="xsm"
                                    className="mt-3 mb-4"
                                    fontSize="17"
                                    width="120"
                                    onclick={closePopUp(setPopupVisibles)}
                                >
                                    Cancel
                                </CustomButton>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default SendReminder;
