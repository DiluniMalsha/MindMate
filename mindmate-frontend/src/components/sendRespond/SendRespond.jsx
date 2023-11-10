import "./SendRespond.css"
import close from "../../assets/formImg/close.png";
import Grid from "@mui/material/Grid";
import CustomInput from "../inputField/InputField";
import CustomButton from "../button/CustomButton";
import React, {useState} from "react";
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

    const [value, setValue] = React.useState("image");
    const [message, setMessage] = useState();

    const handleChangeMessage = (event) => {
        setMessage(event.target.value);
    }

    const handleChangeType = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    }

    console.log({value})
    console.log({message})

    function handleSendResponse() {

    }

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
                                <div>
                                    <div className="form-check" onChange={handleChangeType}>
                                        <div className="label-radio">
                                            <input className="form-check-input" type="radio" name="exampleRadios"
                                                   id="exampleRadios1" value="image"/>
                                            <label className="form-check-label label-padding">
                                                Image
                                            </label>
                                        </div>
                                        <div className="label-radio">
                                            <input className="form-check-input " type="radio" name="exampleRadios"
                                                   id="exampleRadios2" value="audio"/>
                                            <label className="form-check-label label-padding">
                                                Audio
                                            </label>
                                        </div>
                                        <div className="label-radio">
                                            <input className="form-check-input " type="radio" name="exampleRadios"
                                                   id="exampleRadios2" value="video"/>
                                            <label className="form-check-label label-padding">
                                                Video
                                            </label>
                                        </div>
                                    </div>
                                </div>
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
                                    onchange={handleChangeMessage}
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
                                onclick={handleSendResponse}
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