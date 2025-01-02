import {useState} from 'react'
import './App.css'
import Header from './components/Header.jsx'
import PersonalForm from './components/PersonalForm.jsx'
import EducationForm from './components/EducationForm.jsx'
import ExperienceForm from "./components/ExperienceForm.jsx";
import ExperienceDiv from "./components/ExperienceDiv.jsx";

function App() {
    const [experience, setExperience] = useState(null);

    return (
        <>
            <Header/>
            <PersonalForm/>
            <EducationForm/>
            <ExperienceForm setExperience={setExperience} />
            {experience && <ExperienceDiv {...experience} />}
        </>
    )
}

export default App
