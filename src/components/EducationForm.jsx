import Input from "./Input";
import useForm from "../hooks/useForm";

function EducationForm() {
    const {inputs, handleChange, handleSubmit} = useForm({
        schoolName: "",
        titleOfStudy: "",
        dateOfStudy: ""
    });

    const onSubmit = (data) => {
        alert(`School Name: ${data.schoolName}, title of study: ${data.titleOfStudy}, date of study: ${data.dateOfStudy}`);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
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

export default EducationForm