import Input from "./Input";
import useForm from "../hooks/useForm";
import PropTypes from "prop-types";

function ExperienceForm({setExperience, style}) {
    const {inputs, handleChange, handleSubmit} = useForm({
        companyName: "",
        positionTitle: "",
        jobResponsibility: "",
        dateStarted: "",
        dateEnded: ""
    });

    const onSubmit = (data) => {
        setExperience(data);
    };

    return (
        <form className="form" onSubmit={handleSubmit(onSubmit)} style={style}>
            <label>{"Enter your company's name:"}
                <Input type='text'
                       name="companyName"
                       value={inputs.companyName}
                       onChange={handleChange}
                />
            </label>
            <label>Enter your position title:
                <Input type='text'
                       name="positionTitle"
                       value={inputs.positionTitle}
                       onChange={handleChange}
                />
            </label>
            <label>Enter your job responsibility:
                <Input type='text'
                       name="jobResponsibility"
                       value={inputs.jobResponsibility}
                       onChange={handleChange}
                />
            </label>
            <label>Enter the date you started:
                <Input type="date"
                       name="dateStarted"
                       value={inputs.dateStarted}
                       onChange={handleChange}
                />
            </label>
            <label>Enter the date you ended:
                <Input type="date"
                       name="dateEnded"
                       value={inputs.dateEnded}
                       onChange={handleChange}
                />
            </label>
            <input type={"submit"}/>
        </form>
    )
}

ExperienceForm.propTypes = {
    setExperience: PropTypes.func.isRequired,
    style: PropTypes.object.isRequired,
}

export default ExperienceForm