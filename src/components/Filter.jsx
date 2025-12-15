import React from "react";
import { useState } from "react";

export default function Filter({ onChangeShowGreased, onChangeHandleSort, sortBy = "", showGreased = false }) {

    function handleGreasedToggle() {
        if (onChangeShowGreased) 
          onChangeShowGreased();
    };

    function handleSortChange(e) {
        if (onChangeHandleSort) 
          onChangeHandleSort(e);
    };

    return (
        <>
            <div className="ui menu">

                <div className="ui item">
                  <label htmlFor="sortFilter"> Sort by: </label>
                  <select id="sortFilter" className="ui selection dropdown" value={sortBy} onChange={handleSortChange}>
                    <option value="name">Name</option>
                    <option value="weight">Weight</option>
                  </select>
                </div>

                <div className="ui item">
                  <label htmlFor="filter-greased"> Greased Pigs Only?</label>
                  <input id="filter-greased" type="checkbox" className="ui toggle checkbox" checked={showGreased} onChange={handleGreasedToggle} />
                </div>

            </div>
        </>
    );
};