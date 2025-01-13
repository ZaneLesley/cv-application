import Input from "./Input";
import useForm from "../hooks/useForm";
import PropTypes from "prop-types";

function EducationForm({setEducation, style}) {
    const {inputs, handleChange, handleSubmit} = useForm({
        schoolName: "",
        titleOfStudy: "",
        dateOfStudy: ""
    });

    const onSubmit = (data) => {
        setEducation(data)
    };

    return (
        <form className="form" onSubmit={handleSubmit(onSubmit)} style={style}>
            <label>{"Enter your school's name:"}
                <Input type='text'
                       name="schoolName"
                       value={inputs.schoolName}
                       onChange={handleChange}
                />
            </label>
            <label>Enter your area of study:
                <Input type='text'
                       name="titleOfStudy"
                       value={inputs.titleOfStudy}
                       onChange={handleChange}
                />
            </label>
            <label>Enter the date of study:
                <Input type="date"
                       name="dateOfStudy"
                       value={inputs.dateOfStudy}
                       onChange={handleChange}
                />
            </label>
            <input type={"submit"}/>
        </form>
    )
}

EducationForm.propTypes = {
    setEducation: PropTypes.func.isRequired,
    style: PropTypes.object.isRequired,
}

export default EducationForm