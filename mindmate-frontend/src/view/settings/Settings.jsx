import "./Settings.css";
import React, {useState} from "react";
import {
    MDBContainer,
    MDBTabs,
    MDBTabsItem,
    MDBTabsLink,
    MDBTabsContent,
    MDBTabsPane,
} from "mdb-react-ui-kit";
import FormComponent from "../../components/form/FormComponent";
import Preferences from "../../components/preferences/Preferences";
import Password from "../../components/form/Password";
import {SettingsOutline} from "react-ionicons";
import HeadingTitle from "../../components/title/HeadingTitle";

const Settings = (props) => {
    const [justifyActive, setJustifyActive] = useState("tab1");
    const handleJustifyClick = (value) => {
        if (value === justifyActive) {
            return;
        }

        setJustifyActive(value);
    };
    let icon = <SettingsOutline
                    color={'#4285f5'}
                    title={"Settings"}
                    height="20px"
                    width="20px"
                    style={{marginBottom: '5px'}}
                />
    return (
        <section className="">
            <HeadingTitle title={'Settings'} icon={icon} ml={'60px'}/>
            <div className="container-fluid h-custom">
                {/*<HeadingBar/>*/}
                <div className="row d-flex justify-content-center align-items-center  m-0">
                    <div className="col-md-9   ">
                        <MDBContainer className="main-secti on">
                            {/*<h1 className="setting-heading">Settings</h1>*/}
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
                                            Child Settings
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
                                            Profile Settings
                                        </MDBTabsLink>
                                    </div>
                                </MDBTabsItem>
                            </MDBTabs>

                            <MDBTabsContent>
                                <MDBTabsPane
                                    show={justifyActive === "tab1"}
                                    className="center-title"
                                >
                                    <div className="row ">
                                        <div className="col child-settings-sections">
                                            <FormComponent
                                                title="Mihasa's Profile"
                                                firstname="Mihasa"
                                                lastname='Layuni'
                                                address='No. 64/5, Kuruduwaththa, Meepawala'
                                                contactNo='94702312239'
                                                age='12'
                                                display='ture'
                                                relDis='none'
                                            />
                                        </div>
                                        <div className="col-md child-settings-sections" style={{width:'98%'}}>
                                            <Preferences/>
                                        </div>
                                    </div>
                                </MDBTabsPane>

                                <MDBTabsPane
                                    show={justifyActive === "tab2"}
                                    className="center-title"
                                >
                                    <div className="row w-100">
                                        <div className="col-md child-settings-sections">

                                            <FormComponent
                                                title="My Profile"
                                                firstname="Mihiri"
                                                lastname='Peiris'
                                                address='No. 64/5, Kuruduwaththa, Meepawala'
                                                contactNo='+94 7190644'
                                                age='12'
                                                relDis='gride'
                                                relationship='Mother'
                                                display='ture'
                                            />
                                        </div>
                                        <div className="col-md child-settings-sections">
                                            {/*<FormComponent*/}
                                            {/*    title="Change Password"*/}
                                            {/*    disabled='block'*/}
                                            {/*    password='ture'*/}
                                            {/*    display='none'*/}
                                            {/*/>*/}

                                            <Password title="Change Password"/>
                                        </div>
                                    </div>
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
