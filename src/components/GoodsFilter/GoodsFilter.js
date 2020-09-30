import React from "react";
import PropTypes from 'prop-types';

export const GoodsFilter = ({ setFilterValue }) => {
    return (
        <div>
            <button
                onClick={e => setFilterValue(e.target.innerText)}
            >
                All
            </button>
            <button
                onClick={e => setFilterValue(e.target.innerText)}
            >
                Have
            </button>
            <button
                onClick={e => setFilterValue(e.target.innerText)}
            >
                Run out
            </button>
        </div>
    );
};

GoodsFilter.propTypes = {
    setFilterValue: PropTypes.func.isRequired,
}
