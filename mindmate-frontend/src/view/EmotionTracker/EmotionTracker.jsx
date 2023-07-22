import LiveChart from "../../components/chart/LiveChart";
import React from "react";
import "./EmotionTracker.css"
import EmotionFaceSection from "../../components/emotionFaces/EmotionFaceSection";
import happy from '../../assets/faceIcon/happy.svg';

const EmotionTracker = (props) => {
    return (
        <div className="">
            <div className="container-fluid h-custom">
                <div className="row d-flex justify-content-center align-items-center  m-0">
                    <h1 className="setting-heading">Emotion Tracker</h1>
                    <div className="col-md-7 graph-border">
                        <LiveChart width='700' height='400'/>
                    </div>
                    <div className="col-md-4">
                        <EmotionFaceSection face={happy} mood='Happy'/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EmotionTracker;
