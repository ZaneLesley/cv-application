import PropTypes from "prop-types";

function PersonalDiv({name, email, phoneNumber, github}) {
    return (
        <div className="personal">
            <div className="bold" style={{fontSize: "2rem"}}>{name}</div>
            <div>{email}</div>
            <div>{phoneNumber}</div>
            <div>{github}</div>
        </div>
    )
}

PersonalDiv.propTypes = {
    name: PropTypes.string,
    email: PropTypes.string,
    phoneNumber: PropTypes.string,
    github: PropTypes.string,
}

export default PersonalDiv;