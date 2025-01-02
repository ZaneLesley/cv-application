import Input from "./Input";
import useForm from "../hooks/useForm.jsx";
import PropTypes from "prop-types";

function PersonalForm({setPersonal}) {
    const {inputs, handleChange, handleSubmit} = useForm({
        name: "",
        email: "",
        phoneNumber: "",
    });

    const onSubmit = (data) => {
        setPersonal(data)
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

PersonalForm.propTypes = {
    setPersonal: PropTypes.func.isRequired,
}

export default PersonalForm;
