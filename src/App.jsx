import './App.css'
import Header from './components/Header.jsx'
import PersonalButton from "./components/PersonalButton.jsx";
import MainForm from "./components/MainForm.jsx";

function App() {
    return (
        <>
            <Header/>
            <MainForm/>
            <div className="footer">Zane Lesley * University of Oklahoma</div>
        </>
    );
}

export default App
