import {useState} from "react";
import "./SignInForm.css";
import {Icon} from "react-icons-kit";
import {eye} from "react-icons-kit/feather/eye";
import {check} from "react-icons-kit/feather/check";
import {file} from "react-icons-kit/feather/file";
import {eyeOff} from "react-icons-kit/feather/eyeOff";
import {MDBInput} from "mdb-react-ui-kit";
import CustomButton from "../button/CustomButton";
import {Link} from "react-router-dom";


function SignInFrom() {
    const [type, setType] = useState("password");
    const [icon, setIcon] = useState(eyeOff);
    const [checkIcon, setCheckIcon] = useState(file);


    const handleToggle = () => {
        if (type === "password") {
            setIcon(eye);
            setType("text");
        } else {
            setIcon(eyeOff);
            setType("password");
        }
    };

    const getUserName = () => {
        const userName= document.getElementById("userName").value;
        console.log(userName);
        if (userName === "mihiripeiris") {
            setCheckIcon(check);
        }
        else{
            setCheckIcon(file);
        }
    };
    return (
        <div className="sign-in-main">
            <div className="d-flex flex-column ">
                <div className="text-center">
                    <h1
                        className="mt-1 mb-5 pb-1 let-sign-font"
                        style={{color: "#171742"}}
                    >
                        Let’s Sign In
                    </h1>
                </div>

                <label className="sign-in-label">Username</label>
                <div className="input-field">
                      <span className="icon-class" style={{cursor:"cursor"}}>
                        <Icon icon={checkIcon} size={25}/>
                      </span>
                <MDBInput
                    wrapperClass="mb-4"
                    id="userName"
                    type="text"
                    className="text-line"
                    placeholder="mihiripeiris"
                    onChange={getUserName}
                />
                </div>

                <label className="sign-in-label">Password</label>
                <div className="input-field">
                      <span onClick={handleToggle} className="icon-class">
                        <Icon icon={icon} size={25}/>
                      </span>
                    <MDBInput
                        wrapperClass="mb-4"
                        id="password"
                        type={type}
                        className="text-line"
                        placeholder="................"
                    />
                </div>
                <Link className="forget-aline" to="/">
                    Forgot password?
                </Link>

                <div className="text-center pt-1 mb-5 pb-1">
                    <CustomButton
                        variant="primary"
                        width="410"
                        radius="40"
                        fontSize="24"
                        height="lg"
                        className="sign-in-btn"
                    >
                        Sign in
                    </CustomButton>
                </div>
            </div>
        </div>
    );
}

export default SignInFrom;