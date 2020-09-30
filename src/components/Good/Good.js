import React from "react";
import PropTypes from 'prop-types';

export const Good = ({
   id,
   title,
   status,
   priority,
   date,
   onGoodStatusChange,
   onGoodDeletion
}) => (
    <li>
        <span>
            {`We ${status ? 'have' : "ran out of "} ${title} | Priority is: ${priority} |`}
        </span>
        <span>
            {`Status was changed at ${date}`}
        </span>
        <button onClick={() => onGoodStatusChange(id)}>
            Change good status
        </button>
        <button onClick={() => onGoodDeletion(id)}>X</button>
    </li>
)

Good.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    status: PropTypes.bool.isRequired,
    priority: PropTypes.number.isRequired,
    onGoodStatusChange: PropTypes.func.isRequired,
    onGoodDeletion: PropTypes.func.isRequired,
}
