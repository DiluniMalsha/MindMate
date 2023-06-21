import "./Welcome.css";
import logo from "../../assets/logo/Logo.png";
import robot from "../../assets/robotPicture/robot.png"
import CustomButton from "../../components/button/CustomButton";

const Welcome = (props) => {
    return (
        <div className="welcome-main">
            <img src={logo} alt="MindMate" className="maidMate-logo"/>
            <p className="welcome">Welcome Back</p>
            <img src={robot} alt="Robot" className="robot"/>
            <br/>
            <CustomButton type="button" variant="light" radius="20" size="sm" className="mt-5" fontSize="20" width='200'>
                Get Started
            </CustomButton>
        </div>
    );
};

export default Welcome;
