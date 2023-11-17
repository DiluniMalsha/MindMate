import React, {useEffect, useState} from "react";
import {Line} from "react-chartjs-2";
import "./LiveChart.css"
import {
    ArcElement,
    CategoryScale,
    Chart as ChartJS,
    Filler,
    Legend,
    LinearScale,
    LineElement,
    PointElement,
    Title,
    Tooltip
} from "chart.js";
import HomeMood from "../homeMood/HomeMood";
// import {getEmotionList} from "../../repository/emotionRepository";
import axios from "axios";
import {getEmotionList} from "../../repository/emotionRepository";

ChartJS.register(
    ArcElement,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
)
const LiveChartNew = ({width, setClassname, displaying, displays,days}) => {
    const [chartData, setChartData] = useState({})
    const [loopId, setLoopId] = useState();
    // const [day, setDay] = useState({days})
    const accessToken: string | null = localStorage.getItem("loggedUserToken");
    // eslint-disable-next-line
    const headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': 'Bearer ' + accessToken
    }
    // eslint-disable-next-line
    if (days === undefined){
        days=0
    }
    console.log("day")
    console.log("days",days)
    useEffect(() => {
        const fetchData = async () => {
            const {data} = await getEmotionList(days) //18.143.151.234  get("http://18.143.151.234:8080/api/user/emotion/0", {headers})
            setChartData({
                labels: data.body.reverse().map((item) => item.time),
                datasets: [
                    {
                        label: "Emotion",
                        data: data.body.reverse().map((item) => item.emotionId),
                        // fill: true,
                        borderColor: "rgb(99,177,255)",
                        backgroundColor: "rgba(79,81,185,0)"
                    }
                ]
            })
            // console.log()
            setLoopId(data.body.reverse()[0].emotionId)
        }

        fetchData();
    }, [headers]);


    // console.log(chartData)
    return (
        <>
            <div style={{display: displays}}>
                <div style={{width: width, marginLeft: "10px", marginTop: "20px"}}>
                    <div className={setClassname}>
                        <div className="">
                            {chartData && chartData.datasets && (
                                <Line
                                    data={chartData}
                                />
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <div style={{display: displaying}}>
                <HomeMood moodId={loopId}/>
            </div>

        </>

    );
};

export default LiveChartNew;