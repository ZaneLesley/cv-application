import PropTypes from "prop-types";

function ExperienceDiv({id, companyName, positionTitle, jobResponsibility, dateStarted, dateEnded}) {
    return (
        <div id = {id} className="experience">
            <div>{companyName}</div>
            <div>{positionTitle}</div>
            <div>{jobResponsibility}</div>
            <div>{dateStarted && dateEnded ? `${dateStarted} - ${dateEnded}` : ''}</div>
        </div>
    );
}

ExperienceDiv.propTypes = {
    companyName: PropTypes.string,
    positionTitle: PropTypes.string,
    jobResponsibility: PropTypes.string,
    dateStarted: PropTypes.string,
    dateEnded: PropTypes.string,
    id: PropTypes.number,
}

export default ExperienceDiv;

