import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Header from './components/Header.jsx'
import PersonalForm from './components/PersonalForm.jsx'
import EducationForm from './components/EducationForm.jsx'
import ExperienceForm from "./components/ExperienceForm.jsx";

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Header/>
        <PersonalForm/>
        <EducationForm/>
        <ExperienceForm/>
    </StrictMode>,
)
