import React from "react";
import CustomInput from "../inputField/InputField";
import "./FormComponent.css";
import {styled} from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import CustomButton from "../button/CustomButton";
import Password from "./Password";
import Swal from "sweetalert2"

const Item = styled(Paper)(({theme}) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#ffffff' : '#ffffff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const FormComponent = ({
                           title,
                           firstname,
                           lastname,
                           address,
                           contactNo,
                           genders,
                           age,
                           relationship,
                           display,
                           password,
                           details,
                           relDis,
                       }) => {

    const [gender, setGender] = React.useState('');

    const handleChange = (event) => {
        setGender(event.target.value);
    };

    const [formEditable, setFormEditable] = React.useState(false);

    const handleEdit = (event) => {
        setFormEditable(true);
    }
    const handleUpdate = (event) => {
        Swal.fire({
            title: 'Do you want to save the changes?',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'Save',
            denyButtonText: `Don't save`,
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                Swal.fire('Update Successful!', 'Updated data', 'success').then((result) => {
                    if (result.isConfirmed) {
                        window.location.reload(true);
                    }
                })
            } else if (result.isDenied) {
                Swal.fire('Changes are not Update', '', 'info')
            }
        })
    };

    const handleCancel = (event) => {
        setFormEditable(false);
    }

    return (
        <>
            <p className="title-align">{title}</p>

            <Grid container rowSpacing={1} columnSpacing={{xs: 1, sm: 2, md: 3}} sx={{display: display}}>
                <Grid item xs={6}>
                    <Item>
                        <label className="label-align">First Name</label>
                        <br/>
                        <CustomInput
                            type="text"
                            placeholder={firstname}
                            size="20"
                            radius="8"
                            fontSize="18.946"
                            width='100%'
                            readOnly={!formEditable}
                        />
                    </Item>
                </Grid>
                <Grid item xs={6}>
                    <Item>
                        <label className="label-align">Last Name</label>
                        <br/>
                        <CustomInput
                            type="text"
                            placeholder={lastname}
                            size="20"
                            radius="8"
                            fontSize="18"
                            width='100%'
                            readOnly={!formEditable}
                            value={lastname}
                            className='component-input'
                        />
                    </Item>
                </Grid>
                <Grid item xs={12}>
                    <Item>
                        <label className="label-align">Address</label>
                        <br/>
                        <CustomInput
                            type="text"
                            placeholder={address}
                            size="20"
                            radius="8"
                            width="100%"
                            fontSize="18"
                            readOnly={!formEditable}
                        />
                    </Item>
                </Grid>
                <Grid item xs={12}>
                    <Item>
                        <label className="label-align">Emergency Contact Number</label>
                        <br/>
                        <CustomInput
                            type="tel"
                            placeholder={contactNo}
                            size="20"
                            radius="8"
                            width="100%"
                            fontSize='18'
                            readOnly={!formEditable}
                        />
                    </Item>
                </Grid>

                <Grid item xs={6}>
                    <Item>
                        <label className="label-align">Gender</label>
                        <br/>
                        <select id="gender" name="gender" value={gender}
                                onChange={handleChange}>
                            <option value="male" className='g-gender'>Male</option>
                            <option value="female" className='g-gender'>Female</option>
                        </select>
                    </Item>
                </Grid>
                <Grid item xs={6}>
                    <Item>
                        <label className="label-align">Age</label>
                        <br/>
                        <CustomInput
                            type="number"
                            placeholder={age}
                            size="20"
                            radius="8"
                            width="100%"
                            fontSize='18'
                            max='20'
                            min='1'
                            readOnly={!formEditable}
                        />
                    </Item>

                </Grid>
                <Grid item xs={12} sx={{display: relDis}}>
                    <Item>
                        <label className="label-align">Relationship to Mihasa</label>
                        <br/>
                        <CustomInput
                            type="text"
                            placeholder={relationship}
                            size="20"
                            radius="8"
                            width="100%"
                            fontSize="18"
                            readOnly={!formEditable}
                        />
                    </Item>
                </Grid>

            </Grid>

            {password ? <Password/> : null}
            <div className={formEditable ? "not-visible" : "visible"}>
                <CustomButton
                    type="button"
                    variant="edit"
                    radius="8"
                    size="sm"
                    className="mt-3 mb-4 button-mobile-response"
                    fontSize="18"
                    width="150"
                    onclick={handleEdit}
                >
                    Edit
                </CustomButton>
            </div>

            <div className={formEditable ? "visible row show-update-btn" : "not-visible"}
                 style={{width: '100%', marginRight: '120px'}}>
                <div className="col">
                    <CustomButton
                        type="button"
                        variant="update"
                        radius="8"
                        size="sm"
                        className="mt-3 mb-4 button-mobile-response"
                        fontSize="18"
                        width="150"
                        onclick={handleUpdate}
                    >
                        Update
                    </CustomButton>
                </div>

                <div className="col">
                    <CustomButton
                        type="button"
                        variant="cancel"
                        radius="8"
                        size="sm"
                        className="mt-3 mb-4 button-mobile-response"
                        fontSize="18"
                        width="150"
                        onclick={handleCancel}
                    >
                        Cancel
                    </CustomButton>
                </div>

            </div>


        </>
    )
        ;
};

export default FormComponent;
