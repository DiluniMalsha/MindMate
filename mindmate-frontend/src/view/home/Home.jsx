import AddNewRecord from "../../components/addNewRecord/AddNewRecord";
import React from "react";

const Home = (props) => {
    return (
        <div>
            <section className="main-section">
                <AddNewRecord title='Add New Timetable Record'/>
            </section>
        </div>
    );
}

export default Home;