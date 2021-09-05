import { useState } from "react";
import SearchBar from 'material-ui-search-bar';

export default function SearchBox(props) {
    const [searchStr, setSearchStr] = useState('');

    return (
        <SearchBar
            onChange={(newValue) => { setSearchStr(newValue) }}
            onRequestSearch={() => props.handleSearch(searchStr)}
            value={searchStr}
            style={{
                width: '100%'
            }}
        />
    )
}