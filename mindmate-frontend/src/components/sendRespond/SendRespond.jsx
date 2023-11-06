import "./SendRespond.css"
import {FormControl, FormControlLabel, FormLabel} from "@mui/material";
import {Radio, RadioGroup} from "rsuite";
import close from "../../assets/formImg/close.png";
import Grid from "@mui/material/Grid";
import CustomInput from "../inputField/InputField";
import CustomButton from "../button/CustomButton";
import React from "react";
import {styled} from "@mui/material/styles";
import Paper from "@mui/material/Paper";

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
const SendRespond = ({setPopupVisible}) => {
    return (
        <>
            <div id="add-new-main-section">
                <div id="add-record-background"></div>
                <div className="set-background record-form">
                    <img
                        src={close}
                        alt="close"
                        className="close-btn"
                        onClick={closePopUp(setPopupVisible)}
                    />
                    <p className="title-align-add-form">Response</p>
                    <Grid container rowSpacing={1} columnSpacing={{xs: 1, sm: 2, md: 3}}>
                        <Grid item xs={12}>
                        </Grid>
                        <Grid item xs={12}>
                            <Item>
                                <FormControl className="form-controls">
                                    {/*<FormLabel id="demo-radio-buttons-group-label">File Type</FormLabel>*/}
                                    <RadioGroup
                                        aria-labelledby="demo-radio-buttons-group-label"
                                        defaultValue="female"
                                        name="radio-buttons-group"
                                    >
                                        <FormControlLabel label="Picture"  value="Picture" control={<Radio />}  />
                                        <br/>
                                        <FormControlLabel value="Audio" control={<Radio />} label="Audio" /><br/>
                                        <FormControlLabel value="Video" control={<Radio />} label="Video" /><br/>
                                    </RadioGroup>
                                </FormControl>
                            </Item>
                        </Grid>
                        <Grid item xs={12}>
                            <Item>
                                <label className="label-align-add">Massage</label>
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
                                onclick={closePopUp(setPopupVisible)}
                            >
                                Cancel
                            </CustomButton>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SendRespond;