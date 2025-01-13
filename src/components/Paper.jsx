import PropTypes from "prop-types";

function Paper({children}) {
    return (
        <div className="paper">{children}</div>
    )
}

Paper.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Paper;