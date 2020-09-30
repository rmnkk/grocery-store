import React, {useMemo} from "react";
import PropTypes from 'prop-types';
import { Good } from "../Good";
import { FILTER } from '../../constants/FILTER';
import {OPTIONS} from "../../constants/OPTIONS";

export const GoodsList = ({goods, setGoods, filterValue}) => {
    const filteredGoods = useMemo(() => {
        switch (filterValue) {
            case FILTER.have:
                return goods
                    .filter(good => good.status)
                    .sort((a, b) => a.title.localeCompare(b.title));
            case FILTER.runOut:
                return goods
                    .filter(good => !good.status)
                    .sort((a, b) => a.title.localeCompare(b.title));
            default:
                return goods.sort((a, b) => a.priority - b.priority)
        }
    }, [filterValue, goods]);

    const handleGoodStatusChange = (id) => {
        setGoods(goods.map(good => {
            if (good.id === id) {
                return {
                    ...good,
                    date: new Date().toLocaleString("en-US", OPTIONS),
                    status: !good.status,
                };
            }

            return { ...good };
        }));
    };

    const handleGoodDeletion = (id) => {
        setGoods(goods.filter(good => good.id !== id));
    };

    return (
        <ul>
            {filteredGoods.map(good => (
                <Good
                    onGoodStatusChange={handleGoodStatusChange}
                    onGoodDeletion={handleGoodDeletion}
                    key={good.id}
                    {...good}
                />
            ))}
        </ul>
    );
};


GoodsList.propTypes = {
    goods: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            status: PropTypes.bool.isRequired,
            priority: PropTypes.number.isRequired,
        }).isRequired
    ).isRequired,
    setGoods: PropTypes.func.isRequired,
}
