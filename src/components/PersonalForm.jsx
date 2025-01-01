import Input from "./Input";
import useForm from "../hooks/useForm.jsx";

function PersonalForm() {
    const {inputs, handleChange, handleSubmit} = useForm({
        name: "",
        email: "",
        phoneNumber: "",
    });

    const onSubmit = (data) => {
        alert(`Name: ${data.name}, Email: ${data.email}, Phone: ${data.phoneNumber}`);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>
                Enter your name:
                <Input type="text" name="name" value={inputs.name} onChange={handleChange}/>
            </label>
            <label>
                Enter your email:
                <Input type="email" name="email" value={inputs.email} onChange={handleChange}/>
            </label>
            <label>
                Enter your phone number:
                <Input type="tel" name="phoneNumber" value={inputs.phoneNumber} onChange={handleChange}/>
            </label>
            <input type="submit"/>
        </form>
    );
}

export default PersonalForm;
