import PropTypes from "prop-types";

function EducationDiv({schoolName, titleOfStudy, dateOfStudy}) {
    return (
        <>
            <div>
                <div>{schoolName}</div>
                <div>{titleOfStudy}</div>
                <div>{dateOfStudy}</div>
            </div>
        </>
    )
}

EducationDiv.propTypes = {
    schoolName: PropTypes.string,
    titleOfStudy: PropTypes.string,
    dateOfStudy: PropTypes.string,
}

export default EducationDiv;