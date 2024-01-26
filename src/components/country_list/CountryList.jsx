import {Box, Grid} from "@mui/material";
import { useState } from "react";
import "./CountryList.css";
import Country from "../country/Country";
import CountryAdd from "../country_add/CountryAdd";

export default function CountryList() {
    const [countries, setCountries] = useState([]);

    function addCountry(country) {
        let match = countries.find((c) => c.name === country.name);
        if(!match) {
            country.id = "country-"+Date.now();
            country.medals = {bronze: 0, silver: 0, gold: 0};
            setCountries(c => [...c, country]);
        }
    }

    function removeCountry(id) {
        let filtered = countries.filter(c => c.id !== id);
        setCountries(filtered);
    }

    return (
        <Box minWidth={400}>
            <Grid>
                {/*<Paper component="form" onSubmit={e => e.preventDefault()} className="addCountryInput">*/}
                {/*    <InputBase value={countryName} onChange={event => {setCountryName(event.target.value)}} placeholder="Country Name" sx={{ p: '10px' }}></InputBase>*/}
                {/*    <IconButton type="button" onClick={addCountry}><AddIcon/></IconButton>*/}
                {/*</Paper>*/}
                <CountryAdd onAddCountry={addCountry}/>
                {(countries.length <= 0) ? <p style={{textAlign: 'center'}}>Your list is empty!</p> : ""}
                {countries.map((country) => <Country key={country.id} country={country} onDelete={removeCountry}/>)}
            </Grid>
        </Box>

    );
}