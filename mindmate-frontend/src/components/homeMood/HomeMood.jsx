import React, {useEffect, useState} from "react";
import fear from '../../assets/faceIcon/fear.svg'
import sad from '../../assets/faceIcon/sad.svg'
import angry from '../../assets/faceIcon/angry.svg'
import happy from '../../assets/faceIcon/happy.svg'
import disgusted from '../../assets/faceIcon/disgusted.svg'
import neutral from '../../assets/faceIcon/neutral.svg'
import surprised from '../../assets/faceIcon/surprised.svg'
import {FadeLoader} from "react-spinners";


const images = [
    angry,
    disgusted,
    fear,
    sad,
    neutral,
    surprised,
    happy,
]
const HomeMood = ({moodId, display}) => {
    const mood = ["angry", "disgusted", "fear", "sad", "neutral", "surprised", "happy"];
    let moodDescription = "Isuru is Now in a " + mood[moodId - 1] + " Mood"
    const [loading, setLoading] = useState(false)

    let im = images[moodId - 1];

    useEffect(() => {
        setLoading(true);
        setTimeout(() =>{
            setLoading(false)
        },3000)
    }, []);
    return (
        <>
            <div style={{display: display}}>
                {
                    loading ?
                        <div>
                            <FadeLoader
                                color={"#1e5d88"}
                                loading={loading}
                                size={30}
                                className={'loading-style'}
                            />
                            Loading
                        </div>
                        :
                        <img src={im} alt='mood' className='mood-section'/>
                }
                <br/>
                <span className='mt-3 mood-des'>
                {moodDescription}
            </span>
            </div>
        </>
    );
};

export default HomeMood;