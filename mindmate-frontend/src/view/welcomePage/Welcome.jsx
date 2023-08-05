import logo from "../../assets/logo/Logo.png";
// import robot from "../../assets/robotPicture/robot.png";
import animatedRobot from "../../assets/robotPicture/bAnimatedRobot.gif";
import CustomButton from "../../components/button/CustomButton";
import {Link} from "react-router-dom";
import "./Welcome.css";

const Welcome = (props) => {
    return (
        <div className="welcome-main">
            <img src={logo} alt="MindMate" className="maidMate-logo"/>
            <p className="welcome">Welcome Back</p>
            <img src={animatedRobot} alt="Robot" className="robot" width="1000px" height="400px"/>
            <br/>
            <Link to="/signIn">
                <CustomButton
                    type="button"
                    variant="light"
                    radius="20"
                    size="sm"
                    className="mt-5"
                    fontSize="20"
                    width="200"
                >
                    Get Started
                </CustomButton>
            </Link>
        </div>
    );
};

export default Welcome;
