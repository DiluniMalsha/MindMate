import {MDBContainer, MDBTabs, MDBTabsContent, MDBTabsItem, MDBTabsLink, MDBTabsPane} from "mdb-react-ui-kit";
import FormComponent from "../../components/form/FormComponent";
import Password from "../../components/form/Password";
import React, {useState} from "react";
import DailyTimetable from "../../components/dailyTimetable/DailyTimetable";

const Scheduler = (props) => {
    const [justifyActive, setJustifyActive] = useState("tab1");
    const handleJustifyClick = (value) => {
        if (value === justifyActive) {
            return;
        }

        setJustifyActive(value);
    };
    return (
        <section className="vh-100">
            <div className="container-fluid h-custom" style={{marginTop:'5%'}}>
                <div className="row d-flex justify-content-center align-items-center h-100 m-0">
                    <div className="col-md-9 ">
                        {/*col-lg-6 col-xl-5*/}
                        <MDBContainer className="main-section">
                            <h1 className="setting-heading">Scheduler</h1>

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
                                            Daily Timetable
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
                                            Task Scheduling
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
                                        <DailyTimetable/>
                                    </div>
                                </MDBTabsPane>

                                <MDBTabsPane
                                    show={justifyActive === "tab2"}
                                    className="center-title"
                                >
                                    <div className="row w-100">
                                        <div className="col child-settings-sections">

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
                                        <div className="col child-settings-sections">
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

export default Scheduler;