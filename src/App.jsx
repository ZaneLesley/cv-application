import {useState} from 'react'
import './App.css'
import Header from './components/Header.jsx'
import PersonalForm from './components/PersonalForm.jsx'
import EducationForm from './components/EducationForm.jsx'
import ExperienceForm from "./components/ExperienceForm.jsx";
import ExperienceDiv from "./components/ExperienceDiv.jsx";
import EducationDiv from "./components/EducationDiv.jsx";
import PersonalDiv from "./components/PersonalDiv.jsx";

function App() {
    const [experience, setExperience] = useState(null);
    const [education, setEducation] = useState(null);
    const [personal, setPersonal] = useState(null);
    return (
        <>
            <Header/>
            <div className="article">
                <div className="forms">
                    <PersonalForm setPersonal={setPersonal}/>
                    <EducationForm setEducation={setEducation}/>
                    <ExperienceForm setExperience={setExperience}/>
                </div>
                <div className="container">
                    <PersonalDiv{...personal}/>
                    <EducationDiv{...education} />
                    <ExperienceDiv {...experience} />
                </div>
            </div>
            <div className="footer">Zane Lesley * University of Oklahoma</div>
        </>

    )
}

export default App
