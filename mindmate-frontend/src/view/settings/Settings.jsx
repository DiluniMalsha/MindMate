import "./Settings.css";
import React, {useState} from "react";
import {
    MDBContainer,
    MDBTabs,
    MDBTabsItem,
    MDBTabsLink,
    MDBTabsContent,
    MDBTabsPane,
    MDBBtn,
    MDBInput,
} from "mdb-react-ui-kit";
import {Link} from "react-router-dom";
import FormComponent from "../../components/form/FormComponent";
import Preferences from "../../components/preferences/Preferences";
function Settings() {
    const [justifyActive, setJustifyActive] = useState("tab1");
    const handleJustifyClick = (value) => {
        if (value === justifyActive) {
            return;
        }

        setJustifyActive(value);
    };
    return (
        <section className="vh-100">
            <div className="container-fluid h-custom">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-md-9 col-lg-6 col-xl-5 ">
                        <MDBContainer className="main-section">
                            <h1 className="setting-heading">Settings</h1>

                            <MDBTabs
                                pills
                                justify
                                className="mb-3 d-flex flex-row justify-content-between btn-width"
                            >
                                <MDBTabsItem>
                                    <div className="student-btn">
                                        <MDBTabsLink
                                            onClick={() => handleJustifyClick("tab1")}
                                            active={justifyActive === "tab1"}
                                            className="selector-btn selection-btn student-btn"
                                        >
                                            Student
                                        </MDBTabsLink>
                                    </div>
                                </MDBTabsItem>
                                <MDBTabsItem>
                                    <div>
                                        <MDBTabsLink
                                            onClick={() => handleJustifyClick("tab2")}
                                            active={justifyActive === "tab2"}
                                            className="selector-btn selection-btn parant-btn"
                                        >
                                            Parent
                                        </MDBTabsLink>
                                    </div>
                                </MDBTabsItem>
                            </MDBTabs>

                            <MDBTabsContent>
                                <MDBTabsPane
                                    show={justifyActive === "tab1"}
                                    className="center-title"
                                >
                                    <div className="row w-100">
                                        <div className="col child-settings-sections">

                                            <FormComponent
                                                title="Mihasa's Profile"
                                                firstname="mihasa"
                                                lastname='layuni'
                                                address='No. 64/5, Kuruduwaththa, Meepawala'
                                                contactNo='94702312239'
                                                age='12'
                                            />
                                        </div>
                                        <div className="col child-settings-sections">
                                            <Preferences/>
                                        </div>
                                    </div>
                                </MDBTabsPane>

                                <MDBTabsPane
                                    show={justifyActive === "tab2"}
                                    className="center-title"
                                >
                                    <MDBInput
                                        wrapperClass="mb-4"
                                        className="input-data"
                                        label="Name"
                                        id="form1"
                                        type="text"
                                    />
                                    <MDBInput
                                        wrapperClass="mb-4"
                                        className="input-data"
                                        label="password"
                                        id="form1"
                                        type="password"
                                    />

                                    <Link to="/parent-dashboard-home">
                                        <MDBBtn className="mb-4 w-100 input-data login-btn ">
                                            Login
                                        </MDBBtn>
                                    </Link>

                                    <Link to="/" className="link-deco">
                                        <span className="guest-title">Continue as guest</span>
                                    </Link>
                                </MDBTabsPane>
                            </MDBTabsContent>
                        </MDBContainer>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Settings;
