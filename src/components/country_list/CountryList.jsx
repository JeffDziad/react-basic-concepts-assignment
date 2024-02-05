import {Box, Chip, Grid} from "@mui/material";
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import { useState } from "react";
import "./CountryList.css";
import Country from "../country/Country";
import CountryAdd from "../country_add/CountryAdd";

export default function CountryList() {
    const [countries, setCountries] = useState([]);

    const totalMedals = () => {
        let t = 0;
        countries.forEach((item) => {
            for(let medal in item.medals) {
                t+=item.medals[medal];
            }
        });
        return t;
    }

    const totalBronze = () => {
        let t = 0;
        countries.forEach((item) => {
            t+=item.medals["bronze"];
        });
        return t;
    }

    const totalSilver = () => {
        let t = 0;
        countries.forEach((item) => {
            t+=item.medals["silver"];
        });
        return t;
    }

    const totalGold = () => {
        let t = 0;
        countries.forEach((item) => {
            t+=item.medals["gold"];
        });
        return t;
    }

    function addCountry(country) {
        let match = countries.find((c) => c.name === country.name);
        if(!match) {
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
            <Grid container direction="column" alignItems="stretch" sx={{marginBottom: "20px"}}>
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
                    <Grid container justifyContent="space-between">
                        <Grid item>
                            <Chip variant="outlined" style={{fontSize: "20px"}} label={
                                <p style={{display: "flex", alignItems: "center", flexWrap: "wrap"}}><EmojiEventsIcon fontSize="large" style={{color: "saddlebrown"}}/> - {totalBronze()}</p>
                            }></Chip>
                        </Grid>
                        <Grid item>
                            <Chip variant="outlined" style={{fontSize: "20px"}} label={
                                <p style={{display: "flex", alignItems: "center", flexWrap: "wrap"}}><EmojiEventsIcon fontSize="large" style={{color: "silver"}}/> - {totalSilver()}</p>
                            }></Chip>
                        </Grid>
                        <Grid item>
                            <Chip variant="outlined" style={{fontSize: "20px"}} label={
                                <p style={{display: "flex", alignItems: "center", flexWrap: "wrap"}}><EmojiEventsIcon fontSize="large" style={{color: "gold"}}/> - {totalGold()}</p>
                            }></Chip>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item sx={{marginTop: '10px'}}>
                    <Chip style={{fontSize: "20px"}} label={`Total: ${totalMedals()}`}></Chip>
                </Grid>
            </Grid>
        </Box>

    );
}