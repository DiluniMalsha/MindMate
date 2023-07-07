import "./Preparances.css"
import React, {useState} from "react";
import {
    MDBContainer,
    MDBTabs,
    MDBTabsContent,
    MDBTabsItem,
    MDBTabsLink,
    MDBTabsPane
} from "mdb-react-ui-kit";
import CustomButton from "../button/CustomButton";

const Preferences = (props) => {
    const [justifyActive, setJustifyActive] = useState("tab1");
    const handleJustifyClick = (value) => {
        if (value === justifyActive) {
            return;
        }

        setJustifyActive(value);
    };
    return (
      <>
        <div>
          <p className="title-align-preferences">Her Preferences</p>
          <p className="description-para">
            We need some resources to use for Mihasa when <br />
            she is in different moods
          </p>
        </div>
        <MDBContainer className="border-refs">
          <MDBTabs
            pills
            justify
            className="mb-3 d-flex flex-row justify-content-between"
          >
            <MDBTabsItem>
              <div className="student-btn">
                <MDBTabsLink
                  onClick={() => handleJustifyClick("tab1")}
                  active={justifyActive === "tab1"}
                  className="selector-btn pre-selection-btn student-btn"
                >
                  Happy
                </MDBTabsLink>
              </div>
            </MDBTabsItem>
            <MDBTabsItem>
              <div>
                <MDBTabsLink
                  onClick={() => handleJustifyClick("tab2")}
                  active={justifyActive === "tab2"}
                  className="selector-btn pre-selection-btn pre-btn-bord"
                >
                  Surprised
                </MDBTabsLink>
              </div>
            </MDBTabsItem>
            <MDBTabsItem>
              <div>
                <MDBTabsLink
                  onClick={() => handleJustifyClick("tab3")}
                  active={justifyActive === "tab3"}
                  className="selector-btn pre-selection-btn pre-btn-bord"
                >
                  Sad
                </MDBTabsLink>
              </div>
            </MDBTabsItem>
            <MDBTabsItem>
              <div>
                <MDBTabsLink
                  onClick={() => handleJustifyClick("tab4")}
                  active={justifyActive === "tab4"}
                  className="selector-btn pre-selection-btn pre-btn-bord"
                >
                  Fear
                </MDBTabsLink>
              </div>
            </MDBTabsItem>
            <MDBTabsItem>
              <div>
                <MDBTabsLink
                  onClick={() => handleJustifyClick("tab5")}
                  active={justifyActive === "tab5"}
                  className="selector-btn pre-selection-btn pre-btn-bord"
                >
                  Anger
                </MDBTabsLink>
              </div>
            </MDBTabsItem>
            <MDBTabsItem>
              <div>
                <MDBTabsLink
                  onClick={() => handleJustifyClick("tab6")}
                  active={justifyActive === "tab6"}
                  className="selector-btn pre-selection-btn pre-btn-bord"
                >
                  Disgust
                </MDBTabsLink>
              </div>
            </MDBTabsItem>
            <MDBTabsItem>
              <div>
                <MDBTabsLink
                  onClick={() => handleJustifyClick("tab7")}
                  active={justifyActive === "tab7"}
                  className="selector-btn pre-selection-btn parant-btn"
                >
                  Neutral
                </MDBTabsLink>
              </div>
            </MDBTabsItem>
          </MDBTabs>
          <MDBTabsContent>
            <MDBTabsPane
              show={justifyActive === "tab1"}
              className="center-title"
            >
                <CustomButton
                    type="button"
                    variant="primary"
                    radius="20"
                    size="sm"
                    className="mt-5"
                    fontSize="20"
                    width="250"
                >
                    Upload New Resource
                </CustomButton>
            </MDBTabsPane>
            <MDBTabsPane
              show={justifyActive === "tab2"}
              className="center-title"
            >
                Surprised
            </MDBTabsPane>
            <MDBTabsPane
              show={justifyActive === "tab3"}
              className="center-title"
            >
                Sad
            </MDBTabsPane>
            <MDBTabsPane
              show={justifyActive === "tab4"}
              className="center-title"
            >
                Fear
            </MDBTabsPane>
            <MDBTabsPane
              show={justifyActive === "tab5"}
              className="center-title"
            >
                Anger
            </MDBTabsPane>
            <MDBTabsPane
              show={justifyActive === "tab6"}
              className="center-title"
            >
                Disgust
            </MDBTabsPane>
            <MDBTabsPane
              show={justifyActive === "tab7"}
              className="center-title"
            >
                Neutral
            </MDBTabsPane>
          </MDBTabsContent>
        </MDBContainer>
      </>
    );
}

export default Preferences;