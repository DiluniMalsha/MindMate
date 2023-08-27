import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import {useState} from "react";
import {styled} from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Swal from "sweetalert2";
import {CreateOutline, TrashOutline, AddCircleSharp} from "react-ionicons";
import NewReminder from "../addReminder/NewReminder";
import Calendar from "react-calendar";
import "./SchedulerTimetable.css"

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

const SchedulerTimetable = ({startTime, endTime, description}) => {

    const [popupVisible, setPopupVisible] = useState(false);

    const [title, setTitle] = useState('Reminder');

    const [btnName, setBtnName] = useState('Update');

    const [eventsAvailable, setEventsAvailable] = React.useState(false);

    const [events, setEvents] = React.useState([]);

    const [selectedDate, setSelectedDate] = useState(new Date());

// {/*---------------------------------------------------- button handle-----------------------------------------------*/}
    const handlePopUp = (value) => {
        setPopupVisible(!popupVisible);
        setTitle('Reminder');
        setBtnName('Update')

    }
    const handleWantAdded = (value) => {
        setPopupVisible(!popupVisible);
        setTitle('Add New Reminder')
        setBtnName('Add')
    }


    const markedDates = [
        {
            date: '2023-07-28',
            timestamp: 1690482600000,
            events: [
                {
                    note: 'Dancing Concert',
                    from: 1690540200000,
                    to: 1690543800000,
                    remindTime: 1690539300000
                },
                {
                    note: 'Special Dinner',
                    from: 1690554600000,
                    to: 1690561800000,
                    remindTime: 1690551000000
                }
            ]
        },
        {
            date: '2023-07-14',
            timestamp: 1689273000000,
            events: [
                {
                    note: 'Road Trip',
                    from: 1689301800000,
                    to: 1689330600000,
                    remindTime: 1689294600000
                }
            ]
        }
    ]

    const handleDayChange = (value) => {
        setSelectedDate(value);
        console.log("handle day change");
        if (markedDates.some(item => value.valueOf() === item.timestamp)) {
            setEventsAvailable(true);
            setEvents(markedDates.find(item => value.valueOf() === item.timestamp).events);
        } else {
            setEventsAvailable(false);
            setEvents([]);
        }
    }

    function getTimeString(t) {
        const time = new Date(t);
        return time.toLocaleTimeString();
    }


    return (
        <div className="row w-100 ">
            <div
                className="col-xl-5  col-lg-5 col-md-12 col-sm-12 col-sm-12    child-settings-sections schedule-responsive">
                {/*----------------------------------------------left side ....... Calendar---------------------------------------*/}
                <Calendar onChange={(value, event) => handleDayChange(value)} value={selectedDate}
                          tileClassName={({
                                              activeStartDate,
                                              date,
                                              view
                                          }) => view === 'month'
                          && markedDates.some(item => date.valueOf() === item.timestamp) ? 'highlight' : null}

                />
            </div>
            {/*----------------------------------------------Right side ....... Item------------------------------------------------*/}

            <div className="col-xl-5  col-lg-5 col-md-12 col-sm-12 col-sm-12 ">
                <div className="m-1 mt-4">
                    <Box sx={{flexGrow: 1}}>
                        <Grid container spacing={{xs: 1, sm: 2, md: 2}}>
                            {eventsAvailable &&
                                <>
                                    {events.map((e) => (
                                        <Grid item xs={12} lg={12}>
                                            <Item
                                                sx={{
                                                    textAlign: "left",
                                                    marginBottom: "0",
                                                    fontSize: "20px",
                                                    bottom: "0",
                                                }}
                                            >
                                                <div className="item-text-align">
                                                    <div className="row w-100">
                                                        <div className="col-xl-10 col-9">
                                                            <div>{e.note}</div>
                                                            <div
                                                                className="eventTime">From {getTimeString(e.from)} to {getTimeString(e.to)}</div>
                                                            <div className="eventRemindTime">Remind Earlier
                                                                At {getTimeString(e.remindTime)}</div>
                                                        </div>
                                                        <div className="col-xl-1 col-1 "
                                                             style={{cursor: "pointer", paddingRight: '10px'}}>
                                                            <CreateOutline
                                                                color={"#a3a3a3"}
                                                                height="30px"
                                                                width="30px"
                                                                onClick={handlePopUp}
                                                                className="icon-size"
                                                            />
                                                        </div>
                                                        <div className="col-1 deleteIcon" style={{cursor: "pointer"}}>
                                                            <TrashOutline
                                                                onClick={handleDeleteRow}
                                                                color={"#ff0000"}
                                                                height="30px"
                                                                width="30px"
                                                                className="icon-size"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </Item>
                                        </Grid>
                                    ))}
                                </>
                            }
                            {!eventsAvailable &&
                                <Grid item xs={12} lg={12}>
                                    <Item
                                        sx={{
                                            textAlign: "left",
                                            marginBottom: "0",
                                            fontSize: "20px",
                                            bottom: "0",
                                        }}
                                    >
                                        <div className="item-text-align">
                                            <div className="row w-100">
                                                <div className="col-xl-12 col-12">No Events Available</div>
                                            </div>
                                        </div>
                                    </Item>
                                </Grid>
                            }
                        </Grid>

                    </Box>
                    <Box sx={{flexGrow: 1, marginTop: '25px'}}>
                        <Grid container spacing={{xs: 1, sm: 2, md: 2}}>
                            <Grid item xs={12} lg={12} sx={{cursor: 'pointer'}}>

                                <AddCircleSharp
                                    color={'#1E5D88'}
                                    height="30px"
                                    width="30px"
                                    onClick={handleWantAdded}
                                />
                            </Grid>
                        </Grid>

                    </Box>
                    {popupVisible && (
                        <NewReminder
                            dates='ds'
                            notes='hwllod'
                            reminder='14:52'
                            buttonName={btnName}
                            id="search-student-div"
                            title={title}
                            swalTitle="Reminder has been updated successfully!"
                            setPopupVisible={setPopupVisible}
                        />
                    )}
                </div>
            </div>
        </div>
    );
}

export default SchedulerTimetable;