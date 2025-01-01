import Input from "./Input";
import useForm from "../hooks/useForm";

function ExperienceForm() {
    const {inputs, handleChange, handleSubmit} = useForm({
        companyName: "",
        positionTitle: "",
        jobResponsibility: "",
        dateStarted: "",
        dateEnded: ""
    });

    const onSubmit = (data) => {
        alert(`Company Name: ${data.companyName}, position title: ${data.positionTitle}, job responsibilites: ${data.jobResponsibility}
        dateRange: ${data.dateStarted} - ${data.dateEnded}`);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>{"Enter your company's name:"}
                <Input type='text'
                       name="schoolName"
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

export default ExperienceForm