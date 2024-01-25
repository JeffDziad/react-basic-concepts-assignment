import { Grid } from "@mui/material";
import { useState } from "react";
import "./CountryList.css";
import Country from "../country/Country";
import CountryAdd from "../country_add/CountryAdd";

export default function CountryList() {
    const [countries, setCountries] = useState([
        {id: 0, name: "United States of America", medals: {bronze: 0, silver: 0, gold: 0}},
        {id: 1, name: "Poland", medals: {bronze: 0, silver: 0, gold: 0}},
        {id: 2, name: "Sweden", medals: {bronze: 0, silver: 0, gold: 0}}
    ]);

    // function addCountry() {
    //     if(countryName.length > 0 && countryName) {
    //         setCountries(c => [...c, {id: countries.length, name: countryName, medals: {bronze: 0, silver: 0, gold: 0}}]);
    //         setCountryName("");
    //     }
    // }

    function removeCountry(id) {
        let filtered = countries.filter(c => c.id !== id);
        setCountries(filtered);
    }

    return (
        <Grid>
            {/*<Paper component="form" onSubmit={e => e.preventDefault()} className="addCountryInput">*/}
            {/*    <InputBase value={countryName} onChange={event => {setCountryName(event.target.value)}} placeholder="Country Name" sx={{ p: '10px' }}></InputBase>*/}
            {/*    <IconButton type="button" onClick={addCountry}><AddIcon/></IconButton>*/}
            {/*</Paper>*/}
            <CountryAdd/>
            {(countries.length <= 0) ? <p style={{textAlign: 'center'}}>Your list is empty!</p> : ""}
            {countries.map((country) => <Country key={"country-"+country.id} country={country} onDelete={removeCountry}/>)}
        </Grid>
    );
}