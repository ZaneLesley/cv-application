import PropTypes from "prop-types";

function Input(props) {
    const inputOptions = {
        type: props.type,
        value: props.value,
        onChange: props.onChange,
        name: props.name,
    }

    return (
        <input {...inputOptions}></input>
    )
}

Input.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
}

export default Input