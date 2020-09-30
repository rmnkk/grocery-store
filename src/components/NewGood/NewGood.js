import React, { useState } from "react";
import PropTypes from 'prop-types'

export const NewGood = ({ onGoodAddition }) => {
    const [inputValue, setInputValue] = useState('');
    const [selectValue, setSelectValue] = useState('');

    const handleSelectChange = (event) => {
        const { value } = event.target;

        setSelectValue(value);
    }

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();

                onGoodAddition(inputValue, +selectValue);

                setInputValue('');
                setSelectValue('');
            }}
        >
            <input
                value={inputValue}
                type="text"
                className="new-good"
                placeholder="Please, enter your good title here"
                onChange={e => setInputValue(e.target.value.trimLeft())}
            />

            <select value={selectValue} onChange={(e) => handleSelectChange(e)}>
                <option value="">Select priority</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>

            <button type={"submit"}>
                Add good to the grocery list
            </button>
        </form>
    )
}

NewGood.propTypes = {
    onGoodAddition: PropTypes.func.isRequired,
}
