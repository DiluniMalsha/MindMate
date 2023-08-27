import {
    MDBContainer,
    MDBTabs,
    MDBTabsContent,
    MDBTabsItem,
    MDBTabsLink,
    MDBTabsPane,
} from "mdb-react-ui-kit";
import React, {useState} from "react";
import "./DailyTimetable.css";
import CustomButton from "../button/CustomButton";
import TimetableRecode from "./TimetableRecode";
import AddNewRecord from "../addNewRecord/AddNewRecord";

const DailyTimetable = (props) => {
    const [justifyActive, setJustifyActive] = useState("tab1");

    const handleJustifyClick = (value) => {
        if (value === justifyActive) {
            return;
        }

        setJustifyActive(value);
    };

    const [popupVisible, setPopupVisible] = useState(false);
    const handlePopUp = (value) => {
        setPopupVisible(!popupVisible);
    };
    return (
        <div className="align-popUp">
            <div className="mt-4">
                <MDBContainer className="border-refs schedule-day-align">
                    <CustomButton
                        variant="primary"
                        radius="20"
                        size="sm"
                        fontSize="14"
                        width="185"
                        onclick={handlePopUp}
                        className='mb-4 button-mobile-response-add-btn'
                    >
                        + Add New Record
                    </CustomButton>
                    <MDBTabs
                        pills
                        justify
                        className="mb-5 d-flex flex-row justify-content-between "
                    >
                        <MDBTabsItem>
                            <div className="days">
                                <MDBTabsLink
                                    onClick={() => handleJustifyClick("tab1")}
                                    active={justifyActive === "tab1"}
                                    className="selector-btn pre-selection-btn day spe-day"
                                >
                                    Mon
                                </MDBTabsLink>
                            </div>
                        </MDBTabsItem>
                        <MDBTabsItem>
                            <div className="days">
                                <MDBTabsLink
                                    onClick={() => handleJustifyClick("tab2")}
                                    active={justifyActive === "tab2"}
                                    className="selector-btn pre-selection-btn pre-btn-bord day"
                                >
                                    Tue
                                </MDBTabsLink>
                            </div>
                        </MDBTabsItem>
                        <MDBTabsItem>
                            <div className="days">
                                <MDBTabsLink
                                    onClick={() => handleJustifyClick("tab3")}
                                    active={justifyActive === "tab3"}
                                    className="selector-btn pre-selection-btn pre-btn-bord day spe-day"
                                >
                                    Wed
                                </MDBTabsLink>
                            </div>
                        </MDBTabsItem>
                        <MDBTabsItem>
                            <div className="days">
                                <MDBTabsLink
                                    onClick={() => handleJustifyClick("tab4")}
                                    active={justifyActive === "tab4"}
                                    className="selector-btn pre-selection-btn pre-btn-bord day"
                                >
                                    Thu
                                </MDBTabsLink>
                            </div>
                        </MDBTabsItem>
                        <MDBTabsItem>
                            <div className="days">
                                <MDBTabsLink
                                    onClick={() => handleJustifyClick("tab5")}
                                    active={justifyActive === "tab5"}
                                    className="selector-btn pre-selection-btn pre-btn-bord day"
                                >
                                    Fri
                                </MDBTabsLink>
                            </div>
                        </MDBTabsItem>
                        <MDBTabsItem>
                            <div className="days">
                                <MDBTabsLink
                                    onClick={() => handleJustifyClick("tab6")}
                                    active={justifyActive === "tab6"}
                                    className="selector-btn pre-selection-btn pre-btn-bord day"
                                >
                                    Sat
                                </MDBTabsLink>
                            </div>
                        </MDBTabsItem>
                        <MDBTabsItem>
                            <div className="days">
                                <MDBTabsLink
                                    onClick={() => handleJustifyClick("tab7")}
                                    active={justifyActive === "tab7"}
                                    className="selector-btn pre-selection-btn parant-btn day"
                                >
                                    Sun
                                </MDBTabsLink>
                            </div>
                        </MDBTabsItem>
                        <CustomButton
                            variant="primary"
                            width="240"
                            size="md"
                            radius="20"
                            fontSize="16"
                            onclick={handlePopUp}
                            className='add-new-button-container-2'
                        >
                            + Add New Record
                        </CustomButton>
                    </MDBTabs>
                    <MDBTabsContent>
                        <MDBTabsPane
                            show={justifyActive === "tab1"}
                            className="center-title"
                        >
                            <TimetableRecode
                                startTime="08.00 a.m"
                                endTime="10.00 a.m"
                                description="Reading Books"
                            />
                            <TimetableRecode
                                startTime="08.00 a.m"
                                endTime="10.00 a.m"
                                description="Reading Books"
                            />
                            <TimetableRecode
                                startTime="08.00 a.m"
                                endTime="10.00 a.m"
                                description="Reading Books"
                            />
                        </MDBTabsPane>
                        <MDBTabsPane
                            show={justifyActive === "tab2"}
                            className="center-title"
                        >
                            <TimetableRecode
                                startTime="08.00 a.m"
                                endTime="10.00 a.m"
                                description="Reading Books"
                            />
                            <TimetableRecode
                                startTime="08.00 a.m"
                                endTime="10.00 a.m"
                                description="Reading Books"
                            />
                        </MDBTabsPane>
                        <MDBTabsPane
                            show={justifyActive === "tab3"}
                            className="center-title"
                        >
                            <TimetableRecode
                                startTime="08.00 a.m"
                                endTime="10.00 a.m"
                                description="Reading Books"
                            />
                            <TimetableRecode
                                startTime="08.00 a.m"
                                endTime="10.00 a.m"
                                description="Reading Books"
                            />
                        </MDBTabsPane>
                        <MDBTabsPane
                            show={justifyActive === "tab4"}
                            className="center-title"
                        >
                            <TimetableRecode
                                startTime="08.00 a.m"
                                endTime="10.00 a.m"
                                description="Reading Books"
                            />
                            <TimetableRecode
                                startTime="08.00 a.m"
                                endTime="10.00 a.m"
                                description="Reading Books"
                            />
                        </MDBTabsPane>
                        <MDBTabsPane
                            show={justifyActive === "tab5"}
                            className="center-title"
                        >
                            <TimetableRecode
                                startTime="08.00 a.m"
                                endTime="10.00 a.m"
                                description="Reading Books"
                            />
                            <TimetableRecode
                                startTime="08.00 a.m"
                                endTime="10.00 a.m"
                                description="Reading Books"
                            />
                        </MDBTabsPane>
                        <MDBTabsPane
                            show={justifyActive === "tab6"}
                            className="center-title"
                        >
                            <TimetableRecode
                                startTime="08.00 a.m"
                                endTime="10.00 a.m"
                                description="Reading Books"
                            />
                            <TimetableRecode
                                startTime="08.00 a.m"
                                endTime="10.00 a.m"
                                description="Reading Books"
                            />
                        </MDBTabsPane>
                        <MDBTabsPane
                            show={justifyActive === "tab7"}
                            className="center-title"
                        >
                            <TimetableRecode
                                startTime="08.00 a.m"
                                endTime="10.00 a.m"
                                description="Reading Books"
                            />
                            <TimetableRecode
                                startTime="08.00 a.m"
                                endTime="10.00 a.m"
                                description="Reading Books"
                            />
                        </MDBTabsPane>
                    </MDBTabsContent>
                </MDBContainer>
            </div>
            {popupVisible && (
                <AddNewRecord
                    title="Add New Timetable Record"
                    swalTitle="Record has been added successfully!"
                    id="search-student-div"
                    setPopupVisible={setPopupVisible}
                />
            )}
        </div>
    );
};

export default DailyTimetable;
