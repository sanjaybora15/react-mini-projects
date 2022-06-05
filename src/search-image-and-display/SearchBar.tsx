import React, {useState} from "react";

interface Props {
    onChange: () => void;
}

const SearchBar = () => {
    const [value, setValue] = useState<string>("");
    return(
        <div>
            <input
                type="text"
                onChange={(e) => setValue(e.target.value)}
                value={value}
            />
        </div>
    )
}


export default SearchBar;
