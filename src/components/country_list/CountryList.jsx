import {Box, Chip, Grid} from "@mui/material";
import { useState } from "react";
import "./CountryList.css";
import Country from "../country/Country";
import CountryAdd from "../country_add/CountryAdd";

export default function CountryList() {
    const [countries, setCountries] = useState([]);

    const totalCountryMedals = () => {
        let t = 0;
        countries.forEach((item) => {
            for(let medal in item.medals) {
                t+=item.medals[medal];
            }
        });
        return t;
    }

    function addCountry(country) {
        let match = countries.find((c) => c.name === country.name);
        if(!match) {
            country.id = "country-"+Date.now();
            country.medals = {bronze: 0, silver: 0, gold: 0}
            setCountries(c => [...c, country]);
        }
    }

    function removeCountry(id) {
        let filtered = countries.filter(c => c.id !== id);
        setCountries(filtered);
    }

    function incrementMedal(id, medal) {
        let c2 = [...countries];
        let country = c2.find((c) => c.id === id);
        country.medals[medal]++;
        setCountries(c2);
    }

    function decrementMedal(id, medal) {
        let c2 = [...countries];
        let country = c2.find((c) => c.id === id);
        if(country.medals[medal] > 0) country.medals[medal]--;
        setCountries(c2);
    }

    return (
        <Box minWidth={400}>
            <Grid container direction="column" alignItems="stretch">
                <Grid item>
                    <div>
                        <CountryAdd onAddCountry={addCountry}/>
                    </div>
                </Grid>
                <Grid item>
                    {(countries.length <= 0) ? <p style={{textAlign: 'center'}}>Your list is empty!</p> : ""}
                    {countries.map((country) => <Country key={country.id} country={country} onIncrement={incrementMedal} onDecrement={decrementMedal} onDelete={removeCountry}/>)}
                </Grid>
                <Grid item sx={{marginTop: '10px'}}>
                    <Chip label={`Total Medals: ${totalCountryMedals()}`}></Chip>
                </Grid>
            </Grid>
        </Box>

    );
}