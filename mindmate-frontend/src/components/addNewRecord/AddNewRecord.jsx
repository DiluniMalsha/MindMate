import "./AddNewRecord.css";
import React from "react";
import Grid from "@mui/material/Grid";
import CustomInput from "../inputField/InputField";
import CustomButton from "../button/CustomButton";
import {styled} from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import close from "../../assets/formImg/close.png";
import Swal from "sweetalert2";

const Item = styled(Paper)(({theme}) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#ffffff" : "#ffffff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
}));
const closePopUp = (setPopupVisible) => (event) => {
    setPopupVisible(false);
};

const handleAddData = (swalTitle) => (event) => {
    // Swal.fire({
    //     title: 'Are you sure?',
    //     text: "You won't be able to revert this!",
    //     icon: 'warning',
    //     showCancelButton: true,
    //     confirmButtonColor: '#3085d6',
    //     cancelButtonColor: '#d33',
    //     confirmButtonText: 'Yes, delete it!'
    // }).then((result) => {
    //     if (result.isConfirmed) {
    Swal.fire("Saved!", swalTitle, "success").then((result) => {
        if (result.isConfirmed) {
            window.location.reload(true);
        }
        //     }
    });
};
const AddNewRecord = ({
                          title,
                          from,
                          to,
                          task,
                          note,
                          reminder,
                          setPopupVisible,
                          swalTitle,
                      }) => {
    return (
        <div id="add-new-main-section">
            <div id="add-record-background"></div>
            <div className="set-background record-form">
                <img
                    src={close}
                    alt="cloase"
                    className="close-btn"
                    onClick={closePopUp(setPopupVisible)}
                />
                <p className="title-align-add-form">{title}</p>
                <Grid container rowSpacing={1} columnSpacing={{xs: 1, sm: 2, md: 3}}>
                    <Grid item xs={12}>
                        <Item>
                            <label className="label-align-add">Day</label>
                            <br/>
                            <select
                                id=""
                                name="gender"
                                className="selection-gender"
                                style={{fontSize: "17px", textAlign: "left"}}
                            >
                                <option value="Sunday" className="g-gender">
                                    Sunday
                                </option>
                                <option value="Monday" className="g-gender">
                                    Monday
                                </option>
                                <option value="Tuesday" className="g-gender">
                                    Tuesday
                                </option>
                                <option value="Wednesday" className="g-gender">
                                    Wednesday
                                </option>
                                <option value="Thursday" className="g-gender">
                                    Thursday
                                </option>
                                <option value="Friday" className="g-gender">
                                    Friday
                                </option>
                                <option value="Saturday" className="g-gender">
                                    Saturday
                                </option>
                            </select>
                            {/*<label htmlFor="pet-select">Choose a pet:</label>*/}

                            {/*<select name="pets" id="gender" id="pet-select" style={{padding:'15px'}}>*/}
                            {/*    <option value="" className='g-gender'>--Please choose an option--</option>*/}
                            {/*    <option value="dog">Dog</option>*/}
                            {/*    <option value="cat">Cat</option>*/}
                            {/*    <option value="hamster">Hamster</option>*/}
                            {/*    <option value="parrot">Parrot</option>*/}
                            {/*    <option value="spider">Spider</option>*/}
                            {/*    <option value="goldfish">Goldfish</option>*/}
                            {/*</select>*/}
                        </Item>
                    </Grid>
                    <Grid item xs={6}>
                        <Item>
                            <label className="label-align-add">From</label>
                            <br/>
                            <CustomInput
                                type="time"
                                size="20"
                                radius="10"
                                width="100%"
                                fontSize="17"
                                className='font-set'
                            />
                        </Item>
                    </Grid>
                    <Grid item xs={6}>
                        <Item>
                            <label className="label-align-add">To</label>
                            <br/>
                            <CustomInput
                                type="time"
                                size="20"
                                radius="10"
                                width="100%"
                                fontSize="17"
                                className="font-set"
                            />
                        </Item>
                    </Grid>
                    <Grid item xs={12}>
                        <Item>
                            <label className="label-align-add">Task</label>
                            <br/>
                            <CustomInput
                                type="text"
                                size="20"
                                radius="10"
                                width="100%"
                                fontSize="17"
                                className="font-set"
                            />
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
                            onclick={handleAddData(swalTitle)}
                        >
                            Add
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
                            onclick={closePopUp(setPopupVisible)}
                        >
                            Cancel
                        </CustomButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddNewRecord;
