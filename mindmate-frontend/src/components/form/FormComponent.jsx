import CustomInput from "../inputField/InputField";
import "./FormComponent.css"

const FormComponent = ({title, firstname, lastname, address, contactNo, gender, age, relationship}) => {
    return (
        <>
            <div className="row text-start">
                <div className="col">
                    <label className="label-align">First Name</label>
                    <CustomInput type='text' placeholder={firstname} size='20' radius='10'></CustomInput>
                </div>
                <div className="col">
                    <CustomInput type='text' placeholder={firstname} size='20' radius='15'></CustomInput>
                </div>
            </div>

            <div className="row">

            </div>


        </>
    );
}

export default FormComponent;