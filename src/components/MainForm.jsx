import PersonalForm from "./PersonalForm.jsx";
import EducationForm from "./EducationForm.jsx";
import ExperienceForm from "./ExperienceForm.jsx";
import {useState} from "react";
import Paper from "./Paper.jsx";
import PersonalDiv from "./PersonalDiv.jsx";
import EducationDiv from "./EducationDiv.jsx";
import ExperienceDiv from "./ExperienceDiv.jsx";
import PersonalButton from "./PersonalButton.jsx";

function MainForm() {
    const [experiences, setExperiences] = useState([]);
    const [education, setEducation] = useState({});
    const [personal, setPersonal] = useState({});

    const [activeSection, setActiveSection] = useState("education");

    const addExperience = (data) => {
        setExperiences((prev) => [...prev, {id: Date.now(), ...data}]);
    }
    return (
        <div className="article">
            <div className="container">
                <div className="navigation">
                    <PersonalButton onClick={() => setActiveSection("personal")} text="Personal"/>
                    <PersonalButton onClick={() => setActiveSection("education")} text="Education"/>
                    <PersonalButton onClick={() => setActiveSection("experience")} text="Experience"/>
                </div>
                <div className="forms">
                    <PersonalForm setPersonal={setPersonal}
                                  style={{display: activeSection === "personal" ? "flex" : "none"}}/>
                    <EducationForm setEducation={setEducation}
                                   style={{display: activeSection === "education" ? "flex" : "none"}}/>
                    <ExperienceForm setExperience={addExperience}
                                    style={{display: activeSection === "experience" ? "flex" : "none"}}/>
                </div>
            </div>
            <Paper>
                <PersonalDiv{...personal}/>
                <EducationDiv{...education} />
                {/* dynamic adding of experience */}
                {experiences.map(experience => (
                    <ExperienceDiv key={experience.id} id={experience.id} {...experience} />
                ))}
            </Paper>
        </div>
    )
}


export default MainForm;