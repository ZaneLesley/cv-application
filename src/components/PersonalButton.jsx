import PropTypes from "prop-types";

function PersonalButton ({onClick, text}) {
    return (
        <button onClick={onClick}>{text}</button>
    )
}

PersonalButton.propTypes = {
    onClick: PropTypes.func,
    text: PropTypes.string,
}

export default PersonalButton;