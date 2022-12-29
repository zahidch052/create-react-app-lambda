import React from 'react';
import "./SearchBar.css";
import { searchAsset } from "../../assets";

const SearchBar = ({value,placeholder,onChange,searchClass,icon},props) => {
    return (
        <>
            <img src={icon} alt="" width="13px" height="13px" className="ms-2 searchIcon" />
            <input type="text" name="" value={value} placeholder={placeholder} className={searchClass} onChange={onChange} onBlur={onChange} onKeyPress={onChange}/>
        </>
    )
}

export default SearchBar;
