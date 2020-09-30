import React, { useState, useEffect } from 'react';
import { NewGood } from "../NewGood";
import "./GroceryApp.scss";
import { GoodsList } from "../GoodsList";
import {GoodsFilter} from "../GoodsFilter";
import {OPTIONS} from "../../constants/OPTIONS";

export const GroceryApp = () => {
    const [goods, setGoods] = useState([]);
    const [filterValue, setFilterValue] = useState();

    useEffect(() => {
        if (localStorage.getItem('goods')) {
            setGoods([...JSON.parse(localStorage.getItem('goods'))]);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('goods', JSON.stringify(goods));
    }, [goods]);

    const handleGoodAddition = (title, priority) => {
        if (title) {
            setGoods([...goods, {
                id: +new Date(),
                title,
                status: false,
                priority,
                date: new Date().toLocaleString("en-US", OPTIONS),
            }]);
        }
    };

    return (
        <section className="groceryapp">
            <header>
                <h1>Grocery App</h1>

                <NewGood
                    onGoodAddition={handleGoodAddition}
                />
            </header>

            <section>
                <GoodsList
                    goods={goods}
                    setGoods={setGoods}
                    filterValue={filterValue}
                />

                <GoodsFilter setFilterValue={setFilterValue}/>
            </section>
        </section>
    );
};
