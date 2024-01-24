import { Grid, IconButton, InputBase, Paper } from "@mui/material";
import { useState } from "react";
import "./CountryList.css";
import AddIcon from '@mui/icons-material/Add';
import Country from "../country/Country";

export default function CountryList() {
    const [countryName, setCountryName] = useState("");
    const [countries, setCountries] = useState([
        {name: "United States of America", medals: 14},
        {name: "Poland", medals: 4},
        {name: "Sweden", medals: 8}
    ]);

    function addCountry() {
        if(countryName.length > 0 && countryName) {
            setCountries(c => [...c, {name: countryName, medals: 0}]);
            setCountryName("");
        }
    }

    return (
        <Grid>
            <Paper component="form" onSubmit={e => e.preventDefault()} className="addCountryInput">
                <InputBase value={countryName} onChange={event => {setCountryName(event.target.value)}} placeholder="Country Name" sx={{ p: '10px' }}></InputBase>
                <IconButton type="button" onClick={addCountry}><AddIcon/></IconButton>
            </Paper>
            {(countries.length <= 0) ? <p style={{textAlign: 'center'}}>Your list is empty!</p> : ""}
            {countries.map((country) => <Country key={country.name} name={country.name} medals={country.medals}/>)}
        </Grid>
    );
}