import React from "react";
import SearchBar from "./SearchBar";
import "./style.css"
import {StateProvider} from "./StateProvider";

export const initialState = {
    imageList: null
}

export const reducer = (state: any, action: any) => {
    switch (action.type) {
        case "SET_IMAGE_LIST":
            return {
                ...state,
                imageList: action.imageList
            }
        default:
            return state;
    }
}

const SearchImageIndex = () => {
    return(
        <StateProvider initialState={initialState} reducer={reducer}>
            <div className="search-box-container">
                <SearchBar />
            </div>
        </StateProvider>
    )
}


export default SearchImageIndex;
