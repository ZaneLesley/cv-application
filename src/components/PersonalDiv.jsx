import PropTypes from "prop-types";

function PersonalDiv({name, email, phoneNumber}) {
    return (
        <div className="personal">
            <div>{name}</div>
            <div>{email}</div>
            <div>{phoneNumber}</div>
        </div>
    )
}

PersonalDiv.propTypes = {
    name: PropTypes.string,
    email: PropTypes.string,
    phoneNumber: PropTypes.string,
}

export default PersonalDiv;