import CustomButton from "../button/CustomButton";
import "./EmotionFaceSection.css"
import LiveChartNew from "../LiveChart/LiveChart";
import React, {useState} from "react";
import SendRespond from "../sendRespond/SendRespond";
import {useStateContext} from "../../context/Context";

const EmotionFaceSection = () => {
    const [popupVisible, setPopupVisible] = useState(false);
    const description = [
        "Anger is a powerful emotion that can consume a person, leading to impulsive actions and strained relationships." +
        " Unchecked, it distorts rational thinking and leaves regret in its wake. Controlling anger is essential for emotional" +
        " well-being and fostering positive connections. Strategies like deep breathing, self-reflection, and communication skills " +
        "offer effective means to manage and redirect this intense emotion constructively.",
        "Disgust, a visceral emotion, colors a person's demeanor with aversion and repulsion. It surfaces in response to" +
        " offensive stimuli, manifesting as a visible grimace or withdrawal. Unchecked, it can strain relationships and " +
        "cloud judgment. Controlling disgust is vital for maintaining composure and fostering healthy connections. Mindful" +
        " awareness, cognitive reframing, and empathy serve as effective tools to manage and redirect this intense emotion " +
        "constructively.\n",
        "Fear, an overwhelming emotion, tightens its grip, inducing anxiety and apprehension. It triggers a fight-or-flight" +
        " response, affecting thoughts and actions. Unchecked, fear can hinder progress and breed insecurity. Controlling" +
        " fear is essential for personal growth and well-being. Techniques like deep breathing, positive visualization, and" +
        " gradual exposure empower individuals to confront and overcome their fears, fostering resilience and confidence.\n",
        "Sadness, a poignant emotion, casts a shadow on a person's demeanor, permeating with melancholy and reflection. It" +
        " affects mood, energy, and motivation, potentially leading to withdrawal. Managing sadness is crucial for mental" +
        " well-being and resilience. Strategies such as seeking support, engaging in activities that bring joy, and practicing " +
        "self-compassion provide avenues to navigate and alleviate the impact of sadness constructively.\n",
        "Neutral, a calm state, reflects a person's equipoise, devoid of heightened emotion. It fosters a balanced perspective," +
        " allowing rational decision-making. While lacking the vibrancy of strong emotions, neutrality provides a stable " +
        "foundation for contemplation and measured responses. Embracing neutrality can be advantageous for clarity and focus. " +
        "During such times, individuals may find solace in reflection, mindfulness, or engaging in activities that promote a " +
        "sense of calm.\n",
        "Surprise, an abrupt emotion, illuminates a person's face with astonishment and curiosity. It sparks a brief pause, " +
        "disrupting routine thoughts. The sudden influx of novelty or unexpected events can invoke joy or apprehension. " +
        "Managing surprise is crucial to navigate unpredictable situations effectively. Embracing adaptability, curiosity, " +
        "and a positive mindset allows individuals to harness the potential benefits of surprise while maintaining composure.\n",
        "Happiness, a radiant emotion, illuminates a person's countenance with joy and contentment. It enhances well-being," +
        " fostering positive energy and resilience. When happy, individuals often find motivation and creativity flowing " +
        "effortlessly. Managing happiness involves savoring the moment, expressing gratitude, and cultivating connections. " +
        "It's essential to appreciate and nurture this positive state, contributing to overall mental and emotional health."
    ]
    const handleRespondPopUp = (value) => {
        setPopupVisible(!popupVisible);
    };
    const {moodId} = useStateContext()
    console.log(moodId)

    return (
        <div className=''>
            <LiveChartNew displays="none"/>
            <br/>
            <CustomButton
                type="button"
                variant="history"
                radius="20"
                size="sm"
                className="chart-btn-responsive me-0"
                fontSize="18"
                width="180"
                onclick={handleRespondPopUp}
            >
                Respond to Her
            </CustomButton>
            <div className="response-div">
                <p style={{textAlign: 'justify'}}>
                    {description[moodId - 1]}
                </p>
            </div>
            {popupVisible && (
                <SendRespond
                    setPopupVisible={setPopupVisible}
                />
            )}
        </div>
    );
}

export default EmotionFaceSection;