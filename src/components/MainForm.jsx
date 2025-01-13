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
    const [experience, setExperience] = useState(null);
    const [education, setEducation] = useState(null);
    const [personal, setPersonal] = useState(null);

    const [activeSection, setActiveSection] = useState("education");
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
                    <ExperienceForm setExperience={setExperience}
                                    style={{display: activeSection === "experience" ? "flex" : "none"}}/>
                </div>
            </div>
            <Paper>
                <PersonalDiv{...personal}/>
                <EducationDiv{...education} />
                <ExperienceDiv {...experience} />
            </Paper>
        </div>
    )
}


export default MainForm;