import {useState} from "react";


/*
This function fixes the extra code of:

function PersonalForm() {
    const [inputs, setInputs] = useState({
        name: "",
        email: "",
        phoneNumber: ""
    });

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInputs((values) => ({...values, [name]: value}));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(Name: ${inputs.name || ""}, Email: ${inputs.email || ""}, Phone: ${inputs.phoneNumber || ""});
    }
 */


function useForm(initialValues) {
    const [inputs, setInputs] = useState({initialValues: initialValues});

    const handleChange = (e) => {
        /*
        this is the same as
        const name = e.target.name;
        const value = e.target.value;
         */
        const {name, value} = e.target;
        setInputs({...inputs, [name]: value});
    };

    const handleSubmit = (callback) => (e) => {
        e.preventDefault(); // Prevent the default form submission behavior (e.g., page reload)
        callback(inputs); // Call the provided callback with the current form data (inputs)
    };

    return {inputs, handleChange, handleSubmit};
}

export default useForm;
