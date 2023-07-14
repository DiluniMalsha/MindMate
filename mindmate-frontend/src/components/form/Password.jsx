import Grid from "@mui/material/Grid";
import CustomInput from "../inputField/InputField";
import React from "react";
import {styled} from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import "./FormComponent.css";
import CustomButton from "../button/CustomButton";
import Swal from "sweetalert2";


const Item = styled(Paper)(({theme}) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#ffffff' : '#ffffff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


const Password = ({title,
                  }) => {
    const handleUpdatePassword = (event) => {
        Swal.fire({
            title: 'Do you want to save the changes?',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'Save',
            denyButtonText: `Don't save`,
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                Swal.fire('Password Changed Successful!', '', 'success')
            } else if (result.isDenied) {
                Swal.fire('Changes are not save', '', 'info')
            }
        })
    };
    return (
        <>
            <p className="title-align">{title}</p>

            <Grid item xs={12} className='Password-section'>
                <Item>
                    <label className="label-align">Current Password</label>
                    <br/>
                    <CustomInput
                        type="password"
                        size="20"
                        radius="10"
                        width="100%"
                        fontSize='18'
                    />
                </Item>
            </Grid>
            <Grid item xs={12}>
                <Item>
                    <label className="label-align">New Password</label>
                    <br/>
                    <CustomInput
                        type="password"
                        size="20"
                        radius="8"
                        width="100%"
                        fontSize='18'
                    />
                </Item>
            </Grid>
            <Grid item xs={12}>
                <Item>
                    <label className="label-align">Re-Enter New Password</label>
                    <br/>
                    <CustomInput
                        type="password"
                        size="20"
                        radius="8"
                        width="100%"
                        fontSize='18'
                    />
                </Item>
            </Grid>
            <CustomButton
                type="button"
                variant="primary"
                radius="8"
                size="sm"
                className="mt-3 mb-4 change-password-margin"
                fontSize="18"
                width="150"
                onclick={handleUpdatePassword}
            >
                Update
            </CustomButton>

        </>
    );
}

export default Password;