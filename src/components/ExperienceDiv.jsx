import PropTypes from "prop-types";

function ExperienceDiv({ companyName, positionTitle, jobResponsibility, dateStarted, dateEnded }) {
    return (
        <div>
            <div>{companyName}</div>
            <div>{positionTitle}</div>
            <div>{jobResponsibility}</div>
            <div>{`${dateStarted} - ${dateEnded}`}</div>
        </div>
    );
}

ExperienceDiv.propTypes = {
    companyName: PropTypes.string,
    positionTitle: PropTypes.string,
    jobResponsibility: PropTypes.string,
    dateStarted: PropTypes.string,
    dateEnded: PropTypes.string,
}

export default ExperienceDiv;

