import React from "react";
import CustomInput from "../inputField/InputField";
import "./FormComponent.css";
import {styled} from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import CustomButton from "../button/CustomButton";

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
                       }) => {

    const [gender, setGender] = React.useState('');

    const handleChange = (event) => {
        setGender(event.target.value);
    };

    return (
        <>
            <p className="title-align">{title}</p>

            <Grid container rowSpacing={1} columnSpacing={{xs: 1, sm: 2, md: 3}}>
                <Grid item xs={6}>
                    <Item>
                        <label className="label-align">First Name</label>
                        <br/>
                        <CustomInput
                            type="text"
                            placeholder={firstname}
                            size="20"
                            radius="10"
                            fontSize="20"
                        />
                    </Item>
                </Grid>
                <Grid item xs={6}>
                    <Item>
                        <label className="label-align">First Name</label>
                        <br/>
                        <CustomInput
                            type="text"
                            placeholder={lastname}
                            size="20"
                            radius="10"
                            fontSize="20"
                            width='100%'
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
                            radius="10"
                            width="100%"
                            fontSize="20"
                        />
                    </Item>
                </Grid>
                <Grid item xs={12}>
                    <Item>
                        <label className="label-align">Emergency Contact Number</label>
                        <br/>
                        <CustomInput
                            type="text"
                            placeholder={contactNo}
                            size="20"
                            radius="10"
                            width="100%"
                            fontSize='20'
                        />
                    </Item>
                </Grid>

                <Grid item xs={6}>
                    <Item>
                        <label className="label-align">Gender</label>
                        <br/>
                        <select id="gender" name="gender"  value={gender}
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
                            radius="10"
                            width="100%"
                            fontSize='20'
                        />
                    </Item>
                </Grid>
            </Grid>

            <CustomButton
                type="button"
                variant="primary"
                radius="20"
                size="sm"
                className="mt-3 mb-4"
                fontSize="20"
                width="150"
            >
                Edit
            </CustomButton>
        </>
    );
};

export default FormComponent;
