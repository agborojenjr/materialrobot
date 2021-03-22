import React from 'react';
import TextField from '@material-ui/core/TextField';


const SearchBox = ({ searchChange }) => {
    return (
        <TextField 
            id="outlined-search" 
            label="Search Robots..." 
            type="search" 
            variant="outlined" 
            style={{ 
                backgroundColor:'#DEFFFF', 
                textAlign:'center', 
                marginTop: 20, 
                // width: 100,
                // height: 5
                }}
            onChange={searchChange}
        />
    );
}

export default SearchBox;