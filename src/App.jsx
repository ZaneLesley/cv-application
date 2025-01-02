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
            <PersonalForm setPersonal={setPersonal}/>
            <EducationForm setEducation={setEducation} />
            <ExperienceForm setExperience={setExperience} />
            {experience && <ExperienceDiv {...experience} />}
            {education && <EducationDiv{...education} />}
            {personal && <PersonalDiv{...personal}/>}
        </>
    )
}

export default App
